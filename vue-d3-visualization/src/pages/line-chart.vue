<template>
  <div class="chart-page">
    <h2>📈 Line Chart</h2>
    <p class="description">
      A <strong>line chart</strong> shows trends over time or other continuous
      data. It's useful for tracking progress, growth, or changes in value. Each
      point is connected with a line to highlight the flow of data.
    </p>

    <LineChart :data="lineData" :width="800" :height="450" />

    <div class="data-details">
      <h3>Example: Weekly Visitors</h3>
      <p>
        This chart displays how the number of visitors has changed over a week.
      </p>
    </div>
  </div>
</template>

<script setup>
import LineChart from "../components/LineChart.vue";

const lineData = [
  { date: "2024-01-01", value: 30 },
  { date: "2024-01-02", value: 45 },
  { date: "2024-01-03", value: 60 },
  { date: "2024-01-04", value: 40 },
  { date: "2024-01-05", value: 70 },
  { date: "2024-01-06", value: 50 },
  { date: "2024-01-07", value: 90 },
];
</script>
