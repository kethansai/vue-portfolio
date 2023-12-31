<template>
  <el-container class="portfolio bg-zinc-50 dark:bg-zinc-900">
    <router-view />
  </el-container>
  <div class="theme-mode">
    <el-dropdown @command="onModeChange">
      <span class="el-dropdown-link">
        <FWIcon
          :icon="`${
            mode == 'system' ? 'desktop' : mode == 'dark' ? 'moon' : 'sun'
          }`"
        />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="dark"
            ><FWIcon icon="moon" /> Dark</el-dropdown-item
          >
          <el-dropdown-item command="light"
            ><FWIcon icon="sun" /> Light</el-dropdown-item
          >
          <el-dropdown-item command="system"
            ><FWIcon icon="desktop" /> System</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";

const mode = ref("system");

const checkThemeMode = () => {
  if ("theme" in localStorage) {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      mode.value = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      mode.value = "light";
    }
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
    mode.value = "system";
  } else {
    mode.value = "system";
  }
};

const onModeChange = (param) => {
  mode.value = param;
  if (param != "system") {
    localStorage.theme = param;
  } else {
    localStorage.removeItem("theme");
  }
  checkThemeMode();
};

onBeforeMount(() => {
  checkThemeMode();
});
</script>

<style lang="scss">
.portfolio.el-container {
  min-height: 100vh;
  width: 100%;
}
.theme-mode {
  position: fixed;
  top: 30px;
  right: 30px;
  .el-dropdown {
    font-size: x-large;
    &-link {
      outline: none;
    }
  }
}
</style>
