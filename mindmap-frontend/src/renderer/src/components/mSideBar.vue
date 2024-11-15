<template>
    <el-menu
        :collapse="!appStore.sidebar.opened"
        :unique-opened="false"
        :collapse-transition="false"
        :router="true"
    >
        <el-menu-item index="/home">
            <el-icon class="icon"><House /></el-icon>
            <template #title><span>首页</span> </template>
        </el-menu-item>
        <el-sub-menu index="">
            <template #title>
                <el-icon><Setting /></el-icon>
                <span>记录</span>
            </template>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
import { useAppStore } from '@renderer/store/modules/app';

const appStore = useAppStore();

</script>