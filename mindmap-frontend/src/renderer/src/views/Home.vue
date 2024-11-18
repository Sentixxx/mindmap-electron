<template>
	<div class="home-box">
		<el-container>
			<el-aside width="100px" class="sidebar-container">
				<MSideBar />
			</el-aside>
			<el-main>
				<MainPage />
			</el-main>
		</el-container>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="css">
.home-box {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh; /* 使用视窗高度作为高度设置 */
}
.sidebar-container {
	position: fixed;
	top: 0;
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
