# AWS Serverless

We can protect the Billing of the AWS account by setting up the Budget and the IAM role

To make s3 resources **public** for static web hosting we need to make sure:

1. That the **Static website hosting** is **Enabled** under **Properties** of the **s3 bucket**

2. That the **Block public access (bucket settings)** under **Permissions** is turned off for the **s3 bucket**

Additionally:

**EITHER** to access an individual resource publically we need to make sure that the **Read** mode for **Everyone (public access)** is turned on under **Access control list(ACL)** under **Permissions** i.e. **Individual Resource -> Permissions -> Access control list(ACL) -> Everyone (public access) -> Read(Enabled)**

**OR** to make **all** the resources of the bucket public we can set up the **Bucket Policy** under **Permissions** for the whole bucket i.e. **Bucket -> Permissions -> Bucket Policy -> (followed by the code given below)**

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::Bucket-Name/*"
            ]
        }
    ]
}
```

### AWS Lambda

A rule of thumb for Lambda is that there should be one function per Lambda

### AWS API Gateway

To make sure that the updated API changes are deployed we always need to **Deploy API** after making the changes under **Actions**

**Note: While creating Lambda it's important to click on the option** **_Use Lambda Proxy Integration_** **to make sure that the Requests will be proxied to Lambda with request details available in the 'event' of your handler function**

### AWS Lambda - logs with AWS CloudWatch - Node.js

We can also view the AWS Lambda logs on the CloudWatch by examining the logs on the CloudWatch i.e. whenever we have logging going on in our Lambda function we can execute the lambda function and goto: **View logs in CloudWatch**. By viewing the logs on the CloudWatch if we were to log the event object of the Lambda function for Node.js we can see a large object on the CloudWatch console.

**Event object** - The arguments of the Event object contains the parameters passed in during Querying and Mutation (For GraphQL)

### AWS Lambda, AWS DynamoDB - Permissions

In order to allow the Lambda function to interact with the DynamoDB table we have to attach the **AmazonDynamoDBFullAccess** policy to the IAM role associated with the corresponding Lambda function

### Example - AWS Lambda, AWS AppSync, AWS DynamoDB

*https://www.youtube.com/watch?v=_9DFFg-pNss*

**Resources**:
AWS Lambda -> AppSyncDataStoreLambda
AWS AppSync -> AppSyncExample [DataSource: AppSyncDataStoreLambda]
AWS DynamoDB -> UserAPITable
AWS IAM -> We have modified the IAM role

**AWS Lambda**

Note: We have to attach the DynamoDB policy with the Lambda for the Lambda to interact with the DynamoDB table

1. index.js

```
const getUserById = require('./getUserById');

exports.handler = async (event) => {
    // console.log('Received event: ', JSON.stringify(event, 3));

    switch(event.info.fieldName) {
        case "getMessage":
            return { data: "Hello from Lambda" };
        case "getUserById":
            return await getUserById(event.arguments.userId);
        default:
            return null;
    }

};

```

2. getUserById.js

```
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

async function getUserById(userId) {
    const params = {
        TableName: "UserAPITable",
        Key: {
            id: userId
        }
    }

    try {
        const {Item} = await docClient.get(params).promise();
        return Item;
    } catch(err) {
        console.log("DDB error: ", err);
    }
}

module.exports = getUserById
```

**AWS DynamoDB**
id location name
2 Africa Sam
1 Canada Pujan Soni

**AWS AppSync**

Note: We have to create the Data Source to attach the Lambda to the corresponding resolver function

1. Schema

```
type Message {
	data: String!
}

type Query {
	getMessage: Message!
	getUserById(userId: ID!): User
}

type User {
	id: ID!
	name: String!
	location: String!
}
```

2. Query

```
query getUserById {
  getUserById(userId: "1") {
    id
    name
    location
  }
}

query getMessage {
  getMessage {
    data
  }
}
```
