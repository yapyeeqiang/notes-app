import { Template } from 'aws-cdk-lib/assertions';
import { App } from '@serverless-stack/resources';
import StorageStack from '../stacks/StorageStack';

test('Test StorageStack', () => {
	const app = new App();

	const stack = new StorageStack(app, 'test-stack');

	const template = Template.fromStack(stack);

	template.hasResourceProperties('AWS::DynamoDB::Table', {
		BillingMode: 'PAY_PER_REQUEST',
	});
});
