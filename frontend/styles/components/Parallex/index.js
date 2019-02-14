import React, { useState, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import parallaxStyle from './styles';

const Parallax = ({ classes, filter, className, children, style, small }) => {
	let [ windowScrollTop, setWindowScroll ] = useState(0);
	useEffect(() => {
		if (window.innerWidth >= 768) {
			setWindowScroll(window.pageYOffset / 3);
		} else {
			setWindowScroll(0);
		}
		window.addEventListener('scroll', resetTransform);
	}, []);

	const resetTransform = () => {
		setWindowScroll(window.pageYOffset / 3);
	};

	const parallaxClasses = classNames({
		[classes.parallax]: true,
		[classes[filter + 'Color']]: filter !== undefined,
		[classes.small]: small,
		[className]: className !== undefined,
	});
	return (
		<div
			className={parallaxClasses}
			style={{
				...style,
				backgroundImage:
					'url(https://images.unsplash.com/photo-1499309221416-e18ee3411c38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
				transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
			}}
			// ref='parallax'
		>
			{children}
		</div>
	);
};

Parallax.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	filter: PropTypes.oneOf([ 'primary', 'rose', 'dark', 'info', 'success', 'warning', 'danger' ]),
	children: PropTypes.node,
	style: PropTypes.string,
	image: PropTypes.string,
	small: PropTypes.bool,
};

export default withStyles(parallaxStyle)(Parallax);
