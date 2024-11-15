<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
<div class="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
          <el-aside width="200px">
            <m-side-bar></m-side-bar>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
    </el-container>
</div>
</template>
