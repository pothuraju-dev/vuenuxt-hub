<template>
  <div id="app">
    <header>
      <h1>📊 VueNuxt Hub - Chart Showcase</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/bar">Bar</RouterLink>
        <RouterLink to="/line">Line</RouterLink>
        <RouterLink to="/pie">Pie</RouterLink>
        <RouterLink to="/donut">Donut</RouterLink>
        <RouterLink to="/area">Area</RouterLink>
        <RouterLink to="/scatter">Scatter</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
#app {
  font-family: "Segoe UI", sans-serif;
  padding: 20px;
  max-width: 900px;
  margin: auto;
}

header {
  margin-bottom: 20px;
}

nav {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

a {
  text-decoration: none;
  color: #1976d2;
  font-weight: bold;
}

a.router-link-exact-active {
  text-decoration: underline;
}
</style>
