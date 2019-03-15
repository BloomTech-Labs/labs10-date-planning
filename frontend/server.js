const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.get("/welcome/profile/:page/:subPage", (req, res) => {
		const { page, subPage } = req.params;
		const slug = subPage ? getSlug(page, subPage) : getSlug(page);
		app.render(req, res, `/welcome`, { slug });
	});

	server.get("/welcome/profile/:page", (req, res) => {
		const slug = getSlug(req.params.page);
		app.render(req, res, `/welcome`, { slug });
	});

	server.get("/welcome/:page", (req, res) => {
		const slug = getSlug(req.params.page);
		app.render(req, res, `/welcome`, { slug });
	});

	server.get("/user/:userId", (req, res) => {
		const { userId } = req.params;
		app.render(req, res, `/home`, { user: userId });
	});

	server.get("/profile/user/:userId", (req, res) => {
		const { userId } = req.params;
		app.render(req, res, "/profile", { user: userId });
	});

	server.get("/profile/:category/user/:userId", (req, res) => {
		const { category, userId } = req.params;
		const slug = category === "chat" ? "chats" : category;
		app.render(req, res, "/profile", { slug, user: userId });
	});

	server.get("/profile/:slug", (req, res) => {
		const { slug } = req.params;
		const slugObj = {
			slug: slug === "chat" ? "chats" : slug
		};
		app.render(req, res, `/profile`, slugObj);
	});

	server.get("/home/user/:userId", (req, res) => {
		const { userId } = req.params;
		app.render(req, res, "/home", { user: userId });
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(port, err => {
		if (err) throw err;
		console.log(`Listening on http://localhost:${port}`);
	});
});

const getSlug = (page, subPage = null) => {
	if (subPage) {
		page = `${page}/${subPage}`;
	}
	switch (page) {
		case "getstarted":
			return 0;
		case "gender/preferences":
			return 2;
		case "gender":
			return 1;
		case "age/preferences":
			return 4;
		case "age":
			return 3;
		case "location":
			return 5;
		case "images":
			return 6;
		case "about":
			return 7;
		case "interests":
			return 8;
		case "goPro":
			return 9;
	}
};
