const stripe = require('stripe')(process.env.STRIPE_SECRET);

const getProduct = async () => {
	const product = await stripe.products.create({
		name: 'Up4',
		type: 'service',
	});
	return product;
};

// only need to run this once.
// getProduct()

const createPlan = async (name, amount) => {
	const plan = await stripe.plans.create({
		product: 'prod_EYPNx1SINtpDP0',
		nickname: name,
		currency: 'usd',
		interval: 'year',
		amount: amount,
	});
	return plan;
};

// only need to run this once.
// createPlan('Monthly Plan', 999);
// createPlan('Yearly Plan', 2999);

module.exports = stripe;
