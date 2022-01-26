import handler from './util/handler';
import dynamoDB from './util/dynamoDB';

export const main = handler(async (event) => {
	const params = {
		TableName: process.env.TABLE_NAME,

		/**
		 * 'KeyConditionExpression' defines the condition for the query
		 *  - 'userId = :userId': only return items with matching 'userId' partition key
		 */
		KeyConditionExpression: 'userID = :userID',

		/**
		 * 'ExpressionAttributeValues' defines the value in the condition
		 *  - ':userID' defines 'userID' to be the id of the author
		 */
		ExpressionAttributeValues: {
			':userID':
				event.requestContext.authorizer.iam.cognitoIdentity.identityId,
		},
	};

	const results = await dynamoDB.query(params);

	// Return the matching list of items in response body
	return results.Items;
});
