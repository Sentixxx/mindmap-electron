<template>
	<el-menu :collapse="true" :unique-opened="false" :collapse-transition="false">
		<el-menu-item @click="navigateToHome">
			<el-icon><el-icon-menu /></el-icon>
			<span>首页</span>
		</el-menu-item>
		<el-menu-item @click="navigateToNew">
			<el-icon><el-icon-plus /></el-icon>
			<span>新建</span>
		</el-menu-item>
		<el-menu-item @click="navigateToSettings">
			<el-icon><el-icon-setting /></el-icon>
			<span>设置</span>
		</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
import { useAppStore } from '@renderer/store/modules/app';
import { useRouter } from 'vue-router';

const appStore = useAppStore();
const router = useRouter();

function navigateToHome() {
	router.push('/');
}

function navigateToNew() {
	router.push('/new');
}

function navigateToSettings() {
	router.push('/settings'); // 跳转到设置界面
}
</script>

<style lang="css">
.el-menu-item {
	cursor: pointer; /* 鼠标指针为手型 */
}
</style>
