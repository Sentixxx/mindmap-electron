<template>
	<div class="settings-container">
		<h1>设置</h1>
		<el-switch
			v-model="isDarkTheme"
			active-text="明亮主题"
			inactive-text="暗黑主题"
			@change="toggleTheme"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';

const isDarkTheme = useStorage('dark-theme', false); // 使用本地存储

function toggleTheme() {
	document.body.classList.toggle('dark-theme', isDarkTheme.value);
	console.log('Current theme:', isDarkTheme.value ? 'Dark' : 'Light'); // 添加调试输出
}
</script>

<style lang="css">
.settings-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
</style>
