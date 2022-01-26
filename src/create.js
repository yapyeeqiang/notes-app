import { v1 } from 'uuid';
import handler from './util/handler';
import dynamoDB from './util/dynamoDB';

export const main = handler(async (event) => {
	const { content, attachment } = JSON.parse(event.body);

	const params = {
		TableName: process.env.TABLE_NAME,
		Item: {
			userID: event.requestContext.authorizer.iam.cognitoIdentity
				.identityId,
			noteID: v1(),
			content,
			attachment,
			createdAt: Date.now(),
		},
	};

	await dynamoDB.put(params);

	return params.Item;
});
