<template>
  <div class="bar-chart-page">
    <h2>📊 Bar Chart</h2>
    <p class="description">
      A <strong>bar chart</strong> is used to display categorical data using rectangular bars. 
      Each bar represents a category, and its height represents the value or frequency.
      It's ideal for comparing different groups or tracking changes across categories.
    </p>

    <BarChart :data="barData" :width="800" :height="500" />

    <div class="data-details">
      <h3>Example: Letter Frequency in English</h3>
      <p>
        This chart shows how often each letter appears in English words.
        The most common letter is "E", followed by "T", "A", and so on.
      </p>
    </div>
  </div>
</template>

<script setup>
import BarChart from "../components/BarChart.vue";

const barData = [
  { letter: "E", frequency: 12.7 },
  { letter: "T", frequency: 9.1 },
  { letter: "A", frequency: 8.2 },
  { letter: "O", frequency: 7.5 },
  { letter: "I", frequency: 7.0 },
  { letter: "N", frequency: 6.7 },
  { letter: "S", frequency: 6.3 },
  { letter: "H", frequency: 6.1 },
  { letter: "R", frequency: 6.0 },
  { letter: "D", frequency: 4.3 },
];
</script>

<style scoped>
.bar-chart-page {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

.description {
  font-size: 16px;
  color: #444;
  margin-bottom: 20px;
}

.data-details {
  margin-top: 30px;
  padding: 20px;
  background: #f0f4f9;
  border-left: 5px solid #1976d2;
  border-radius: 8px;
}
</style>
