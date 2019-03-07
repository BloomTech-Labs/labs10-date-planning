import React from 'react';

const ChatList = ({ userChats, currentUser, handleSelectMessage }) => {
	return (
		<div style={{ marginRight: '40px' }}>
			{userChats &&
				userChats.map(chat => (
					<div
						key={chat.id}
						onClick={() => handleSelectMessage(chat.id)}
						style={{ borderBottom: '2px solid black', display: 'flex' }}
					>
						<div>
							<div>
								{chat.users.filter(user => user.id !== currentUser.id)[0].firstName}
							</div>
							<div>
								{`${chat.messages[chat.messages.length - 1].from.id ===
								currentUser.id
									? 'you: '
									: ''} ${chat.messages[chat.messages.length - 1].text}`}
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default ChatList;
