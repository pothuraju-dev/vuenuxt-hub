<template>
  <div class="chart-page">
    <h2>🍩 Donut Chart</h2>
    <p class="description">
      A <strong>donut chart</strong> is a variation of the pie chart with a
      hollow center. It offers similar insights while providing a space to
      display totals or additional labels in the middle.
    </p>

    <DonutChart :data="donutData" :width="500" :height="500" />

    <div class="data-details">
      <h3>Example: Contribution Breakdown</h3>
      <p>
        This chart shows how efforts are divided between different roles in a
        project.
      </p>
    </div>
  </div>
</template>

<script setup>
import DonutChart from "../components/DonutChart.vue";

const donutData = [
  { label: "Docs", value: 25 },
  { label: "Code", value: 45 },
  { label: "Community", value: 30 },
];
</script>
