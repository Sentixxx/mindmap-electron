import { store } from '@renderer/store';
import { SidebarStatusEnum } from '@renderer/enums/sidebarStatusEnum';
import { useStorage } from '@vueuse/core';
import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
	const sidebarStatus = useStorage('sidebarStatus', SidebarStatusEnum.OPENED);
	const sidebar = reactive({
		opened: sidebarStatus.value === SidebarStatusEnum.OPENED,
		withoutAnimation: false
	});

	function toggleSidebar() {
		sidebar.opened = !sidebar.opened;
		sidebarStatus.value = sidebar.opened ? SidebarStatusEnum.OPENED : SidebarStatusEnum.CLOSED;
	}

	function closeSidebar() {
		sidebar.opened = false;
		sidebarStatus.value = SidebarStatusEnum.CLOSED;
	}

	function openSidebar() {
		sidebar.opened = true;
		sidebarStatus.value = SidebarStatusEnum.OPENED;
	}

	return {
		sidebar,
		toggleSidebar,
		closeSidebar,
		openSidebar
	};
});

export function useAppStoreHook() {
	return useAppStore(store);
}
