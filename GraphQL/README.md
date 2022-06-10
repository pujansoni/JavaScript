## What is GraphQL?

- new **API** standard that was invented & open-sourced by Facebook
- enables **declarative data fetching**
- GraphQL server exposes **single endpoint** and responds to **queries**

### A more efficient Alternative to REST

1. Increased mobile usage creates need for efficient data loading
2. Variety of different frontend frameworks and platforms on the client-side
3. Fast development speed & expectation for rapid feature development

### GraphQL is _not_ only for React Developers

- Facebook uses GraphQL since 2012 in their native mobile apps
- First time presented publicly at React.js Conf 2015
- GraphQL can be used with any programming language and framework

## GraphQL is the better REST

### GraphQL v/s REST

- **Great ideas in REST**: stateless servers & structured access to resources
- **REST is a strict specification**: but the concept was wildly interpreted
- Rapidly **changing requirements on client-side** don't go well with the static nature of REST

GraphQL was developed to cope with the **need for more flexibility and efficiency** in client-server communication

### REST example

![REST-API example](./resources/graphql_1_rest_ex.png)

![REST-API example contd.](./resources/graphql_2_rest_ex.png)

![REST-API example GET](./resources/graphql_3_rest_ex.png)

![REST-API example POST](./resources/graphql_4_rest_ex.png)

![REST-API example GET 2](./resources/graphql_5_rest_ex.png)

### GraphQL example

![GraphQL example](./resources/graphql_6_graphql_ex.png)

We handle everything with a single request in GraphQL which is a POST request and in this request we mention the requirements of our application:

**Request**

![GraphQL example Request](./resources/graphql_7_graphql_ex.png)

**Response**

![GraphQL example Response](./resources/graphql_8_graphql_ex.png)

### Benefits of GraphQL over REST

- No more Overfetching and Underfetching

  - **Overfetching**: Downloading unnecessary data
  - **Underfetching**: An endpoint doesn't return enough of the right information; need to send multiple requests (n+1-requests problem)

- Rapid Production Iterations

  - **REST**: structure endpoints according to client's data needs
  - **GraphQL**: No need to adjust API when product requirements and design changes. Faster feedback cycles and product iterations

- Insightful Analytics

  - Fine-grained info about what data is read by clients
  - Enables evolving API and deprecating unneeded API features
  - Great opportunities for instrumenting and performance monitoring

- Benefits of Schema & Types

  - GraphQL uses strong type system to define capabilities of an API
  - _Schema_ serves as _contract_ between client and server
  - Frontend and backend teams can work completely independent from each other
