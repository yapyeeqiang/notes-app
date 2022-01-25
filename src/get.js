import handler from './util/handler';
import dynamoDB from './util/dynamoDB';

export const main = handler(async (event) => {
	const params = {
		TableName: process.env.TABLE_NAME,
		// 'Key' defines the partition key and sort key of the item to be retrieved
		Key: {
			userID: '123', // The id of the author
			noteID: event.pathParameters.id, // The id of the note from the path
		},
	};

	const result = await dynamoDB.get(params);

	console.log(result, '<<<<<');

	if (!result.Item) {
		throw new Error('Item not found.');
	}

	// Return the retrieved item
	return result.Item;
});
