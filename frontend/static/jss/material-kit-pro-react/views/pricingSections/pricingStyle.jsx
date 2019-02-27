import { mrAuto, mlAuto, cardTitle, roseColor } from '../../../material-kit-pro-react';

const pricingStyle = {
	mrAuto,
	mlAuto,
	cardTitle,
	cardTitleWhite: {
		...cardTitle,
		color: '#fff!important',
		'& small': {
			color: 'rgba(255,255,255,0.8)!important',
		},
	},
	textCenter: {
		textAlign: 'center',
	},
	pricingSection: {
		padding: '80px 0px',
	},
	textInfo: {
		color: '#00bcd4!important',
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.76)',
		margin: '10px auto 0',
		width: '130px',
		height: '130px',
		border: '1px solid #E5E5E5',
		borderRadius: '50%',
		lineHeight: '174px',
		'& .fab,& .fas,& .far,& .fal,& .material-icons': {
			fontSize: '55px',
			lineHeight: '55px',
		},
		'& svg': {
			width: '55px',
			height: '55px',
		},
	},
	iconWhite: {
		color: '#FFFFFF',
	},
	iconRose: {
		color: roseColor,
	},
};

export default pricingStyle;
