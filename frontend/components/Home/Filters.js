import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Cached from '@material-ui/icons/Cached';
import classNames from 'classnames';
import Accordion from '../../styledComponents/Accordion/Accordion.jsx';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui icons

import Check from '@material-ui/icons/Check';

import Clearfix from '../../styledComponents/Clearfix/Clearfix.jsx';
import Card from '../../styledComponents/Card/Card';
import Button from '../../styledComponents/CustomButtons/Button';
import CardBody from '../../styledComponents/Card/CardBody';
import GridItem from '../../styledComponents/Grid/GridItem';

import styles from '../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx';

const Filters = ({ classes, getEvents, location, page }) => {
	const [ categoryFilters, setCategeoryFilters ] = useState([]);
	const [ dateFilters, setDateFilters ] = useState([]);
	const [ selectedDate, setSelectedDate ] = useState(null);

	const handleCategoryFilters = ({ target: { id } }) => {
		categoryFilters.indexOf(id) !== -1
			? setCategeoryFilters(categoryFilters.filter(i => i !== id))
			: setCategeoryFilters([ ...categoryFilters, id ]);
	};

	const handleDateFilters = ({ target: { id } }) => {
		dateFilters.indexOf(id) !== -1
			? setDateFilters(dateFilters.filter(i => i !== id))
			: setDateFilters([ ...dateFilters, id ]);
	};
	const handleDateChange = date => {
		console.log(date);
		setSelectedDate(date);
	};
	useEffect(() => {
		console.log(moment().format('YYYY-MM-DD'));
	}, []);

	useEffect(
		() => {
			getEvents({
				location,
				page,
				categories: categoryFilters,
				dates: dateFilters,
			});
		},
		[ categoryFilters, dateFilters ],
	);
	return (
		<Card plain style={{ marginTop: 0 }}>
			<CardBody className={classes.cardBodyRefine}>
				<h4 className={`${classes.cardTitle} ${classes.textLeft}`}>
					Refine
					<Tooltip
						id='tooltip-top'
						title='Reset Filter'
						placement='top'
						classes={{ tooltip: classes.tooltip }}
					>
						<Button
							link
							justIcon
							size='sm'
							onClick={() => {
								setCategeoryFilters([]);
								setDateFilters([]);
							}}
							className={`${classes.pullRight} ${classes.refineButton}`}
						>
							<Cached />
						</Button>
					</Tooltip>
					<Clearfix />
				</h4>
				<Accordion
					active={[ 0, 1 ]}
					activeColor='primary'
					collapses={[
						{
							title: 'Category',
							content: (
								<div className={classes.customExpandPanel}>
									<div
										className={
											classes.checkboxAndRadio +
											' ' +
											classes.checkboxAndRadioHorizontal
										}
									>
										<FormControlLabel
											control={
												<Checkbox
													tabIndex={-1}
													onClick={handleCategoryFilters}
													checked={
														categoryFilters.indexOf(
															'KZFzniwnSyZfZ7v7nJ',
														) !== -1 ? (
															true
														) : (
															false
														)
													}
													id='KZFzniwnSyZfZ7v7nJ'
													checkedIcon={
														<Check className={classes.checkedIcon} />
													}
													icon={
														<Check className={classes.uncheckedIcon} />
													}
													classes={{
														checked: classes.checked,
														root: classes.checkRoot,
													}}
												/>
											}
											classes={{ label: classes.label }}
											label='Music'
										/>
										<FormControlLabel
											control={
												<Checkbox
													tabIndex={-1}
													onClick={handleCategoryFilters}
													checked={
														categoryFilters.indexOf(
															'KZFzniwnSyZfZ7v7na',
														) !== -1 ? (
															true
														) : (
															false
														)
													}
													id='KZFzniwnSyZfZ7v7na'
													checkedIcon={
														<Check className={classes.checkedIcon} />
													}
													icon={
														<Check className={classes.uncheckedIcon} />
													}
													classes={{
														checked: classes.checked,
														root: classes.checkRoot,
													}}
												/>
											}
											classes={{ label: classes.label }}
											label='Arts & Theatre'
										/>
										<FormControlLabel
											control={
												<Checkbox
													tabIndex={-1}
													onClick={handleCategoryFilters}
													checked={
														categoryFilters.indexOf(
															'KZFzniwnSyZfZ7v7nE',
														) !== -1 ? (
															true
														) : (
															false
														)
													}
													id='KZFzniwnSyZfZ7v7nE'
													checkedIcon={
														<Check className={classes.checkedIcon} />
													}
													icon={
														<Check className={classes.uncheckedIcon} />
													}
													classes={{
														checked: classes.checked,
														root: classes.checkRoot,
													}}
												/>
											}
											classes={{ label: classes.label }}
											label='Sports'
										/>
										<FormControlLabel
											control={
												<Checkbox
													tabIndex={-1}
													onClick={handleCategoryFilters}
													checked={
														categoryFilters.indexOf(
															'KZFzniwnSyZfZ7v7n1',
														) !== -1 ? (
															true
														) : (
															false
														)
													}
													id='KZFzniwnSyZfZ7v7n1'
													checkedIcon={
														<Check className={classes.checkedIcon} />
													}
													icon={
														<Check className={classes.uncheckedIcon} />
													}
													classes={{
														checked: classes.checked,
														root: classes.checkRoot,
													}}
												/>
											}
											classes={{ label: classes.label }}
											label='Miscellaneous'
										/>
									</div>
								</div>
							),
						},
						{
							title: 'Date',
							content: (
								<div className={classes.customExpandPanel}>
									<div
										style={{ marginTop: 0 }}
										className={
											classes.checkboxAndRadio +
											' ' +
											classes.checkboxAndRadioHorizontal
										}
									>
										<MuiPickersUtilsProvider utils={MomentUtils}>
											<DatePicker
												margin='none'
												clearable
												autoOk
												disablePast
												label='Select a date'
												value={selectedDate}
												onChange={handleDateChange}
											/>
										</MuiPickersUtilsProvider>

										<p style={{ marginTop: '5px' }}>or</p>
										<FormControlLabel
											control={
												<Checkbox
													tabIndex={-1}
													onClick={handleDateFilters}
													checked={
														dateFilters.indexOf('All') !== -1 ? (
															true
														) : (
															false
														)
													}
													id='All'
													checkedIcon={
														<Check className={classes.checkedIcon} />
													}
													icon={
														<Check className={classes.uncheckedIcon} />
													}
													classes={{
														checked: classes.checked,
														root: classes.checkRoot,
													}}
												/>
											}
											classes={{ label: classes.label }}
											label='All'
										/>
										<FormControlLabel
											control={
												<Checkbox
													tabIndex={-1}
													onClick={handleDateFilters}
													checked={
														dateFilters.indexOf('Today') !== -1 ? (
															true
														) : (
															false
														)
													}
													id='Today'
													checkedIcon={
														<Check className={classes.checkedIcon} />
													}
													icon={
														<Check className={classes.uncheckedIcon} />
													}
													classes={{
														checked: classes.checked,
														root: classes.checkRoot,
													}}
												/>
											}
											classes={{ label: classes.label }}
											label='Today'
										/>
										<FormControlLabel
											control={
												<Checkbox
													tabIndex={-1}
													onClick={handleDateFilters}
													checked={
														dateFilters.indexOf('This Weekend') !==
														-1 ? (
															true
														) : (
															false
														)
													}
													id='This Weekend'
													checkedIcon={
														<Check className={classes.checkedIcon} />
													}
													icon={
														<Check className={classes.uncheckedIcon} />
													}
													classes={{
														checked: classes.checked,
														root: classes.checkRoot,
													}}
												/>
											}
											classes={{ label: classes.label }}
											label='This weekend'
										/>
										<FormControlLabel
											control={
												<Checkbox
													tabIndex={-1}
													onClick={handleDateFilters}
													checked={
														dateFilters.indexOf('next week') !== -1 ? (
															true
														) : (
															false
														)
													}
													id='next week'
													checkedIcon={
														<Check className={classes.checkedIcon} />
													}
													icon={
														<Check className={classes.uncheckedIcon} />
													}
													classes={{
														checked: classes.checked,
														root: classes.checkRoot,
													}}
												/>
											}
											classes={{ label: classes.label }}
											label='Next week'
										/>
									</div>
								</div>
							),
						},
					]}
				/>
			</CardBody>
		</Card>
	);
};

export default withStyles(styles)(Filters);
