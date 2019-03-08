import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import "../static/scss/material-kit-pro-react.scss";
import { ApolloProvider } from "react-apollo";
import App, { Container } from "next/app";
import redirect from "../utils/redirect";
// import Page from "../components/Page";
import Page from "../layouts/main";

import getPageContext from "../utils/getPageContext";
import withApollo from "../utils/withApollo";

class MyApp extends App {
	constructor(props) {
		super(props);
		this.pageContext = getPageContext();
	}

	componentDidMount() {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	render() {
		const { Component, pageProps, apolloClient } = this.props;
		// console.log(Object.keys(this.props), "props in app.js render");
		return (
			<Container>
				<ApolloProvider client={apolloClient}>
					<ApolloHooksProvider client={apolloClient}>
						<JssProvider
							registry={this.pageContext.sheetsRegistry}
							generateClassName={this.pageContext.generateClassName}
						>
							<MuiThemeProvider
								theme={this.pageContext.theme}
								sheetsManager={this.pageContext.sheetsManager}
							>
								<CssBaseline />
								<Page>
									<Component {...pageProps} pageContext={this.pageContext} />
								</Page>
							</MuiThemeProvider>
						</JssProvider>
					</ApolloHooksProvider>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withApollo(MyApp);
