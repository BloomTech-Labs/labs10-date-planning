// import React from 'react';
import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const ResetPassword = () => {
	return (
		<div>
			<p>Im here to reset your password bitccccc</p>
			<TextField
				id="outlined-adornment-password"
				className={classNames(classes.margin, classes.textField)}
				variant="outlined"
				type={this.state.showPassword ? 'text' : 'password'}
				label="Password"
				value={this.state.password}
				onChange={this.handleChange('password')}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								aria-label="Toggle password visibility"
								onClick={this.handleClickShowPassword}
							>
								{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					)
				}}
			/>
		</div>
	);
};

export default ResetPassword;
