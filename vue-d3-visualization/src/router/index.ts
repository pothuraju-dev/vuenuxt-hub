import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home.vue";
import Bar from "../pages/bar-chart.vue";
import Line from "../pages/line-chart.vue";
import Pie from "../pages/pie-chart.vue";
import Donut from "../pages/donut-chart.vue";
import Area from "../pages/area-chart.vue";
import Scatter from "../pages/scatter-plot.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/bar", component: Bar },
  { path: "/line", component: Line },
  { path: "/pie", component: Pie },
  { path: "/donut", component: Donut },
  { path: "/area", component: Area },
  { path: "/scatter", component: Scatter },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
