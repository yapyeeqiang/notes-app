import {
	Stack,
	Table,
	TableFieldType,
	Bucket,
} from '@serverless-stack/resources';

class StorageStack extends Stack {
	table;
	bucket;

	constructor(scope, id, props) {
		super(scope, id, props);

		this.bucket = new Bucket(this, 'Uploads');

		this.table = new Table(this, 'Notes', {
			fields: {
				userID: TableFieldType.STRING,
				noteID: TableFieldType.STRING,
			},
			primaryIndex: {
				partitionKey: 'userID',
				sortKey: 'noteID',
			},
		});
	}
}

export default StorageStack;
