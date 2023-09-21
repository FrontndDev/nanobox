<template>
  <div class="income-chart">
    <div class="income-chart__title">
      <div class="income-chart__time">
        Продажи в моей структуре
        <ChartSelectMonth/>
      </div>
      <div class="income-chart__income">
        Доход:
        <div class="income-chart__income-value">12,987<span>.34 USD</span></div>
      </div>
    </div>
    <div class="income-chart__diagram">
      <Line ref="chartjs" :data="chartData" :options="chartOptions"/>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js'

import { Line } from 'vue-chartjs';
import * as chartConfig from "@/configs/chartConfig";
import ChartSelectMonth from "@/components/Views/Cabinet/IncomeChart/ChartSelectMonth.vue";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
)

export default {
  name: "IncomeChart",
  components: {
    ChartSelectMonth,
    Line
  },
  data() {
    return chartConfig
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/Views/cabinet/_incomeChart.scss";
</style>