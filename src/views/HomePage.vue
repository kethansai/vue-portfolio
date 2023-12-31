<script setup>
import ProfileSection from "@/components/sections/ProfileSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import WorkSection from "@/components/sections/WorkSection.vue";
</script>

<template>
  <div id="Home-page" class="w-100 my-3 mx-6 lg:my-12 lg:mx-24">
    <ProfileSection />
    <el-divider>
      <el-icon><star-filled /></el-icon>
      <el-icon><star-filled /></el-icon>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <WorkSection />
    <el-divider>
      <el-icon><star-filled /></el-icon>
      <el-icon><star-filled /></el-icon>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <FooterSection />
  </div>
</template>

<style lang="scss">
#Home-page {
}
</style>
