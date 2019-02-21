import Router from 'next/router';

export default (context, target) => {
	if (context.req) {
		// server
		// 303: "See other"

		//context.res.redirect(target);
		context.res.writeHead(303, { Location: target });
		context.res.end();
		return;
	} else {
		//	In the browser, we just pretend like this never even happened ;)
		Router.push(target);
		return;
	}
};
