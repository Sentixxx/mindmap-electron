<template>
	<el-menu
		:collapse="true"
		:unique-opened="false"
		:collapse-transition="false"
	>
		<el-menu-item>
			<el-icon><el-icon-menu/></el-icon>
		</el-menu-item>
		<el-menu-item>
			<el-icon><el-icon-plus/></el-icon>
		</el-menu-item>
		<el-menu-item>
			<el-icon><el-icon-setting/></el-icon>
		</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
import { useAppStore } from '@renderer/store/modules/app';

const appStore = useAppStore();
</script>

<style lang="css"></style>
