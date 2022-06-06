# AWS

## Cloud Computing

- It is type of **Internet-based computing** that provides **shared computer processing resources** and **data to computers and other devices on demand**.
- It is a model for enabling ubiquitous, on-demand access to **shared pool of configurable computing resources** (e.g. **computer networks, servers, storage, applications and services**) provisioned **minimal management effort.**
- This relies on sharing of resources to achieve **coherence and economy of scale**, similar to a utility (like the electricity grid over an electricity network.)

## Cloud Characteristics

**National Institute of Standards and Technology (NIST)** highlights various characteristics that are needed for a **service** to be regarded as **"Cloud"**.

- **On-demand self-service** - Sign up and enjoy the services without delays
- **Broad network access** - Access service through standard platforms (laptop, mobile, desktop, etc.)
- **Resource pooling** - Resources are pooled to multiple customers
- **Rapid elasticity** - Ability to meet with demand peaks
- **Measured Service** - Billing is metered and delivered as a utility service

Three unique **categories** within Cloud Computing:

- **Software as a Service (SaaS)**
- **Platform as a Service (PaaS)**
- **Infrastructure as a Service (IaaS)**

### Software as a Service (SaaS)

- Capability to run applications on a cloud infrastructure
- Applications are accessible from several client devices via either a thin client interface, like a web browser e.g., web-based email
- Interplay between outside world and organization. e.g., email newsletter campaign software
- Software for a short term requirement e.g., collaboration software for particular project
- **"Vanilla"** offerings where the solution is not differentiated
- Consumer does not control or manage the underlying cloud infrastructure, which includes servers, network, operating systems and storage

**SaaS** is not **suitable** in scenarios where the application

- processes quick real time data
- has a regulation or legislation that does not allow data being hosted externally
- existing on-premise solution that satisfies all of the requirements of organization

### Platform as a Service (PaaS)

**Computing platform** that permits creating web applications effortlessly, fast, with no complexity of buying or maintaining the infrastructure and software

- Services to develop and test applications, as well as deploy, host and maintain applications in the similar integrated development environment
- Ability to deploy on cloud infrastructure with the help of programming languages, services, libraries, and tools
- Built in scalability of deployed software with failover and load balancing
- Integration with databases and web services through common standards

**PaaS** is not **suitable** in scenarios where the application

- requires to be more portable with respect to where it is hosted
- performance needs customization of the underlying software and hardware
- proprietary approaches or languages would affect the development process

### Infrastructure as a Service (IaaS)

Capability to provide networks, processing, storage, and other fundamental computing resources, and ability to deploy, run arbitrary software that can include operating systems and applications. Here, the consumer is incompetent of controlling or managing the underlying cloud infrastructure

- Resources are distributed as a service and enables dynamic scaling
- Utility pricing model
- Multiple users on one hardware **Applicability**
- New organizations with less capital would invest in hardware easily
- Organizations growing rapidly
- Pressure on the organization to restrict capital expenditure and to migrate to operating expenditure

**IaaS** is not **suitable** in cases where

- strict regulatory compliance is followed
- very high level of performance is required

## More on Cloud Computing

Let's discuss some advantages to moving to the cloud

- Variable as opposed to upfront Fixed cost
- Economics of scale can reduce Operating cost
- It's easier to match capacity to demand
- It allow you to focus on developing and deploying applications instead of the undifferentiated heavy lifting associated with managing an on-premises data center
- It allows you to increase the velocity of your Agile development and allows a global presence right out of the gate

## Types of Cloud Services

Following are the different types of services that are offered by cloud

1. Infrastructure as a Service: Which allows you to easily provision the IT components you require; including networking capabilities, computers, multi-tenant or dedicated, and data storage. It's flexible and allows you to control and manage your IT resources similar to the way you would in a traditional on-premises data center, such as EC2, S3, and VPC
2. Platform as a Service: It frees you from having to manage the underlying infrastructure and focus on the deployment and management of your application. It frees you from having to think about resource procurement, capacity planning, software maintenance, and patching. Examples of Platform as a Service on AWS include Route 53, Elastic Load Balancing, and Auto Scaling
3. Software as a Service: It provides you with an application that is run and managed entirely by a service provider. Think of SaaS as an end-user application running in the cloud. In a SaaS environment, you have access to the capabilities of an application without the hassle of how it's maintained or it's underlying infrastructure

## Geographical dispersement

Next let's take a look at the infrastructure in terms of its geographical dispersement

- Regions are geographical areas, such as California, that contain multiple data centers in what are called availability zones
- Availability zones are separate physical data centers that may exist within a particular region, but has separate infrastructure dependencies, such as the electrical power grid, flood plain, and any other factors that might isolate it from the potential of outages
- In addition to AZs, AWS supports numerous Edge locations. Throughout the globe, there's a lot more Edge locations than there are AZs. And these are small kind of point of presense services used to deliver content, such as the **Cloud Front and Content Distribution Network**
- Infrastructure usage is the idea that you pay only for what you use, such as EC2. EC2 has various options, one of which is on-demand which is where you only pay for the instance as long as you're using the instance or it's running.
- Pricing concepts include paying for infrastructure usage, such as when using EC2; and data usage and transfer, such as when using **Amazon S3 or DynamoDB**
- Designing for **high availability** is a stricter requirement that designing for **fault tolerance**. For example, in an architecture with a single instance, with an auto scaling group of one, an instance failure will heal itself or replace the instance since the rule might say, "always provide one instance." This is an example of fault tolerance and not high availability. If however, I have an auto scaling group with two instances in different AZs and one fails, the traffic will automatically route to the second instance. This is an example of higher availability.
- Global infrastructure services include **Identity and Access Management(IAM)**. Core services include networking, compute, storage, and databases, Application services include **SNS, SQS, and SWF,** Deployment and management services include **Elastic Beanstalk** and **Cloud formation**

## Features of AWS

AWS offers numerous ways to create and manage resources. Following are the **different ways** to access the features offered by AWS.

- **AWS Management Console** - A web interface for AWS
- **AWS Command Line Interface (AWS CLI)** - Commands for a wide set of AWS products
- **Command Line Tools** - Commands for individual AWS products
- **AWS Software Development Kits (SDK)** - APIs that are specific to programming language or platform
- **Query APIs** - Low-level APIs that are accessible using HTTP requests

## AWS Command Line Interface

The **AWS Command Line Interface** is a unified tool that manages several **AWS services** from the command line and automates all the services through scripts
**aws-shell** is a command-line shell program to offer productivity and ease features to aid advanced and new users of the **AWS Command Line Interface**

**Key Features Include**:

- Fuzzy auto-completion for Resource identifiers, Options, Commands
- Dynamic in-line documentation
- Execution of OS shell commands
- Export executed commands to a text editor

## AWS Cloud - Products

Let us explore about different type of products in AWS:

- Compute - AWS provides numerous compute products that allows you to deploy, run, and scale applications as virtual servers, code or containers
- Storage - Cloud storage is secure, scalable and reliable component that includes the information used by applications
- Database - AWS provides fully managed NoSQL and relational databases, and in-memory cache to suit your application needs
- Developer Tools - AWS Developer tools is a set of services that are offered to allow developers securely version control and store the source code of applications. Also, it aids to build, test and deploy the application automatically
- Management Tools - Aids you to manage the applications and resources
- Security and Compliance - Allows customers to know the proficient controls at AWS to maintain data protection and security in the cloud
- Messaging - Provides several messaging services and tools with diverse abilities
- Application Services - Offers a plethora of managed services for use with applications such as converting digital media into different formats, including search to your website, and hosting streaming application

## Compute in AWS Cloud

**Compute** forms the nucleus of creating and executing business

AWS provides several **compute** products that allows to deploy, run, and scale applications as virtual servers, code, or containers

**Compute Covers**

- Simple websites and applications on one or a few servers
- Control and manage cluster or server level functions such as deployment and scaling
- Manage stateful or stateless applications packaged as Docker containers
- Stateless, event-initiated applications that require fast response times

## AWS Compute Offerings

Different **Compute** services offered by **AWS**

- **Amazon EC2** - Virtual Servers in the Cloud
- **Amazon EC2 Container Service** - Run and Manage Docker Containers
- **AWS Lambda** - Run Code in Response to Events
- **Amazon EC2 Container Registry** - Store and Retrieve Docker Images
- **Amazon Lightsail** - Launch and Manage Virtual Private Servers
- **Amazon VPC** - Isolated Cloud Resources
- **AWS Batch** - Run Batch Jobs at Any Scale
- **AWS Elastic Beanstalk** - Run and Manage Web Apps
- **Auto Scaling** - Automatic Elasticity

Amazon Elastic Compute Cloud (EC2)

![EC2 Architecture](./resource/1.png)

Amazon EC2 offers **resizable cloud-based** compute capability taking shape as **virtual servers**. There are a broad range of instance types that are easily manageable and exhibit different combinations of **networking capacity, storage, size, amount of memory, and CPU power**.

**_Features_**

- Removes the necessity of upfront investment on computer hardwares
- Commission numerous instances simultaneously
- Pay only for the used quantity
- Change web-scale cloud computing easy

**_Applications_**

- **Big data** - e.g. Hadoop
- **Database software** - e.g. Aurora, DynamoDB
- **Enterprise applications** - e.g. SAP, Oracle
- **Migrations from on-premises environments**
- **Open-source cluster management**

![ECS Architecture](./resource/2.png)

**Amazon ECS** is a scalable, performance container management service to include **Docker containers**. It enables you to run applications at ease on a managed cluster of Amazon EC2 instances.

Amazon EC2 removes the necessity to **install, run, and scale** cluster management infrastructure.

**Applications**

- Web applications
- Microservices
- Batch jobs
- Docker workloads

![Lambda Architecture](./resource/3.png)

**AWS Lambda** aims to run code without managing or provisioning servers

- Lambda is the nucleus of **serverless computing**. So build and run services and applications without bothering about servers
- Run code for virtually any type of backend service or application - with no administration
- Upload the code and Lambda handles everything needed to run and scale the code with better availability
- Pay only for the compute time that you use
- Create code to automatically trigger from other AWS services, otherwise call it directly from a mobile or web app

**Applications**

- Web applications
- Mobile backends
- IoT backends
- Stream processing workloads
- File processing workloads

## Storage in AWS Cloud

**Cloud storage** is a vital component of **cloud computing**, including the information utilized by applications.

- Cloud storage is more **secure, scalable,** and **reliable** than conventional on-premises storage systems.
- AWS provides a complete set of cloud storage services to support **archival** and **application** compliance needs.
- **Backup and archive applications, Databases, Internet of Things, Data warehouses, and Big data analytics** depend on data storage architecture.

### AWS - S3

![S3 Architecture](./resource/4.png)

**Amazon S3** can be described as object storage that stores and retrieves any quantity of data from anywhere on the internet. Amazon S3 features a simple web service interface.

- Renders incredible durability
- Scales past trillions of objects globally
- Once data is saved in S3, it can be tiered automatically into minimal cost, long-term cloud storage classes such as **Amazon Glacier** and **S3 Standard - Infrequent Access** for archiving.
- Serves as a target for backup and recovery, and disaster recovery; "data lake" for Big Data analytics, tier in an active archive and bulk repository for user-generated content.

### Amazon Glacier

![Glacier Architecture](./resource/5.png)

**Amazon Glacier** is a durable, secure, and economical cloud storage service for long-term backup and data archiving.

- Customers can safely store any data for as low as **$0.004 per gigabyte per month**.
- Considerable amount of savings in contrast to **on-premises** solutions.
- Amazon Glacier offers three choices to access archives for a few minutes to numerous hours.

### Amazon Elastic File System

**Amazon EFS** offers simple, scalable file storage that can be utilized with Amazon EC2 instances in AWS Cloud.

- Amazon EFS is user-friendly and provides a simple interface allowing you to create and configure file system effortlessly and fast.
- Storage capacity is elastic i.e. that shrinks or grows automatically.
- Several Amazon EC2 instances can access an Amazon EFS file system simultaneously, letting Amazon EFS to offer a common data source for workloads as well as applications operating on more than one Amazon EC2 instance.

**Application** - Amazon EFS is offered for better durability and availability for Big Data and analytics applications, container storage, web and content serving, media processing workflows, and enterprise applications.

## Database in AWS Cloud

AWS provides a broad range of database services to suit all application needs. These database services can be started quickly and are fully manageable.

**AWS database services** include:

- **Amazon Relational Database Service (Amazon RDS)** - supporting six widely used database engines.
- **Amazon DynamoDB** - a quick and flexible NoSQL database service.
- **Amazon Aurora** - a MySQL-compatible relational database that delivers five times the performance.
- **Amazon Elasticache** - an in-memory cache service with Memcached and Redis support.
- **Amazon Redshift** - a petabyte-scale data warehouse service.

AWS provides AWS Database Migration Service - a service that enables you to migrate databases to AWS Cloud in an easy and economical manner.

### Amazon RDS

![RDS Architecture](./resource/6.png)

**Amazon RDS** is very easy to **set up, run,** and **scale** a relational database in the cloud.

- offers resizable and low-cost capacity while managing database administration tasks that consume more time
- Amazon RDS offers size similar database engines to select from including **Microsoft SQL Server, Oracle, MariaDB, Amazon Aurora, MySQL, and PostgreSQL**.

### Dynamo DB

**Amazon DynamoDB** is a flexible and quick NoSQL database service for all applications that require single-digit, consistent millisecond latency at any scale.

- Completely cloud managed database, supporting document and key-value store models.
- reliable performance and flexible data model makes it suitable for several applications such as IoT, mobile, ad tech, web, and gaming.

## AWS CodeBuild

- A build service that is fully managed, compiles source code, operate tests, and creates deployable software packages.
- CodeBuild scales endlessly and processes several builds simultaneously, so the builds are not in queue.

**Benefits**

- Secure
- Allows Continuous Integration and Delivery
- Extensible
- Pay as You Go
- Continuous Scaling
- Fully Managed Build Service

## Management Tools in AWS

AWS offers a wide set of services for **IT and System administrators** to seamlessly **manage and monitor** -

- Infrastructure logs and metrics using alarms and real-time dashboards.
- Hybrid infrastructure resources.

AWS also allows to **track, monitor and enforce security and compliance**.

**Services**

- **Amazon EC2 Systems Manager** - Configure and Manage EC2 Instances and On-premises Servers
- **AWS CloudTrail** - Track User Activity and API Usage
- **AWS Config** - Track Resource Inventory and Changes
- **AWS Service Catalog** - Create and Use Standardized Products
- **AWS Personal Health Dashboard** - Personalized view of AWS service health
- **Amazon CloudWatch** - Monitor Resources and Applications
- **AWS Cloud Formation** - Create and Manage Resources with Templates
- **AWS OpsWorks** - Automate Operations with Chef
- **AWS Trusted Advisor** - Optimize Performance and Security

### Amazon CloudWatch

Amazon CloudWatch is a **monitoring service** designed for AWS cloud resources and the applications operate on AWS. Amazon CloudWatch can be used to:

- Automatically react to changes in AWS resources
- Collect, monitor log files and set alarms
- Collect and track metrics

Attain system-wide visibility into **operational health, application performance, and resource utilization**.

Amazon CloudWatch **monitors** AWS resources such as

- Amazon RDS DB instances
- Amazon DynamoDB tables
- Amazon EC2 instances
- Custom metrics or logs created by services and applications

### Amazon CloudTrail

![CloudTrail Architecture](./resource/7.png)

**AWS CloudTrail** is a service that allows **risk auditing, operational auditing, compliance**, and **governance** of AWS account.

- **Routinely monitor and retain events** specific to API calls throughout the AWS infrastructure.
- **Offers history of AWS API calls** for your account, which includes API calls done through the AWS SDKs, AWS Management Console, command line tools, and various AWS services.
  **Reduces** troubleshooting, security analysis, and resource change tracking.

**Benefits**:

- Security Automation
- Visibility Into User and Resource Activity
- Security Analysis and Troubleshooting
- Simplified Compliance

## Networking and Content Delivery in AWS

This ensures provision of

- Global Content Delivery Network (CDN) service that speeds up **delivery of video content, APIs, websites, or other web assets**.
- **Logically isolated section** of AWS cloud, where you can open AWS resources in a **virtual network**.
- Offer **more safe and economical way** to route end users to web applications by translating names into IP address.
- Set up a dedicated network connection from a location to AWS.

### Services offered -

- **Elastic Load Balancing** - High Scale Load Balancing
- **Amazon Route 53** - Scalable Domain Name System
- **Amazon Cloud Front** - Global Content Delivery Network
- **AWS Direct Connect** - Dedicated Network Connection to AWS
- **Amazon VPC** - Isolated Cloud Resources

## Security, Identity and Compliance

- AWS offers **data center and network architecture** built to meet the requirements of the most **security-sensitive organizations**.
- The AWS cloud provides with a platform to **scale and innovate**, while still maintaining a secure environment.
- Pay only for the services been used.

## Security, Identity, and Compliance Products

- **Amazon Inspector** - automated security assessment service, that aids to enhance the compliance and security of applications deployed on AWS
- **AWS Identity and Access Management(IAM)** - controls **users access** to AWS services. **Allows to create, manage users and groups**, and **deny or grant access**.
- **AWS Artifact** - the portal offers on-demand access to AWS compliance and security documents (audit artifacts).
- **Amazon Cloud Directory** - set up flexible cloud-native directories to organize hierarchies of data along numerous dimensions.
- **AWS Certificate Manager** - seemlessly manage, provision, and deploy Secure Sockets Layer (SSL)/Transport Layer Security (TLS) certificates.
- **AWS CloudHSM** - fulfill regulatory, contractual and corporate compliance requirements for data security by utilizing dedicated Hardware Security Module(HSM), **AWS Directory Service** - allows AWS resources and directory-aware workloads to utilize managed Active Directory in AWS Cloud \*for Microsoft Active Directory\*\*.
- **AWS WAF** - web application firewall that aids in protecting web applications from web threats that could eat up excessive resources, or compromise security, hinder application availability.

## AWS IoT

AWS has developed IoT specific services that assists to gather and send data to the cloud. The IoT services makes it comfortable to load and analyze information, and offer the capability to manage devices and stress on developing applications that suit the requirements.
**AWS Greengrass** helps to operate data caching, messaging and local compute for connected devices in a safe way.
**AWS IoT Platform** is a managed cloud platform that allows connected devices interact with other devices and cloud applications securely and easilty. AWS IoT can support **many devices** and **lot of messages**.
**AWS IoT Button** is a programmable button that is based on the Amazon Dash Button hardware. The Wi-Fi device is effortless to configure. AWS IoT Button is offered to developers to use Amazon SNS, Amazon DynamoDB, AWS Lambda, AWS IoT, and several other Amazon Web Services without the need to write device-specific code.

## Messaging

- Fully managed message queues for safe **communication between microservices and applications**
- **Quick, flexible, fully managed push notification service** to transmit specific messages or to fan-out messages to numerous recipients
- Run **targeted campaigns** to create user engagement in mobile applications
- **Cost-effective email service** created on the scalable and reliable infrastructure

## Key offerings

- **Simple Email Service (SES)** - Email Sending and Receiving
- **Pinpoint** - Push Notifications for Mobile Applications
- **Simple Notification Service (SNS)** - Pub or Sub, Mobile Push and SMS
- **Simple Queue Service (SQS)** - Managed Message Queues

## Application Services

AWS Application services have a broad range of services that helps in enhancing the rendering of application over cloud. Main offerings include -
**Amazon Elastic Transcoder** - Simple Scalable Media Transcoding
**Amazon API Gateway** - Build, Deploy, and Manage APIs
**AWS Step Functions** - Coordinate Distributed Applications

### Step Functions

Offers a **graphical console** to **set up and visualize the components** of the application as a **series of steps**.

- Easy to create and run **multistep applications**
- Coordinate the components of microservices and distributed applications using visual workflows
- Create applications from single components that each perform a discrete function to **change and scale applications quickly**
- **Triggers and tracks each step automatically**, and retries when errors are noticed, which ensure your application executes as intended and in order
- Logs the state of every single step. When things go wrong, it is **simple to diagnose and debug issues fast**. You can change and include steps without need to write code, effortlessly evolve the application and **innovate rapidly**
- Manages the underlying infrastructure and operations to ensure application is available at all scales

## API Gateway

![API Gateway Architecture](./resource/8.png)

**Fully managed service** that allows developers to create, publish, maintain, monitor, and secure APIs easily at any scale.

- Serves as "front door" for applications to access functionality, data, or business logic from your back-end services, like, code running on AWS Lambda, workloads running on Amazon EC2 or any Web application
- Takes care of processing and accepting of **concurrent API calls**, including API version management, monitoring, traffic management, and authorization and access control
- Pay only for the API calls received and the data transferred

**API Gateway Benefits**

- Low-Cost and Efficient
- Performance at Any Scale
- Easily Monitor API Activity
- Streamline API Development
- Secure and Flexible
- Flexible Security Controls
- Create RESTful Endpoints
- Run Your APIS Without Servers

Media **transcoding** in the cloud

Businesses and developers could transcode or convert **media files** from their source format into versions that will playback on devices such as **PCs, tablets and smartphones**

It is designed to be user-friendly, economical, and highly scalable

## Mobile Services in AWS

![Mobile Services Architecture](./resource/9.png)

AWS allows to easily build advanced cloud-powered applications for mobile devices!

**Stream Real-Time Data** - Gather real-time clickstream logs and react quickly.
**Store Shared Data** - Store and query NoSQL data to users and devices.
**Authorize Access** - Securely access cloud resources.
**Send Push Notifications** - Keep users active by transmitting messages reliably.
**Deliver Media** - Detect mobile devices automatically and render content quickly on a global basis.
**Analyze User Behavior** - Track engagement and active users.
**Synchronize Data** - Sync user preferences across devices.
**Manage Media** - Store and share user-generated photos and other media items.
**Authenticate Users** - Manage identity providers and users.

### Everything You Need to Build Mobile Apps

**Bountiful Cloud Services** AWS provides a wide set of **highly scalable, fully managed services** that include **data warehousing, content delivery, streaming, monitoring, databases, storage, logic, and machine learning** in app without the need to manage any infrastructure.

**The Tools To Help You Build** AWS allows to add cloud services to mobile app easily

- Develop a serverless mobile backend
- Manage user identity and sign-in
- Transmit push notifications
- Track usage patterns and maximize your app with in-app analytics
- Test against a huge set of real devices

## AWS Offerings

![Offerings Overview](./resource/10.png)

- **AWS Mobile Hub** - Build, Test, and Monitor Apps
- **Amazon Cognito** - User Identity and App Data Synchronization
- **AWS Mobile SDK** - Mobile Software Development Kit
- **Amazon API Gateway** - Build, Deploy, and Manage APIs
- **Amazon Pinpoint** - Push Notifications for Mobile Apps
- **AWS Device Farm** - Test Android, FireOS, and iOS Apps on Real Devices in the Cloud

![Mobile Hub Overview](./resource/11.png)

AWS Mobile Hub provides an **integrated console** that helps you

- Build
- Test
- Monitor & manage mobile apps

**Mobile Hub** provisions and configures the necessary AWS services and creates a working sample app

## Cognito

Amazon Cognito **reduces** the task of

- Authenticating users, storing, and managing
- Synchronizing data across several applications, platforms, and devices

This functions both offline or online, and enables to save user-specific data securely such as game state and application preferences.

Cognito supports unauthenticated guest users and works with several existing identity providers.

# AWS Access Management

Cloud is a revolutionary transformation in IT, many startups and established enterprises are adopting cloud for its advantages. **Amazon Web Services** is one such global leader in cloud Service providers, when all enterprises are preparing to use the cloud, **Security is a top concern**.

A major threat comes to data in the form of hacking, manual error, unauthorized access etc, to prevent this from happening AWS provides many services to make its cloud environment secure one among them is **AWS IAM(Identity and Access Management)**.

## What is IAM?

**IAM**(Identity and Access Management) is a service provided by Amazon Web Services used to manage Users, Groups and their access to various resources of AWS using **Policies** and **Roles**

## Shared Responsibility Model

Amazon employs a security model in which **security is shared between users and Amazon**, the responsibility of keeping the data secure is divided in a legitimate manner, They are:

**Security "of" the cloud**:

This means that AWS is responsible for the security of AWS Global infrastructure which includes the combination of regions, Availability zones, edge locations and all core service offerings such as Compute, Database, Network, Storage. This also included the physical security.

**Security "in" the cloud**:

This Security in the cloud is responsibility of the users. The security of what you place and operate in cloud is your responsibility like configuring operating system and patching, access controls, identity and access management, privileges to users given, Network, firewall, etc.

![Shared Responsibility Model](./resource/12.png)

### Separation of Duties

**Separation of duties is a way to share the responsibilities that also secures the account. So, let's know how is that possible.**

The **root account** is the account which we use to create the AWS account, **The username and password of AWS root account are highly confidential** because it has the power to do anything in the service selected.

So just using a username and password is not recommended, enable a **Multi-Factor Authentication** for the account in a Physical-MFA device.

Identify **two trusted groups** within the project and give the password to one group and MFA device to other. So to login into root account both the groups need to work with each other.

**It is recommended not to use the root account for day to day use**.

### AWS CloudTrail

**CloudTrail is a management service which is very much useful in IT audit and security**

AWS uses API's for the internal communication protocol. So when you interact with any of the services through SDK or AWS CLI or through the management console they use backend API's to communicate.

When once configured CloudTrail will record all or selected API interactions and stores them in an S3 Bucket, **it records details of API caller, which includes IP address, time etc**.

### Accessing CloudTrail through CLI

\*\*AWS CLI is an open source tool built on top of the AWS SDK for Python (Boto) that provides commands for interacting with AWS services.

First, you need to install AWS CLI on your device the installation process can be found in the AWS CLI documentation

**Lets check some basic commands used for CloudTrail**:

1. To create a new trail:

```
aws cloudtrail create-trail --name trailName --s3-bucket-name BucketName --is-multi-region-trail.
```

2. To delete a trail:

```
aws cloudtrail delete-trail --name trail
```

3. To get the complete info of a trail:

```
aws cloudtrail get-trail-status --name Trail1
```

### Basic Functionality of IAM

**So, Now you have a brief knowledge of what is IAM, let's dive deep into it further**.

IAM does two primary functions, one is to **authenticate** the user by validating the username and password and other is **authorizing** the user, which validates the actions that a user can perform in any of the services in the cloud.

These are very much useful to restrict unauthorized access to services and also grant a temporary access to any resource with **secure access token** service.

AWS IAM supports identity federation. so, if you already manage users external to AWS, using something like an on-premises Active Directory configuration, you can map Active Directory identities to IAM users.

### IAM Features

Some of the important features provided by IAM are:

- It is a Free service
- Shared access to your AWS account
- Granular Permissions: Giving different permissions to different people to different AWS resources
- Multi-Factor Authentication(MFA) to users
- Identity Federation - allowing users to access AWS services(temporary) having accounts elsewhere
- Identity information for assurance
- Setting up your own password policy

### Who is the User?

An Organization's AWS account is used by various persons for various purposes, so sharing your **root user credentials** involves a very high amount of risk, and also some may need only access to storage, other to compute, some to database. So, in order to satisfy all these needs we have **IAM user**.

**An IAM user is a user within your root account having a separate login and password and also can be restricted to use only resources which are required**.

Also, a user can have his own secret access key which can be used to configure CLI.

### What are IAM groups?

Now, if you want to set some same permissions to a number of users, how would you do that?

For this purpose we have **IAM Groups**.

Groups are defined as the **collection of IAM users**. These groups helps in managing permissions to all users rather than to a single user through access control policies.

A single user can be part of any number of groups.

### What is an IAM Policy?

**IAM Policies are important tools used for restricting or giving access to a resources in the AWS**. When a request is made by the user, AWS evaluates these policies and decide whether to allow or deny the request. They are applied to users, groups, and roles.

**AWS provides many predefined policies which perform a particular action and if needed you can define your own custom policy**. These policies are stored in JSON format.

### Types of Policies

There are four types of policies that are generally used in AWS they are:

1. **Identity-based policy**: These are AWS managed and custom defined policies that are attached to AWS users, groups, and roles
2. **Resource-based Policies**: These are custom policies attached to resources, examples of resource based policies are S3 bucket policy and IAM role trust policy
3. **Organizations SCPs**: These use an AWS Organizations service control policy (SCP) to apply a permissions boundary to an Organization Unit(OU)
4. **Access Control List**: These are similar to Resource-based policy, but this doesn't use a JSON policy document Structure

### Accessing IAM through AWS CLI

IAM provides the facility to access its major services through the **AWS CLI**:

1. Create a new IAM user:

```
aws iam create-user --user-name NAME.
```

2. To create a login password:

```
aws iam create-login-profile --user-name NAME --password PASSWORD.
```

3. To delete an existing user:

```
aws iam delete-user --user-name NAME
```

4. To attach a policy to a user:

```
aws iam attach-user-policy --policy-arn arn:aws:iam: :aws:policy/POLICYNAME --user-name NAME
```

5. To create Group:

```
aws iam create-group --group-name GROUPNAME
```

6. To add users to an existing group:

```
aws iam add-user-to-group --user-name NAME --group-name GROUPNAME
```

7. To attach a policy to a group

```
aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/POLICYNAME --group-name GROUPNAME
```

8. To get complete details about an attached policy:

```
aws iam get-policy --policy-arn arn:aws:iam::123456789012:policy/POLICY
```

## AWS Managed Policies vs Inline Policy

There are many policies predefined already by the AWS, which gets updated frequently and also they are very easy for beginners to create and attach a policy can be reused

**Inline or custom policies** are useful if you want to maintain a strict one-to-one relationship between a policy and the entity that it's applied to

### Elements in IAM Policy JSON

1. **Version** - Specify the version of the policy language that you want to use. As a best practice, use the latest 2012-10-17 version

2. **Statement** - Use the main policy element as a container for the following elements. You can include more than one statement in a policy

3. **Sid** - Include an optional statement ID to differentiate between your statements

4. **Effect** - Use Allow or Deny to indicate whether the policy allows or denies access

5. **Principal** - Indicate the account, user, role, or federated user to which you would like to allow or deny access. If you are creating a policy to attach to a user or role, you cannot include this element. The principal is implied as that user or role

6. **Action** - Include a list of actions that the policy allows or denies

7. **Resource** - Specify a list of resources to which the actions apply

8. **Condition(Optional)** - Specify the circumstances under which the policy grants permission

## What is an IAM Role?

**IAM roles are similar to users, they can be used to grant consistent permissions to users and machines(services)**. These roles instead of being uniquely associated with one person, intended to be assumable by anyone who needs it.

**Roles do not have any security credentials associated with** but if a user assumes a role temporary security credentials are provided to the user.

You can use roles to delegate access to users, applications, or services that don't normally have access to your AWS resources, like people having accounts in other AWS account, allow mobile app to use AWS resource, to people having access outside AWS in your corporate directory.

You can also configure AWSCLI to use a role by creating a profile for the role in ~/.aws/config.

### IAM Role Concepts

1. **AWS Service Role**: This is the general role which a service assumes and performs actions on other services on your behalf, these service roles vary from service to service, Service roles provide access to resources only in your account

2. **AWS Service Linked Role**: This is a unique type of service role that is linked to a service directly. These are predefined by the service and have all permissions to perform the action on other resources in AWS

3. **Role Chaining**: This Role Chaining occurs when you try to use a role to assume the second role through AWS CLI or API. For example, assume that a User has permission to assume Role1 and Role2 and Role1 has permission to assume Role2. You can assume Role1 by using User's long-term user credentials in the AssumeRole API operation. This operation returns Role1's short-term credentials. To engage in role chaining, you can use Role1's short-term credentials to assume Role2. Generally this is used in cross-account access or federation

4. **Delegation**: This is **granting permissions to access resources that you control**, it involves setting up a trust between the account that owns the resource and account or users that want to access resources. To delegate permission to access a resource, you create an IAM role in the trusting account that has two policies attached. The permissions policy grants the user of the role the needed permissions to carry out the intended tasks on the resource. The trust policy specifies which trusted account members are allowed to assume the role

5. **Federation**: This is creation of Trust between AWS and other identity service providers such as Facebook, Google, or any other idp that is compatible with OpenID Connect(OIDC), and users also can login with enterprise login which is compatible with SAML2.0.

6. **Permissions Boundary**: This feature can limit a role to have a particular number of resources, these can't be applied to Service linked roles

### Accessing IAM Roles through CLI

Let us look into some basic CLI commands that are very much useful in dealing with roles

1. To create an IAM Role:

```
aws iam create-role --role-name <Test-Role> --assume-role-policy-document file://Test-Role-Trust-Policy.json
```

2. Attach a policy to a role:

```
aws iam attach-role-policy --role-name <test-role> --policy-arn <Value>.
```

3. To delete a role:

```
aws iam delete-role --role-name <test-role>
```

4. To update attached Role policy:

```
aws iam update-assume-role-policy --role-name <test-role> --policy-document file://Test-Role-Trust-Policy.json
```

## Temporary Security Credentials

**Temporary Security Credentials** are used to gain access to the AWS resources by the trusted users. These are similar to the long term **Access key and Secret Access Key**, as name implies they can be restricted to last the particular period of time, once expired they will not be used to gain access to AWS resources.

Temporary Security Credentials will not be stored with user they are created dynamically when requested, once they are expired users can request them again until they have the access to request.

These are basis of **identity federation** and **Amazon Cognito** services.

### AWS Security Token Service

**Security Token Service(STS)** is a web service that enables IAM users or federated users to request the temporary security credentials.

STS is a global service having endpoint at https://sts.amazonaws.com, you can make STS API calls to your nearby supported region which can reduce latency irrespective of region they work globally.

### STS use cases

**Identity Federation**:

You can manage your user identities in an external system outside of AWS and grant users who sign in from those systems access to perform AWS tasks and access your AWS resources. This is of two types:

1. **Enterprise Identity Federation**: In this, you can authenticate users in your corporate directory without creating new AWS identity for them. This is known as the single sign-on (SSO) approach to temporary access. AWS STS supports open standards like Security Assertion Markup Language (SAML) 2.0.

2. **Web Identity Federation**: This can be used to let users login with any well known third party identity providers such as **Facebook, Google, Amazon** etc or any Open I.D connect(OIDC) compatible providers. You can exchange the credentials from that provider for temporary permissions to use resources in your AWS account.

**Roles for cross Account Access**:

Using roles and cross-account access, you can define user identities in one account, and use those identities to access AWS resources in other accounts that belong to your organization.

## Cross Account Role Access

One amazing property of IAM Roles is that we can access the resources in one AWS account without having access to that, but having a user account in other AWS account, which is called as **Cross Account Role Access**.

This is very much used when your project has multiple accounts (say development and production) and some users at times need access to other accounts resources or even some third party account needs to access your resources etc.

### Web Identity Federation

You are a developer and you own a mobile app or a website which uses AWS resources, the end user can perform actions in your AWS resources (say s3 for storing some files or images) without having an IAM user account.

This is made possible by allowing users federated by the specified external web identity or OpenID Connect (OIDC) provider to assume this role.

AWS IAM now supports Facebook, Google, Amazon and any open ID Connect providers for authentication.

You need to have a basic idea of Developer functions in respective providers for setting up web identity federation using the providers.

### Amazon Cognito provides Web Identity Federation with the following features:

- Sign-up and sign-in to your apps
- Access for guest users
- Acts as an Identity Broker between your application and Web ID providers, so you don't need to write any additional code
- Synchronize user data for multiple devices
- Recommended for all mobile applications AWS services

Cognito brokers between the app and Facebook/Google to provide temporary credentials which map to an IAM role allowing access to the required resources. No need for the application to embed or store AWS credentials locally on the device and it gives users a seamless experience across all mobile devices.

User Pools are user directories used to manage sign-up and sign-in functionality for mobile and web applications. Users can sign-in directly to the User Pool, or using Facebook, Amazon, or Google. Cognito acts as an Identity Broker between the identity provider and AWS. Successful authentication generates a JSON Web token (JWTs).

Identity Pools enable provide temporary AWS credentialsto access AWS services like S3 or DynamoDB

User Pools are all about usernames, passwords, and that sort of thing. Identity Pools are actual granting of authentication to the AWS Resources

![User Pools v/s Identity Pools](./resource/13.png)

Cognito tracks the association between user identity and the various different devices they sign-in from. In order to provide a seamless user experience for your application, Cognito uses Push Synchronization to push updates and synchronize user data across multiple devices. Cognito uses SNS to send a notification to all the devices associated with a given user identity whenever data stored in the cloud changes.

![Push Synchronization](./resource/14.png)

### AWS Cognito Summary

- Federation allows user to authenticate with a Web Identity Provider (Google, Facebook, Amazon)
- The user authenticates first with the Web ID Provider and receives an authentication toke, which is exchanged for temporary AWS credentials allowing them to assume an IAM role
- Cognito is an Identity Broker which handles interaction between your applications and the Web ID provider (You don't need to write your own code to do this.)
- User pool is user based. It handles things like user registration, authentication, and account recovery
- Identity pools authorize access to your AWS resources

## SAML 2.0 Federation

**Security Assertion Markup Language 2.0(SAML 2.0)** is a version of SAML for exchanging authentication and authorization data between security domains. It is an XML based protocol that uses security tokens containing assertions passing information about the principle(user), many large organizations, government agencies have opted for SAML as standard protocol for the communication identities

**AWS Supports Identity Federation with SAML2.0**. This feature enables federated single sign-on(SSO), so users can log into the AWS Management Console or call the AWS API operations without you having to create an IAM user for everyone in your organization

## IAM Best Practices by AWS

The Best practices for a secure environment are:

- Never use the root account for day to day activity
- Lockdown root account access keys and enable MFA always
- Use AWS defined Policies to assign permissions
- Assign permissions at group/role level rather than user level
- Grant Least Privilege
- Configure a strong password policy for IAM Users
- Use IAM roles for custome applications running on AWS EC2
- Remove unused, stale, or unnecessary IAM users/credentials
- Use Policy conditions if high sensitive information is involved
- Monitor user activity in all services through management tools

# AWS Lambda

## Benefits of AWS Lambda

1. **No worries about the server** - You don't require servers. All you need to do is write the code and upload it to Lambda. This means, we can stop worrying about provisioning and managing those servers! The only thing Lambda requires to work is our code!

2. **Automatic Scaling** - Scaling is done automatically based on the size of the workload. It scales the application running the code in response to each trigger

3. **Metering on the second** - You only pay for the amount of time that your code is running. Which means that you're not charged for any of the servers. The only payment required is for the amount of time the code is computed

## What is AWS Lambda?

AWS Lambda is one of the services that falls under the **Compute** domain of services that AWS provides. Lambda can be used to run code in response to certain events from other services

Supports a number of prominent programming languages like Node.js, Java, C#, Python, GO, etc

There are a huge number of ways that AWS Lambda is used by businesses, some of them are:

1. AWS Lambda is used to process images when it's uploaded
   **Ex**: Adding images into S3 bucket --> AWS Lambda is triggered --> The images are processed and converted into thumbnails based on the device

2. AWS Lambda is used to analyze social media data
   **Ex**: Social data is added into Amazon Kinesis --> AWS Lambda is triggered --> The data is stored into a database which can be used by business users

- It Supports small specific functions
- Light weight execution engine for a single function

- It has two execution methods: Request/Response (Used when a response is expected from a request. Ex: AWS API Gateway), Event(Used when functions are performed based on triggered events. Ex: Amazon S3, AWS DynamoDB)

### AWS Lambda Integration with Other AWS Services

![Integration with Other Services](./resource/lambda_3.png)

### Traditional Stack v/s AWS Lambda Stack

![Traditional Stack v/s AWS Lambda Stack](./resource/lambda_4.png)

## How does Lambda work?

![Lambda basics](./resource/lambda_1.png)

Here, these clients could be anyone who's sending requests to AWS Lambda. It could be an application or other Amazon services
So these requests are given to a **container** to handle. A **container** contains the code the user has provided to satisfy the query

> Container: A Container is a lightweight standalone executable package of a piece of software that includes everything needs to run it like the code, the runtime, the system tools, the system libraries, and any other settings required. Containerized software will always run the same regardless of the environment it's running on. A container isolate software from it's surrounding i.e. isolating the development environment from the production environment. This reduces chances of encountering an error

With an increasing number of requests, an increasing number of containers are created. When the requests reduce, the number of containers reduce as well

## Use Case - Backing up data

Now consider a situation where you have to set up a temporary storage system to back up data as soon as it is uploaded.

![Use Case](./resource/lambda_2.png)

So here one of the buckets is the source (where the data is uploaded) and the other one is where the data is to be backed up

This Lambda function is invoked every time there's an upload into the bucket. This data is then uploaded into the backup bucket

## AWS Lambda - Pricing and Limits

![AWS Lambda Pricing](./resource/lambda_5.png)

## AWS Lambda - Difficulties

![AWS Lambda Difficulties](./resource/lambda_6.png)

# Amazon DynamoDB

![What is DynamoDB](./resource/dynamodb_1.png)

## Amazon DynamoDB Benefits

![Amazon DynamoDB Benefits](./resource/dynamodb_2.png)

## Amazon DynamoDB Characteristics

![Read Consistency](./resource/dynamodb_3.png)

![Provisioned Throughput Capacity](./resource/dynamodb_4.png)

## AWS DynamoDB: Use Case

![Use Case](./resource/dynamodb_5.png)
