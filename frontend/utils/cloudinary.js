import { Util } from 'cloudinary-core';

export const openUploadWidget = callback => {
	const options = {
		cropping: true,
		sources: [ 'local', 'instagram', 'facebook' ],
		multiple: false,
		croppingAspectRatio: 1,
		gravity: 'custom',
		croppingShowBackButton: false,
		cloudName: 'dcwn6afsq',
		uploadPreset: 'upfor4',
	};
	options.styles = {
		palette: {
			window: '#FFF',
			sourceBg: '#FFFFFF',
			windowBorder: '#90a0b3',
			//tabIcon: '#00BA96',
			inactiveTabIcon: '#69778A',
			//menuIcons: '#00BA96',
			link: '#4cb5ae',
			//action: '#DC758F',
			//inProgress: '#00BA96',
			// complete: '#AD546B',
			// error: '#c43737',
			textDark: '#000000',
			textLight: '#FFFFFF',
		},
		fonts: {
			"'Fira Sans', sans-serif": 'https://fonts.googleapis.com/css?family=Fira+Sans',
		},
	};
	const scOptions = Util.withSnakeCaseKeys(options);

	window.cloudinary.openUploadWidget(scOptions, callback);
};
