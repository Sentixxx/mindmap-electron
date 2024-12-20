import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
	interface Window {
		electron: ElectronAPI;
		api: {
			openFileDialog: () => Promise<Electron.OpenDialogReturnValue>,
			selectedFile: (callback: (filePaths: string[]) => void) => void;
		};
	}
}
