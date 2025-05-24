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
  },
  width: {
    type: Number,
    default: 600,
  },
  height: {
    type: Number,
    default: 400,
  },
});

const svg = ref(null);

const drawChart = () => {
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const width = props.width - margin.left - margin.right;
  const height = props.height - margin.top - margin.bottom;

  const svgEl = d3.select(svg.value);
  svgEl.selectAll("*").remove(); // Clear previous drawings

  const chart = svgEl
    .attr("width", props.width)
    .attr("height", props.height)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3
    .scaleBand()
    .domain(props.data.map((d) => d.letter))
    .range([0, width])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(props.data, (d) => d.frequency)])
    .nice()
    .range([height, 0]);

  chart
    .selectAll("rect")
    .data(props.data)
    .join("rect")
    .attr("x", (d) => x(d.letter))
    .attr("y", (d) => y(d.frequency))
    .attr("width", x.bandwidth())
    .attr("height", (d) => height - y(d.frequency))
    .attr("fill", "steelblue");

  chart
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .style("text-anchor", "end");

  chart.append("g").call(d3.axisLeft(y));

  // Y-axis label
  chart
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 10)
    .attr("x", -height / 2)
    .attr("dy", "-1em")
    .style("text-anchor", "middle")
    .text("Frequency (%)");
};
onMounted(drawChart);
watch(() => props.data, drawChart);
</script>

<style scoped>
svg {
  font-family: sans-serif;
}
</style>
