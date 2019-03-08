import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import "../static/scss/material-kit-pro-react.scss";
import { ApolloProvider } from "react-apollo";
import App, { Container } from "next/app";
import redirect from "../utils/redirect";
import Page from "../components/Page";

import getPageContext from "../utils/getPageContext";
import withApollo from "../utils/withApollo";

class MyApp extends App {
	constructor() {
		super();
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
		return (
			<Container>
				<JssProvider
					registry={this.pageContext.sheetsRegistry}
					generateClassName={this.pageContext.generateClassName}
				>
					<MuiThemeProvider
						theme={this.pageContext.theme}
						sheetsManager={this.pageContext.sheetsManager}
					>
						<CssBaseline />
						<ApolloProvider client={apolloClient}>
							<ApolloHooksProvider client={apolloClient}>
								<Page>
									<Component {...pageProps} pageContext={this.pageContext} />
								</Page>
							</ApolloHooksProvider>
						</ApolloProvider>
					</MuiThemeProvider>
				</JssProvider>
			</Container>
		);
	}
}

export default withApollo(MyApp);
