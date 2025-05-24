<template>
  <div class="chart-page">
    <h2>📍 Scatter Plot</h2>
    <p class="description">
      A <strong>scatter plot</strong> displays individual data points based on two variables.
      It's great for finding relationships, trends, clusters, or outliers between variables.
    </p>

    <ScatterPlot :data="scatterData" :width="700" :height="450" />

    <div class="data-details">
      <h3>Example: Ad Spend vs Sales</h3>
      <p>
        This chart maps advertising spend against the resulting sales. A positive upward trend
        may indicate that more investment leads to higher returns.
      </p>
    </div>
  </div>
</template>

<script setup>
import ScatterPlot from "../components/ScatterPlot.vue";

const scatterData = [
  { x: 100, y: 200 },
  { x: 200, y: 300 },
  { x: 300, y: 450 },
  { x: 400, y: 500 },
  { x: 500, y: 700 },
  { x: 600, y: 650 },
];
</script>
