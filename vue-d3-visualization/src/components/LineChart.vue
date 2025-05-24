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
    default: 700,
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

  const parseDate = d3.timeParse("%Y-%m-%d");

  const x = d3
    .scaleTime()
    .domain(d3.extent(props.data, (d) => parseDate(d.date)))
    .range([0, width]);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(props.data, (d) => d.value)])
    .nice()
    .range([height, 0]);

  const line = d3
    .line()
    .x((d) => x(parseDate(d.date)))
    .y((d) => y(d.value))
    .curve(d3.curveMonotoneX);

  chart
    .append("path")
    .datum(props.data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("d", line);

  chart
    .selectAll("circle")
    .data(props.data)
    .join("circle")
    .attr("cx", (d) => x(parseDate(d.date)))
    .attr("cy", (d) => y(d.value))
    .attr("r", 3)
    .attr("fill", "steelblue");

  chart
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b %d")));

  chart.append("g").call(d3.axisLeft(y));
};

onMounted(drawChart);
watch(() => props.data, drawChart);
</script>
