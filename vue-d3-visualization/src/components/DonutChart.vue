<template>
  <svg ref="svg"></svg>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import * as d3 from "d3";

const props = defineProps({
  data: {
    type: Array,
    required: true,
    // Format: [{ label: 'Vue', value: 40 }, { label: 'React', value: 30 }]
  },
  width: {
    type: Number,
    default: 400,
  },
  height: {
    type: Number,
    default: 400,
  },
});

const svg = ref(null);

const drawChart = () => {
  const radius = Math.min(props.width, props.height) / 2;

  const svgEl = d3.select(svg.value);
  svgEl.selectAll("*").remove();

  const chart = svgEl
    .attr("width", props.width)
    .attr("height", props.height)
    .append("g")
    .attr("transform", `translate(${props.width / 2}, ${props.height / 2})`);

  const color = d3
    .scaleOrdinal()
    .domain(props.data.map((d) => d.label))
    .range(d3.schemeCategory10);

  const pie = d3.pie().value((d) => d.value);

  const arc = d3
    .arc()
    .innerRadius(radius * 0.5) // Donut center hole
    .outerRadius(radius - 10);

  chart
    .selectAll("path")
    .data(pie(props.data))
    .join("path")
    .attr("d", arc)
    .attr("fill", (d) => color(d.data.label))
    .attr("stroke", "white")
    .attr("stroke-width", 2);

  const labelArc = d3.arc().innerRadius(radius * 0.7).outerRadius(radius - 30);

  chart
    .selectAll("text")
    .data(pie(props.data))
    .join("text")
    .attr("transform", (d) => `translate(${labelArc.centroid(d)})`)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .text((d) => d.data.label);

  // Optional center text
  const total = d3.sum(props.data.map((d) => d.value));
  chart
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "0.3em")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text(total);
};

onMounted(drawChart);
watch(() => props.data, drawChart);
</script>
