const config = {
	s3: {
		REGION: process.env.REACT_APP_REGION,
		BUCKET: process.env.REACT_APP_BUCKET,
	},
	apiGateway: {
		REGION: process.env.REACT_APP_REGION,
		URL: process.env.REACT_APP_API_URL,
	},
	cognito: {
		REGION: process.env.REACT_APP_REGION,
		USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
		APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
		IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
	},
	MAX_ATTACHMENT_SIZE: 5000000,
	STRIPE_KEY:
		'pk_test_51KM5EiIut6arknEkAWRe8qmoJ43AisHr6mfDEkYwfL35aoZbeIlUmmqcdb7e3vqwZI4TAw5Clj4lzrsnN7xRHzxd00gJK54K2i',
};

export default config;
