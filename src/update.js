import handler from './util/handler';
import dynamoDB from './util/dynamoDB';

export const main = handler(async (event) => {
	const { content = null, attachment = null } = JSON.parse(event.body);

	const params = {
		TableName: process.env.TABLE_NAME,
		Key: {
			userID: event.requestContext.authorizer.iam.cognitoIdentity
				.identityId,
			noteID: event.pathParameters.id,
		},

		// 'UpdateExpression' defines the attributes to be updated
		UpdateExpression: 'SET content = :content, attachment = :attachment',

		// 'ExpressionAttributeValues' defines the value in the update expression
		ExpressionAttributeValues: {
			':content': content,
			':attachment': attachment,
		},

		/**
		 * 'ReturnValues' specifies if and how to return the item's attributes,
		 * where ALL_NEW returns all attributes of the item after the update; you
		 * can inspect 'result' below to see how it works with different settings
		 */
		ReturnValues: 'ALL_NEW',
	};

	await dynamoDB.update(params);

	return {
		status: true,
	};
});
