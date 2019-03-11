import React, { useState } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../../static/jss/logoStyles';

const MirroredFour = posed.div({
	unhovered: { transform: 'rotateY(0deg)', delay: 5000 },
	hovered: {
		transform: 'rotateY(180deg)',
		transition: {
			type: 'tween',
			duration: 1000,
		},
	},
});

const UpFor = ({ main, justFour, classes }) => {
	const [ hovering, setHovering ] = useState(false);

	return (
		<div
			className={main ? classes.mainContainer : classes.container}
			onMouseEnter={() => {
				setHovering(true);
			}}
			onMouseLeave={() => {
				setHovering(false);
			}}
		>
			{!justFour ? <div className={main ? classes.mainUp : classes.up}>Up</div> : null}
			<div className={main ? classes.mainFours : classes.fours}>
				<div className={classes.redFirstFour} main={main}>
					4
				</div>
				<MirroredFour
					className={classes.redSecondFour}
					pose={hovering ? 'hovered' : 'unhovered'}
				>
					4
				</MirroredFour>
			</div>
		</div>
	);
};

export default withStyles(styles)(UpFor);
