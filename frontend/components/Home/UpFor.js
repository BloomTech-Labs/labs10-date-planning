import React, { useState } from 'react';

import posed from 'react-pose';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../../static/jss/logoStyles';

const MirroredFour = posed.div({
	unhovered: { transform: 'rotateY(0deg)', color: '#ad7e81', delay: 1000 },
	hovered: {
		transform: 'rotateY(180deg)',
		color: '#dc434c',
		transition: {
			type: 'tween',
			duration: 1000,
		},
	},
});
const RegularFour = posed.div({
	unhovered: { color: '#ad7e81', delay: 1000 },
	hovered: {
		color: '#dc434c',
		transition: {
			type: 'tween',
			duration: 1000,
		},
	},
});

const UpFor = ({ main, justFour, handleClick, classes }) => {
	const [ hovering, setHovering ] = useState(false);

	return (
		<div
			className={main ? classes.mainContainer : classes.container}
			onClick={handleClick}
			onMouseEnter={() => {
				setHovering(true);
			}}
			onMouseLeave={() => {
				setHovering(false);
			}}
		>
			{!justFour ? <div className={main ? classes.mainUp : classes.up}>Up</div> : null}
			<div className={classes.fours}>
				<RegularFour
					className={classes.firstFour}
					pose={hovering ? 'hovered' : 'unhovered'}
				>
					4
				</RegularFour>
				<MirroredFour
					className={classes.secondFour}
					pose={hovering ? 'hovered' : 'unhovered'}
				>
					4
				</MirroredFour>
			</div>
		</div>
	);
};

export default withStyles(styles)(UpFor);
