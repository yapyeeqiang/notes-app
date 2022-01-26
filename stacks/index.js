import StorageStack from './StorageStack';
import APIStack from './APIStack';
import AuthStack from './AuthStack';

export default function main(app) {
	const storageStack = new StorageStack(app, 'storage');

	const apiStack = new APIStack(app, 'api', {
		table: storageStack.table,
	});

	new AuthStack(app, 'auth', {
		api: apiStack.api,
		bucket: storageStack.bucket,
	});
}
