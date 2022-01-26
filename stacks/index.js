import StorageStack from './StorageStack';
import APIStack from './APIStack';
import AuthStack from './AuthStack';
import FrontendStack from './FrontendStack';

export default function main(app) {
	const storageStack = new StorageStack(app, 'storage');

	const apiStack = new APIStack(app, 'api', {
		table: storageStack.table,
	});

	const authStack = new AuthStack(app, 'auth', {
		api: apiStack.api,
		bucket: storageStack.bucket,
	});

	new FrontendStack(app, 'frontend', {
		api: apiStack.api,
		auth: authStack.auth,
		bucket: storageStack.bucket,
	});
}
