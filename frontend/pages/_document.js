import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

class MyDocument extends Document {
	render() {
		const { pageContext } = this.props;

		return (
			<html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="theme-color"
						content={pageContext ? pageContext.theme.palette.primary.main : null}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

MyDocument.getInitialProps = ctx => {
	let pageContext;
	const page = ctx.renderPage(Component => {
		const WrappedComponent = props => {
			pageContext = props.pageContext;
			return <Component {...props} />;
		};

		return WrappedComponent;
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
				<style
					id="jss-server-side"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: css }}
				/>
				{flush() || null}
			</React.Fragment>
		)
	};
};

export default MyDocument;
