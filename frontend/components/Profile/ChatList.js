import React from 'react';

const ChatList = ({ userChats, currentUser, handleSelectMessage }) => {
	return (
		<div style={{ marginLeft: '40px' }}>
			{userChats &&
				userChats.map(chat => {
					let match = chat.users.find(usr => usr.id !== currentUser.id);
					return (
						<div
							key={chat.id}
							onClick={() => handleSelectMessage(chat.id)}
							style={{ borderBottom: '2px solid black', display: 'flex' }}
						>
							<img
								src={match.img.find(img => img.default).img_url}
								style={{ width: '50px', height: '50px', borderRadius: '50%' }}
							/>
							<div>
								<div>{match.firstName}</div>
								<div>
									{`${chat.messages[chat.messages.length - 1].from.id ===
									currentUser.id
										? 'you: '
										: ''} ${chat.messages[chat.messages.length - 1].text}`}
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default ChatList;
