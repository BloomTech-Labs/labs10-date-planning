const routes = require("next-routes");

module.exports = routes()
	.add("/")
	.add("home", "/home")
	.add("profile", "/profile")
	.add("joinus", "/joinus")
	.add("billing", "/profile/billing")
	.add("chats", "/profile/chat")
	.add("profile", "/profile/:slug")
	.add("reset", "/reset")
	.add("welcome", "/welcome")
	.add("welcome", "/welcome/:slug");
