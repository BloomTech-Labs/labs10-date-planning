import React from 'react';
import gql from 'graphql-tag';
import Router from 'next/router';
import withStyles from '@material-ui/core/styles/withStyles';
import { useMutation } from '../Mutations/useMutation';
import StyledFooter from '../../styledComponents/Footer/Footer.jsx';
import styles from '../../static/jss/material-kit-pro-react/views/componentsSections/footerStyle.jsx';
import List from '@material-ui/core/List';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
import ListItem from '@material-ui/core/ListItem';

const DELETE_USER = gql`
	mutation {
		deleteUser {
			message
		}
	}
`;

const Footer = ({ classes }) => {
	const [ deleteUser ] = useMutation(DELETE_USER, { onCompleted: () => Router.push('/joinus') });

	return (
		<StyledFooter
			theme='dark'
			content={
				<div>
					<div className={classes.left}>
						<div
							className={classes.footerBrand}
							style={{
								fontFamily: 'Baumans',
								fontSize: '24px',
								color: '#fafafa',
								lineHeight: 'normal',
							}}
						>
							<span style={{ color: '#4cb5ae' }}>Up</span>4
						</div>
					</div>
					{/* <div className={classes.pullCenter}>
						<List className={classes.list}>
							<ListItem className={classes.inlineBlock}>
								<a href='https://www.creative-tim.com/' className={classes.block}>
									Creative Tim
								</a>
							</ListItem>
							<ListItem className={classes.inlineBlock}>
								<a
									href='https://www.creative-tim.com/presentation'
									className={classes.block}
								>
									About us
								</a>
							</ListItem>
							<ListItem className={classes.inlineBlock}>
								<a href='//blog.creative-tim.com/' className={classes.block}>
									Blog
								</a>
							</ListItem>
							<ListItem className={classes.inlineBlock}>
								<a
									href='https://www.creative-tim.com/license'
									className={classes.block}
								>
									Licenses
								</a>
							</ListItem>
						</List>
					</div> */}
					<div className={classes.rightLinks}>
						<ul>
							<li>
								<Button
									href='https://github.com/Lambda-School-Labs/labs10-date-planning'
									color='twitter'
									justIcon
									simple="true"
								>
									<i className='fab fa-github' />
								</Button>
							</li>
							{/* <li>
								<Button onClick={() => deleteUser()} color='google' justIcon simple>
									<i className='fab fa-google-plus-g' />
								</Button>
							</li> */}
							{/* <li>
								<Button
									href='https://dribbble.com/creativetim'
									color='dribbble'
									justIcon
									simple
								>
									<i className='fab fa-dribbble' />
								</Button>
							</li>
							<li>
								<Button
									href='https://instagram.com/CreativeTimOfficial'
									color='google'
									justIcon
									simple
								>
									<i className='fab fa-google-plus-g' />
								</Button>
							</li> */}
						</ul>
					</div>
				</div>
			}
		/>
	);
};

export default withStyles(styles)(Footer);
