<template>
  <div class="Framework-Experience">
    <div class="text-center text-2xl font-bold my-12">
      Experience on frameworks
    </div>
    <div
      class="flex flex-wrap md:flex-row justify-center items-center gap-3 mb-12"
    >
      <el-card class="framework-card">
        <FWIcon icon="fa-brands fa-java" />
        <div>Java (Structs)</div>
        <div class="text-sm text-zinc-500">
          <FWIcon icon="clock" /> 8 Months
        </div>
      </el-card>
      <el-card class="framework-card">
        <FWIcon icon="fa-brands fa-angular" style="color: #ec1842" />
        <div>Angular</div>
        <div class="text-sm text-zinc-500">
          <FWIcon icon="clock" /> 1.2 Years
        </div>
      </el-card>
      <el-card class="framework-card">
        <FWIcon icon="fa-brands fa-react" style="color: #74c0fc" spin />
        <div>React JS</div>
        <div class="text-sm text-zinc-500">
          <FWIcon icon="clock" /> 2.2 Years
        </div>
      </el-card>
      <el-card class="framework-card">
        <FWIcon icon="fa-brands fa-vuejs" style="color: #63e6be" />
        <div>Vue JS</div>
        <div class="text-sm text-zinc-500">
          <FWIcon icon="clock" /> 1.5 Years
        </div></el-card
      >
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
.framework-card {
  min-width: 160px;
  @apply shadow-xl dark:shadow-lg;
  .el-card__body {
    @apply flex flex-col gap-3 items-center;
    [data-prefix="fab"] {
      @apply text-8xl;
    }
  }
}
</style>
