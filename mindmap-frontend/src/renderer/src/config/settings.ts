const { pkg } = __APP_INFO__;

const defaultSettings: AppSettings = {
	title: pkg.name,
	version: pkg.version
};

export default defaultSettings;
