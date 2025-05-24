<template>
  <div class="chart-page">
    <h2>📉 Area Chart</h2>
    <p class="description">
      An <strong>area chart</strong> is like a line chart, but with the area below the line filled in.
      It emphasizes the magnitude of values over time and is ideal for showing cumulative data or stacked values.
    </p>

    <AreaChart :data="areaData" :width="800" :height="450" />

    <div class="data-details">
      <h3>Example: Monthly User Growth</h3>
      <p>This chart visualizes how user signups have grown month by month.</p>
    </div>
  </div>
</template>

<script setup>
import AreaChart from "../components/AreaChart.vue";

const areaData = [
  { date: "2024-01-01", value: 100 },
  { date: "2024-02-01", value: 200 },
  { date: "2024-03-01", value: 400 },
  { date: "2024-04-01", value: 350 },
  { date: "2024-05-01", value: 500 },
  { date: "2024-06-01", value: 650 },
];
</script>
