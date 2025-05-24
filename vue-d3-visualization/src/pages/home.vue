<template>
  <div>
    <h2>Chart Demos</h2>
    <div class="chart-grid">
      <RouterLink
        v-for="item in chartList"
        :key="item.link"
        :to="item.link"
        class="chart-card"
      >
        {{ item.title }}
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
const chartList = [
  { title: "Bar Chart", link: "/bar" },
  { title: "Line Chart", link: "/line" },
  { title: "Pie Chart", link: "/pie" },
  { title: "Donut Chart", link: "/donut" },
  { title: "Area Chart", link: "/area" },
  { title: "Scatter Plot", link: "/scatter" },
];
</script>

<style scoped>
.chart-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.chart-card {
  display: block;
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  color: #1976d2;
  transition: transform 0.2s, box-shadow 0.2s;
}

.chart-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
