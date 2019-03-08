// import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { getDataFromTree, ApolloProvider } from "react-apollo";
// import { ApolloProvider } from "react-apollo";
import React from "react";
import Head from "next/head";
import cookie from "cookie";

import { initApollo } from "./initApollo";

function parseCookies(req, options = {}) {
	return cookie.parse(req ? req.headers.cookie || "empty" : document.cookie, options);
}

function getComponentDisplayName(Component) {
	return Component.displayName || Component.name || "Unknown";
}

export default App => {
	return class WithData extends React.Component {
		static displayName = `WithData(${getComponentDisplayName(App)})`;

		static async getInitialProps(ctx) {
			const {
				Component,
				router,
				ctx: { req, res }
			} = ctx;

			const apollo = initApollo({});

			ctx.ctx.apolloClient = apollo;

			let appProps = {};
			if (App.getInitialProps) {
				appProps = await App.getInitialProps(ctx);
			}

			if (res && res.finished) {
				return {};
			}

			if (!process.browser) {
				try {
					await getDataFromTree(
						<App {...appProps} Component={Component} router={router} apolloClient={apollo} />
					);
				} catch (error) {
					console.error("Error while running `getDataFromTree`", error);
				}
				Head.rewind();
			}
			// if (!process.browser) {

			// }
			const apolloState = apollo.cache.extract();

			return {
				...appProps,
				apolloState
			};
		}

		constructor(props) {
			super(props);
			this.apolloClient = initApollo(props.apolloState, {
				// getToken: () => {
				// 	let cookie = parseCookies().token;
				// 	return cookie;
				// }
			});
		}

		render() {
			// console.log(Object.keys(this.props), "withApollo.js props");
			return <App {...this.props} apolloClient={this.apolloClient} />;
		}
	};
};
