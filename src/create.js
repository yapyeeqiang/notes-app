import * as uuid from 'uuid';
import handler from './util/handler';
import dynamoDB from './util/dynamoDB';

export const main = handler(async (event) => {
	const data = JSON.parse(event.body);

	const params = {
		TableName: process.env.TABLE_NAME,
		Item: {
			// The attributes of the item to be created
			userID: '123', // The id of the author
			noteID: uuid.v1(), // A unique uuid
			content: data.content, // Parsed from request body
			attachment: data.attachment, // Parsed from request body
			createdAt: Date.now(), // Current Unix timestamp
		},
	};

	await dynamoDB.put(params);

	return params.Item;
});
