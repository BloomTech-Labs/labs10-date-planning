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
		// It might be undefined, e.g. after an error.
		if (pageContext) {
			css = pageContext.sheetsRegistry.toString();
		}
		return {
			...page,
			pageContext,
			// Styles fragment is rendered after the app and page rendering finish.
			styles: (
				<React.Fragment>
					<style
						id='jss-server-side'
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: css }}
					/>
					{flush() || null}
				</React.Fragment>
			),
		};
	}

	// const styleTags = sheet.getStyleElement();
	// return { ...page, styleTags };

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
