import React, { useState, useEffect } from 'react';
import Cached from '@material-ui/icons/Cached';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
//MUI
import {
	TextField,
	Checkbox,
	Tooltip,
	FormControlLabel,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
} from '@material-ui/core';
import { Check, ExpandMore } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
//styled components
import Accordion from '../../styledComponents/Accordion/Accordion.jsx';
import Clearfix from '../../styledComponents/Clearfix/Clearfix.jsx';
import Card from '../../styledComponents/Card/Card';
import Button from '../../styledComponents/CustomButtons/Button';
import CardBody from '../../styledComponents/Card/CardBody';
import GridItem from '../../styledComponents/Grid/GridItem';
//styles
import accordionStyle from '../../static/jss/material-kit-pro-react/components/accordionStyle.jsx';
import styles from '../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx';
import { mis, music, sports, performing } from '../../utils/genres';

const Filters = ({ classes, filters }) => {
	const [ categoryFilters, setCategeoryFilters ] = useState([]);
	const [ dateFilters, setDateFilters ] = useState([]);
	const [ genreFilters, setGenreFilters ] = useState([]);
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

	const handleGenreFilters = ({ target: { id } }) => {
		genreFilters.indexOf(id) !== -1
			? setGenreFilters(genreFilters.filter(i => i !== id))
			: setGenreFilters([ ...genreFilters, id ]);
	};
	const handleDateChange = date => {
		setSelectedDate(date);
	};

	useEffect(
		() => {
			if (selectedDate) {
				setDateFilters([ selectedDate ]);
			} else {
				setDateFilters([]);
			}
		},
		[ selectedDate ],
	);

	useEffect(
		() => {
			filters.setState({ cats: categoryFilters, dates: dateFilters, genres: genreFilters });
		},
		[ categoryFilters, dateFilters, genreFilters ],
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
								setGenreFilters([]);
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
										<ExpansionPanel
											root={{
												boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1)',
												backgroundColor: 'transparent',
											}}
										>
											<ExpansionPanelSummary
												expandIcon={<ExpandMore />}
												style={{ padding: 0, margin: 0 }}
												classes={{
													root: `${classes.expansionPanelSummary} ${classes[
														'primary' +
															'ExpansionPanelSummary' +
															'border: none'
													]}`,
													expanded: `${classes.expansionPanelSummaryExpaned} ${classes[
														'primary' + 'ExpansionPanelSummaryExpaned'
													]}`,
													content: classes.expansionPanelSummaryContent,
													expandIcon:
														classes.expansionPanelSummaryExpandIcon,
												}}
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
																<Check
																	className={classes.checkedIcon}
																/>
															}
															icon={
																<Check
																	className={
																		classes.uncheckedIcon
																	}
																/>
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
											</ExpansionPanelSummary>
											<ExpansionPanelDetails
												style={{
													paddingBottom: 0,
													paddingTop: 0,
													display: 'flex',
													flexDirection: 'column',
												}}
											>
												{music.map(i => (
													<FormControlLabel
														key={i.id}
														control={
															<Checkbox
																tabIndex={-1}
																onClick={handleGenreFilters}
																checked={
																	genreFilters.indexOf(i.id) !==
																	-1 ? (
																		true
																	) : (
																		false
																	)
																}
																id={i.id}
																checkedIcon={
																	<Check
																		className={
																			classes.checkedIcon
																		}
																	/>
																}
																icon={
																	<Check
																		className={
																			classes.uncheckedIcon
																		}
																	/>
																}
																classes={{
																	checked: classes.checked,
																	root: classes.checkRoot,
																}}
															/>
														}
														classes={{ label: classes.label }}
														label={i.name}
													/>
												))}
											</ExpansionPanelDetails>
										</ExpansionPanel>
										<ExpansionPanel
											style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1)' }}
										>
											<ExpansionPanelSummary
												expandIcon={<ExpandMore />}
												style={{ padding: 0, margin: 0 }}
												classes={{
													root: `${classes.expansionPanelSummary} ${classes[
														'primary' + 'ExpansionPanelSummary'
													]}`,
													expanded: `${classes.expansionPanelSummaryExpaned} ${classes[
														'primary' + 'ExpansionPanelSummaryExpaned'
													]}`,
													content: classes.expansionPanelSummaryContent,
													expandIcon:
														classes.expansionPanelSummaryExpandIcon,
												}}
											>
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
																<Check
																	className={classes.checkedIcon}
																/>
															}
															icon={
																<Check
																	className={
																		classes.uncheckedIcon
																	}
																/>
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
											</ExpansionPanelSummary>
											<ExpansionPanelDetails
												style={{
													paddingBottom: 0,
													paddingTop: 0,
													display: 'flex',
													flexDirection: 'column',
												}}
											>
												{performing.map(i => (
													<FormControlLabel
														key={i.id}
														control={
															<Checkbox
																tabIndex={-1}
																onClick={handleGenreFilters}
																checked={
																	genreFilters.indexOf(i.id) !==
																	-1 ? (
																		true
																	) : (
																		false
																	)
																}
																id={i.id}
																checkedIcon={
																	<Check
																		className={
																			classes.checkedIcon
																		}
																	/>
																}
																icon={
																	<Check
																		className={
																			classes.uncheckedIcon
																		}
																	/>
																}
																classes={{
																	checked: classes.checked,
																	root: classes.checkRoot,
																}}
															/>
														}
														classes={{ label: classes.label }}
														label={i.name}
													/>
												))}
											</ExpansionPanelDetails>
										</ExpansionPanel>
										<ExpansionPanel
											style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1)' }}
										>
											<ExpansionPanelSummary
												expandIcon={<ExpandMore />}
												style={{ padding: 0, margin: 0 }}
												classes={{
													root: `${classes.expansionPanelSummary} ${classes[
														'primary' + 'ExpansionPanelSummary'
													]}`,
													expanded: `${classes.expansionPanelSummaryExpaned} ${classes[
														'primary' + 'ExpansionPanelSummaryExpaned'
													]}`,
													content: classes.expansionPanelSummaryContent,
													expandIcon:
														classes.expansionPanelSummaryExpandIcon,
												}}
											>
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
																<Check
																	className={classes.checkedIcon}
																/>
															}
															icon={
																<Check
																	className={
																		classes.uncheckedIcon
																	}
																/>
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
											</ExpansionPanelSummary>
											<ExpansionPanelDetails
												style={{
													paddingBottom: 0,
													paddingTop: 0,
													display: 'flex',
													flexDirection: 'column',
												}}
											>
												{sports.map(i => (
													<FormControlLabel
														key={i.id}
														control={
															<Checkbox
																tabIndex={-1}
																onClick={handleGenreFilters}
																checked={
																	genreFilters.indexOf(i.id) !==
																	-1 ? (
																		true
																	) : (
																		false
																	)
																}
																id={i.id}
																checkedIcon={
																	<Check
																		className={
																			classes.checkedIcon
																		}
																	/>
																}
																icon={
																	<Check
																		className={
																			classes.uncheckedIcon
																		}
																	/>
																}
																classes={{
																	checked: classes.checked,
																	root: classes.checkRoot,
																}}
															/>
														}
														classes={{ label: classes.label }}
														label={i.name}
													/>
												))}
											</ExpansionPanelDetails>
										</ExpansionPanel>
										<ExpansionPanel
											style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1)' }}
										>
											<ExpansionPanelSummary
												expandIcon={<ExpandMore />}
												style={{ padding: 0, margin: 0 }}
												classes={{
													root: `${classes.expansionPanelSummary} ${classes[
														'primary' + 'ExpansionPanelSummary'
													]}`,
													expanded: `${classes.expansionPanelSummaryExpaned} ${classes[
														'primary' + 'ExpansionPanelSummaryExpaned'
													]}`,
													content: classes.expansionPanelSummaryContent,
													expandIcon:
														classes.expansionPanelSummaryExpandIcon,
												}}
											>
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
																<Check
																	className={classes.checkedIcon}
																/>
															}
															icon={
																<Check
																	className={
																		classes.uncheckedIcon
																	}
																/>
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
											</ExpansionPanelSummary>
											<ExpansionPanelDetails
												style={{
													paddingBottom: 0,
													paddingTop: 0,
													display: 'flex',
													flexDirection: 'column',
												}}
											>
												{mis.map(i => (
													<FormControlLabel
														key={i.id}
														control={
															<Checkbox
																tabIndex={-1}
																onClick={handleGenreFilters}
																checked={
																	genreFilters.indexOf(i.id) !==
																	-1 ? (
																		true
																	) : (
																		false
																	)
																}
																id={i.id}
																checkedIcon={
																	<Check
																		className={
																			classes.checkedIcon
																		}
																	/>
																}
																icon={
																	<Check
																		className={
																			classes.uncheckedIcon
																		}
																	/>
																}
																classes={{
																	checked: classes.checked,
																	root: classes.checkRoot,
																}}
															/>
														}
														classes={{ label: classes.label }}
														label={i.name}
													/>
												))}
											</ExpansionPanelDetails>
										</ExpansionPanel>
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
														dateFilters.indexOf('this week') !== -1 ? (
															true
														) : (
															false
														)
													}
													id='this week'
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
											label='This week'
										/>
										<FormControlLabel
											control={
												<Checkbox
													tabIndex={-1}
													onClick={handleDateFilters}
													checked={
														dateFilters.indexOf('this weekend') !==
														-1 ? (
															true
														) : (
															false
														)
													}
													id='this weekend'
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

export default withStyles({ ...styles, ...accordionStyle })(Filters);
