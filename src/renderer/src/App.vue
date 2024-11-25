<script setup lang="ts">
import HomeView from './views/HomeView.vue';
</script>

<template>
	<div class="app-container">
		<el-container>
			<el-aside width="100px" class="sidebar-container">
				<MSideBar />
			</el-aside>
			<el-main>
				<RouterView />
			</el-main>
		</el-container>
	</div>
</template>

<style lang="css">
html,
body,
#app {
	height: 100%;
}

.app-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	/* 使用视窗高度作为高度设置 */
}

.sidebar-container {
	position: fixed;
	top: 999;
	bottom: 0;
	left: 0;
	z-index: 999;
	width: 100px;
	transition: width 0.28s;

	:deep(.el-menu) {
		border: none;
	}
}
</style>
