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
    // Format: [{ x: 10, y: 20 }, { x: 40, y: 60 }, ...]
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
  const margin = { top: 20, right: 30, bottom: 40, left: 50 };
  const width = props.width - margin.left - margin.right;
  const height = props.height - margin.top - margin.bottom;

  const svgEl = d3.select(svg.value);
  svgEl.selectAll("*").remove();

  const chart = svgEl
    .attr("width", props.width)
    .attr("height", props.height)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3
    .scaleLinear()
    .domain([0, d3.max(props.data, (d) => d.x)])
    .nice()
    .range([0, width]);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(props.data, (d) => d.y)])
    .nice()
    .range([height, 0]);

  chart
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  chart.append("g").call(d3.axisLeft(y));

  chart
    .selectAll("circle")
    .data(props.data)
    .join("circle")
    .attr("cx", (d) => x(d.x))
    .attr("cy", (d) => y(d.y))
    .attr("r", 5)
    .attr("fill", "steelblue");

  // Optional tooltip on hover can be added later
};

onMounted(drawChart);
watch(() => props.data, drawChart);
</script>
