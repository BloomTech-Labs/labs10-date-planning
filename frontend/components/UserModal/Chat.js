const Chat = () => {
	return (
		<div className={classes.chatBorder}>
			<div ref={msgRef} className={classes.chat}>
				{data.getConversation &&
					data.getConversation.messages.map(message => {
						let fromMatch = message.from.id !== currentUser.id;
						let unseen = newMsgs.find(msg => msg.id === message.id);
						let img = message.from.img.find(img => img.default).img_url;
						return (
							<Media
								currentUser={!fromMatch}
								key={message.id}
								avatar={img}
								title={
									<span>
										{message.from.firstName}{' '}
										<small
											style={{
												fontWeight: unseen && 'bold',
											}}
										>
											· {moment(message.createdAt).fromNow()}{' '}
											{unseen ? (
												<span style={{ color: 'red' }}>new</span>
											) : null}
										</small>
									</span>
								}
								body={
									<span>
										<p>{message.text}</p>
									</span>
								}
							/>
						);
					})}
			</div>
			<div>
				<Media
					avatar={userImg}
					currentUser
					body={
						<CustomInput
							id='logged'
							formControlProps={{
								fullWidth: true,
							}}
							inputProps={{
								multiline: true,
								rows: 6,
								placeholder: `Find out what ${match.firstName}'s up for!`,
								value: message,
								onChange: e => setMessage(e.target.value),
							}}
						/>
					}
					footer={
						<Button
							color='primary'
							justIcon
							className={classes.floatRight}
							onClick={async () => {
								NProgress.start();
								convo.data.getConversation
									? await sendMessage.mutation({
											variables: {
												id: id.value,
												message: message,
											},
										})
									: await createChat.mutation({
											variables: {
												id: id.value,
												message: message,
											},
										});
								setMessage('');
							}}
						>
							<Send />
						</Button>
					}
				/>
			</div>
		</div>
	);
};
