import React, { useState } from 'react';
import Link from 'next/link';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import InputRange from 'react-input-range';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import Button from '../../styledComponents/CustomButtons/Button';
import { Favorite, Event, ChatBubble, Receipt } from '@material-ui/icons';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';

const Pro = () => {
	return (
		<div>
			<h2>Our awesome pro features</h2>
			<GridContainer>
				<GridItem sm={4} md={3} lg={3}>
					<Favorite style={{ width: '100px', height: '100px' }} />
					<p>See who has liked you</p>
				</GridItem>
				<GridItem sm={4} md={3} lg={3}>
					<Event style={{ width: '100px', height: '100px' }} />
					<p>Express interest in an unlimited number of events</p>
				</GridItem>
				<GridItem sm={4} md={3} lg={3}>
					<ChatBubble style={{ width: '100px', height: '100px' }} />
					<p>Send an unlimited number of messages</p>
				</GridItem>
				<GridItem sm={4} md={3} lg={3}>
					<Receipt style={{ width: '100px', height: '100px' }} />
					<p>View read receipts</p>
				</GridItem>
			</GridContainer>
			<Link href='/billing'>
				<Button>Go Pro!</Button>
			</Link>
			<Link href='/home'>
				<Button>Skip</Button>
			</Link>
		</div>
	);
};

export default Pro;