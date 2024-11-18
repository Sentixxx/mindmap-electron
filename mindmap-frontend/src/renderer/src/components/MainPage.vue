<script setup lang="ts">
function openFile() {
	// window.electron.openFile();
}

function saveFile() {
	// window.electron.saveFile();
}
</script>

<template>
	<div class="mainpage-box">
		<div class="name">SparkMap</div>
		<div class="btn">
			<el-button type="primary" @click="openFile">打开文件</el-button>
			<el-button type="primary" @click="saveFile">保存文件</el-button>
		</div>
	</div>
</template>

<style lang="css">
#mainpage-box {
	display: flex;
	justify-content: center;
	align-items: center;
}
.name {
	font-size: 80px;
	font-weight: bold;
	color: #3ff3c3;
	text-align: center;
	margin: auto auto auto auto;
}

.btn {
	text-align: center;
	margin: auto auto auto auto;
}
</style>
