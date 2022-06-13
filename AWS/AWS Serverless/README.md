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
