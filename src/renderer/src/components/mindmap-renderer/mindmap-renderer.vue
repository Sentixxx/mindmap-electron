<template>
	<div class="flex-1">
		<textarea class="w-full h-full border border-gray-400" v-model="value"></textarea>
	</div>
	<svg class="flex-1" ref="svgRef" style="width: 100%; height: 100%"></svg>
</template>

<script lang="ts">
import { ref, onMounted, onUpdated } from 'vue';
import { Markmap } from 'markmap-view';
import { transformer } from './markmap';

const initValue = `# markmap
  
  - beautiful
  - useful
  - easy
  - interactive
  `;

export default {
	name: 'App',
	setup() {
		const svgRef = ref();
		const value = ref(initValue);
		let mm;

		const update = () => {
			const { root } = transformer.transform(value.value);
			mm.setData(root);
			mm.fit();
		};

		onMounted(() => {
			mm = Markmap.create(svgRef.value);
			update();
		});
		onUpdated(update);
		return {
			svgRef,
			value
		};
	}
};
</script>
