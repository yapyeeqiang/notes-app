import handler from './util/handler';
import dynamoDB from './util/dynamoDB';

export const main = handler(async (event) => {
	const params = {
		TableName: process.env.TABLE_NAME,
		Key: {
			userID: event.requestContext.authorizer.iam.cognitoIdentity
				.identityId,
			noteID: event.pathParameters.id,
		},
	};

	await dynamoDB.delete(params);

	return { status: true };
});
