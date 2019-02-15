import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		let pageContext;
		const page = renderPage(App => props => {
			pageContext = props.pageContext;
			return <App {...props} />;
		});
		let css;
		if (pageContext) {
			css = pageContext.sheetsRegistry.toString();
		}
		return {
			...page,
			pageContext,
			styles: (
				<React.Fragment>
					<style id='jss-server-side' dangerouslySetInnerHTML={{ __html: css }} />
					{flush() || null}
				</React.Fragment>
			),
		};
	}

	render() {
		return (
			<html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
