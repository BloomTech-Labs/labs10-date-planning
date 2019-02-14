import '../utils/bootstrap';
import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../utils/withData';
import '../styles/scss/index.scss';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../utils/getPageContext';

class MyApp extends App {
	constructor() {
		super();
		this.pageContext = getPageContext();
	}
	componentDidMount() {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		pageProps.query = ctx.query;

		return { pageProps };
	}
	render() {
		const { Component, apollo, pageProps } = this.props;

		return (
			<Container>
				<StylesProvider
					sheetsRegistry={this.pageContext.sheetsRegistry}
					generateClassName={this.pageContext.generateClassName}
					sheetsManager={this.pageContext.sheetsManager}
				>
					<ApolloProvider client={apollo}>
						<Page>
							<Component pageContext={this.pageContext} {...pageProps} />
						</Page>
					</ApolloProvider>
				</StylesProvider>
			</Container>
		);
	}
}

export default withData(MyApp);
