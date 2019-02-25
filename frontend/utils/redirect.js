import Router from 'next/router';

export default (context, target) => {
	if (context.res) {
		context.res.writeHead(302, { Location: target });
		context.res.end();
	} else {
		Router.replace(target);
	}
};
