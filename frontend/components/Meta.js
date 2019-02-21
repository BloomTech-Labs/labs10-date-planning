import Head from 'next/head';

const Meta = () => (
	<Head>
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta charSet='utf-8' />
		<link
			rel='stylesheet'
			type='text/css'
			href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons'
		/>
		<script src='https://unpkg.com/nprogress@0.2.0/nprogress.js' />
		<link rel='stylesheet' href='/static/nprogress.css' />
		<link href='https://use.fontawesome.com/releases/v5.0.10/css/all.css' rel='stylesheet' />
		<link href="https://fonts.googleapis.com/css?family=Baumans" rel="stylesheet" />
		{/* <link rel='shortcut icon' href='/static/favicon.png' /> */}
		{/* <link rel='stylesheet' type='text/css' href='/static/nprogress.css' /> */}
		<title>Up 4</title>
	</Head>
);

export default Meta;
