<template>
  <div class="chart-page">
    <h2>🥧 Pie Chart</h2>
    <p class="description">
      A <strong>pie chart</strong> divides a circle into slices to illustrate
      proportion or percentage. It's best used for visualizing parts of a whole
      when comparing fewer categories.
    </p>

    <PieChart :data="pieData" :width="500" :height="500" />

    <div class="data-details">
      <h3>Example: Framework Usage Share</h3>
      <p>
        This chart shows how different JavaScript frameworks are used based on
        survey results.
      </p>
    </div>
  </div>
</template>

<script setup>
import PieChart from "../components/PieChart.vue";

const pieData = [
  { label: "Vue", value: 45 },
  { label: "React", value: 30 },
  { label: "Angular", value: 15 },
  { label: "Svelte", value: 10 },
];
</script>
