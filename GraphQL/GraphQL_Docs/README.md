## Queries and Mutations

### Fields

At its simpliest, GraphQL is about asking for specific fields on objects. Let's start by looking at a very simple query and the result we get when we run it:

**Request**

```
{
    hero {
        name
    }
}
```

**Response**

```
{
    "data": {
        "hero": {
            "name": "R2-D2"
        }
    }
}
```

You can see immediately that the query has exactly the same shape as the result. This is essential to GraphQL, because you always get back what you expect, and the server knows exactly what fields the client is asking for

The field **name** returns a **String** type, in this case the name of the main hero of Star Wars, "R2-D2"

> Oh, one more thing - the query is _interactive_. That means you can change it as you like and see the new result. Try adding an **appearsIn** field to the **hero** object in the query, and see the new result

In the previous example, we just asked for the name of our hero which returned a String, but fields can also refer to Objects. In that case, you can make a _sub-selection_ of fields for that object. GraphQL queries can traverse related objects and their fields, letting clients fetch lots of related data in one request, instead of making several roundtrips as one would need in a classic REST architecture

**Request**

```
{
    hero {
        name
        # Queries can have comments!
        friends {
            name
        }
    }
}
```

**Response**

```
{
    "data": {
        "hero": {
            "name": "R2-D2",
            "friends": [
                {
                    "name": "Luke Skywalker"
                },
                {
                    "name": "Han Solo"
                },
                {
                    "name": "Leia Organa"
                }
            ]
        }
    }
}
```

Note that in this example, the **friends** field returns an array of items. GraphQL queries look the same for both single items or lists of items, however we know which one to expect based on what is indicated in the schema

### Arguments

If the only thing we could do was traverse objects and their fields, GraphQL would already be a very useful language for data fetching. But when you add the ability to pass arguments to fields, things get much more interesting

**Request**

```
{
    human(id: "1000") {
        name
        height
    }
}
```

**Response**

```
{
    "data": {
        "human": {
            "name": "Luke Skywalker",
            "height": 1.72
        }
    }
}
```

In a system like REST, you can only pass a single set of arguments, the query parameters and URL segments in your request. But in GraphQL, every field and nested object can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches. You can even pass arguments into scalar fields, to implement data transformations once on the server, instead of on every client separately

**Request**

```
{
    human(id: "1000") {
        name
        height(unit: FOOT)
    }
}
```

**Response**

```
{
    "data": {
        "human": {
            "name": "Luke Skywalker",
            "height": 5.64
        }
    }
}
```

Arguments can be of many different types. In the above example, we have used an Enumeration type, which represents one of a finite set of options (in this case, units of length, either METER or FOOT). GraphQL comes with a default set of types, but a GraphQL server can also declare its own custom types, as long as they can be serialized into your transport format

### Aliases

If you have a sharp eye, you may have noticed that, since the result object fields match the name of the field in the query but don't include arguments, you can't directly query for the same field with different arguments. That's why you need alisases - they let you rename the result of a field to anything you want

**Request**

```
{
    empireHero: hero(episode: EMPIRE) {
        name
    }
    jediHero: hero(episode: JEDI) {
        name
    }
}
```

**Response**

```
{
    "data": {
        "empireHero": {
            "name": "Luke Skywalker"
        },
        "jediHero": {
            "name": "R2-D2"
        }
    }
}
```

In the above example, the two **hero** fields would have conflicted, but since we can alias them to different names, we can get both results in one request

### Fragments

Let's say we had a relatively complicated page in our app, which lets us look at two heroes side by side, along with their friends. You can image that such a query could quickly get complicated, because we would need to repeat the fields at least once - one for each side of the comparison

That's why GraphQL includes reusable units called _fragments_. Fragments let you construct sets of fields, and then include them in queries where you need to. Here's an example of how you could solve the above situation using fragments

**Request**

```
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```

**Response**

```
{
  "data": {
    "leftComparison": {
      "name": "Luke Skywalker",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ],
      "friends": [
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        },
        {
          "name": "C-3PO"
        },
        {
          "name": "R2-D2"
        }
      ]
    },
    "rightComparison": {
      "name": "R2-D2",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ],
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```

You can see how the above query would be pretty repetitive if the fields were repeated. The concept of fragments is frequently used to split complicated application data requirements into smaller chunks, especially when you need to combine lots of UI components with different fragments into one initial data fetch

### Using variables inside fragments

It is possible for fragments to access variables declared in the query or mutation

**Request**

```
query HeroComparison($first: Int = 3) {
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  friendsConnection(first: $first) {
    totalCount
    edges {
      node {
        name
      }
    }
  }
}
```

**Response**

```
{
  "data": {
    "leftComparison": {
      "name": "Luke Skywalker",
      "friendsConnection": {
        "totalCount": 4,
        "edges": [
          {
            "node": {
              "name": "Han Solo"
            }
          },
          {
            "node": {
              "name": "Leia Organa"
            }
          },
          {
            "node": {
              "name": "C-3PO"
            }
          }
        ]
      }
    },
    "rightComparison": {
      "name": "R2-D2",
      "friendsConnection": {
        "totalCount": 3,
        "edges": [
          {
            "node": {
              "name": "Luke Skywalker"
            }
          },
          {
            "node": {
              "name": "Han Solo"
            }
          },
          {
            "node": {
              "name": "Leia Organa"
            }
          }
        ]
      }
    }
  }
}
```

### Operation name

Up until now, we have been using a shorthand syntax where we omit both the **query** keyword and the query name, but in production apps it's useful to use these to make our code less ambiguous

Here's an example that includes the keyword **query** as _operation type_ and **HeroNameAndFriends** as _operation name_:

**Request**

```
query HeroNameAndFriends {
  hero {
    name
    friends {
      name
    }
  }
}
```

**Response**

```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```

The _operation type_ is either _query, mutation, or subscription_ and describes what type of operation you're intending to do. The operation type is required unless you're using the query shorthand syntax, in which case you can't supply a name or variable definitions for your operation

The _operation name_ is meaningful and explicit name for your operation. It is only required in multi-operation documents, but its use is encouraged because it is very helpful for debugging and server-side loggin. When something goes wrong ( you see errors either in your network logs, or in the logs of your GraphQL server) it is easier to identify a query in your codebase by name instead of trying to decipher the contents. Think of this just like function name in your favorite programming language. For example, in JavaScript we can easily work only with anonymous functions, but when we give a function a name, it's easier to track it down, debug our code, and log when it's called. In the same way, GraphQL query and mutation names, along with fragment names, can be a useful debugging tool on the server side to identify different GraphQL requests

### Variables

So far, we have been writing all of our arguments inside the query string. But in most applications, the arguments to fields will be dynamic. For example, there might be a dropdown that lets you select which Star Wars episode you are interested in, or a search field, or a set of filters

It wouldn't be a good idea to pass these dynamic arguments directly in the query string, because then our client-side code would need to dynamically manipulate the query string at runtime, and serialize it into a GraphQL-specific format. Instead, GraphQL has a first-class way to factor dynamic values out of the query, and pass them as a separate dictionary. These values are called _variables_

When we start working with variables, we need to do three things:

1. Replace the static value in the query with **_$variableName_**
2. Declare **_$variableName_** as one of the variables accepted by the query
3. Pass **_$variableName: value_** in the separate, transport-specific (usually JSON) variables dictionary

Here's what it looks like all together:

**Request**

```
query HeroNameAndFriends($episode: Episode) {
    hero(episode: $episode) {
        name
        friends {
            name
        }
    }
}
```

**Variables**

```
{
    "episode": "JEDI"
}
```

**Response**

```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```

Now, in our client code, we can simply pass a different variable rather than needing to construct an entirely new query. This is also in general a good practice for denoting which arguments in our query are expected to be dynamic-we should never be doing string interpolation to construct queries from user-supplied values

**Variable definitions**

The variable definitions are the part that looks like **(\$episode: Episode)** in the query above. It works just like the argument definitions for a function in a typed language. It lists all of the variables, prefixed by $, followed by their type, in the case **Episode**

All declared variables must be either scalars, enums, or input object types. So if you want to pass a complex object into a field, you need to know what input type that matches on the server. Learn more about input object types on the Schema page

Variable definitions can be optional or required. In the case above, since there isn't an **!** next to the **Episode** type, it's optional. But if the field you are passing the variable into requires a non-null argument, then the variable has to be required as well

**Default variables**

Default values can also be assigned to the variables in the query by adding the default value after the type declaration

```
query HeroNameAndFriends($episode: Episode = JEDI) {
    hero(episode: $episode) {
        name
        friends {
            name
        }
    }
}
```

When default values are provided for all variables, you can call the query without passing any variables. If any variables are passed as part of the variables dictionary, they will override the defaults

### Directives

We discused above how variables enable us to avoid doing manual string interpolation to construct dynamic queries. Passing variables in arguments solves a pretty big class of these problems, but we might also need a way to dynamically change the structure and shape of our queries using variables. For example, we can image a UI component that has a summarized and detailed view, where one includes more fields than the other

Let's construct a query for such a component:

**Request**

```
query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
    name
    friends @include(if: $withFriends) {
      name
    }
  }
}
```

**Variables**

```
{
  "episode": "JEDI",
  "withFriends": false
}
```

**Response**

```
{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}
```

Try editing the variables above to instead pass **true** for **withFriends**, and see how the result changes

We needed to use a new feature in GraphQL called a _directive_. A directive can be attached to a field or fragment inclusion, and can affect execution of the query in any way th server desires. The core GraphQL specification includes exactly two directives, which must be supported by any spec-compliant GraphQL server implementation:

- **@include(if: Boolean)** Only include this field in the result if the argument in **true**
- **@skip(if: Boolean)** Skip this field if the argument is **true**

Directives can be useful to get out of situations where you otherwise would need to do string manipulation to add and remove fields in your query. Server implementation may also add experimental features by defining completely new directives

### Mutations

Most discussions of GraphQL, focus on data fetching, but any complete data platform needs a way to modify server-side data as well

In REST, any request might end up causing some side-effects on the server, but by convention it's suggested that one doesn't use GET requests to modify data. GraphQL is similar - technically any query could be implemented to cause a data write. However, it's useful to establish a convention that any operations that causes writes should be sent explicitly via a mutation

Just like in queries, if the mutation fields returns an object type, you can ask for nested fields. This can be useful for fetching the new state of an object after an update. Let's look at a simple example mutation

**Request**

```
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
```

**Input**

```
{
  "ep": "JEDI",
  "review": {
    "stars": 5,
    "commentary": "This is a great movie!"
  }
}
```

**Response**

```
{
  "data": {
    "createReview": {
      "stars": 5,
      "commentary": "This is a great movie!"
    }
  }
}
```

Note how **createReview** fields returns the **starts** and **commentary** fields of the newly created review. This is especially useful when mutating existing data, for example, when incrementing a field, since we can mutate and query the new value of the field with one request

You might also notice that, in this example, the **review** variable we passed in is not a scalar. It's an _input object type_, a special kind of object type that can be passed in as an argument.

### Multiple fields in mutations

A mutation can contain multiple fields, just like a query. There's one important distinction between queries and mutations, other than the name:

**While query fields are executed in parallel, mutation fields run in series, one after the other**

This means that if we send two **incrementCredits** mutations in one request, the first is guaranteed to finish before the second begins, ensuring that we don't end up with a race condition with ourselves

### Inline Fragments

Like many other type systems, GraphQL schemas include the ability to define interfaces and union types. If you are querying a field that returns an interface or a union type, you will need to use _inline fragments_ to access data on the underlying concrete type. It's easiest to see with an example:

**Request**

```
query HeroForEpisode($ep: Episode!) {
    hero(episode: $ep) {
        name
        ... on Droid {
            primaryFunction
        }
        ... on Human {
            height
        }
    }
}
```

**Input**

```
{
    "ep": "JEDI"
}
```

**Response**

```
{
    "data": {
        "hero": {
            "name": "R2-D2",
            "primaryFunction": "Astromech"
        }
    }
}
```

In this query, the **hero** field returns the type **Character**, which might be either a **Human** or a **Droid** depending on the **episode** argument. In the direct selection, you can only ask for fields that exist on the **Character** interface, such as **name**

To ask for a field on the concrete type, you need to use an _inline fragment_ with a type condition. Because the first fragment is labeled as **... on Droid**, the **primaryFunction** field will only be executed if the **Character** returned from **hero** is of the **Droid** type. Similarly for the **height** field for the **Human** type

Named fragments can also be used in the same way, since a named fragment always has a type attached

### Meta fields

Given that there are some situations where you don't know what type you'll get back from the GraphQL service, you need some way to determine how to handle that data on the client. GraphQL allows you to request **\_\_typename**, a meta field, at any point in a query to get the name of the object type at that point

**Request**

```
  search(text: "an") {
    __typename
    ... on Human {
      name
    }
    ... on Droid {
      name
    }
    ... on Starship {
      name
    }
  }
}
```

**Response**

```
{
  "data": {
    "search": [
      {
        "__typename": "Human",
        "name": "Han Solo"
      },
      {
        "__typename": "Human",
        "name": "Leia Organa"
      },
      {
        "__typename": "Starship",
        "name": "TIE Advanced x1"
      }
    ]
  }
}
```

In the above query, **search** returns a union type that can be one of three options. It would be impossible to tell apart the different types from the client without the **\_\_typename** field

GraphQL services provide a few meta fields, the rest of which are used to expose the Introspection system

## Schemas and Types

### Type system

If you've seen a GraphQL query before, you know that GraphQL query language is basically about selecting fields on objects. So, for example, in the following query:

**Request**

```
{
    hero {
        name
        appearsIn
    }
}
```

**Response**

```
{
    "data": {
        "hero": {
            "name": "R2-D2",
            "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
            ]
        }
    }
}
```

1. We start with a special "root" object
2. We select the **hero** field on that
3. For the object returned by **hero**, we select the **name** and **appearsIn** fields

Because the shape of GraphQL query closely matches the result, you can predict what the query will return without knowing that much about the server. But it's useful to have an exact description of the data we can ask for - what fields can we select? What kinds of objects might they return? What fields are available on those sub-objects? That's where the schema comes in

Every GraphQL service defines a set of types which completely describe the set of possible data you can query on that service. Then, when queries come in, they are validated an executed against the schema

### Type language

GraphQL services can be written in any language. Since we can't rely on a specific programming language syntax like JavaScript, to talk about GraphQL schemas, we'll define our own simple language. We'll use the "GraphQL schema language" - it's similar to the query language, and allows us to talk about GraphQL schemas in a language-agnostic way

### Object types and fields

The most basic components of a GraphQL schema are object types, which just represent a kind of object you can fetch from your service, and what fields it has. In the GraphQL schema language, we might represent it like this:

```
type Character {
    name: String!
    appearsIn: [Episode!]!
}
```

The language is pretty readable, but let's go over it so that we can have a shared vocabulary:

- **Character** is a _GraphQL Object Type_, meaning it's a type with some fields. Most of the types in your schema will be object types
- **name** and **appearsIn** are _fields_ on the **Character** type. That means that **name** and **appearsIn** are the only fields that can appear in any part of a GraphQL query that operates on the **Character** type
- **String** is one of the built-in _scalar_ types - these are types that resolve to a single scalar object, and can't have sub-selections in the query. We'll go over scalar types more later
- **String!** means that the field is _non-nullable_, meaning that the GraphQL service promises to always give you a value when you query this fields. In the type language, we'll represent those with an exclamation mark
- **[Episode!]!** represents an _array_ of **Episode** objects. Since it is also _non-nullable_, you can always expect an array (with zero or more items) when you query the **appearsIn** field. And since **Episode!** is also _non-nullable_, you can always expect every item of the array to be an **Episode** object

### Arguments

Every field on a GraphQL object type can have zero or more arguments, for example the **length** field below:

```
type Starship {
    id: ID!
    name: String!
    length(unit: LengthUnit = METER): Float
}
```

All arguments are named. Unlike languages like JavaScript and Python where functions take a list of ordered arguments, all arguments in GraphQL are passed by name specifically. In this case, the **length** field has on defined argument, **unit**

Arguments can be either required or optional. When an argument is optional, we can define a _default value_ - if the **unit** argument is not passed, it will be set to **METER** by default

### The Query and Mutation types

Most types in your schema will just be normal object types, but there are two types that are special within a schema

```
schema {
    query: Query
    mutation: Mutation
}
```

Every GraphQL service has a **query** type and may or may not have a **mutation** type. These types are the same as a regular object type, but they are special because they define the _entry point_ of every GraphQL query. So if you see a query that looks like:

**Request**

```
query {
    hero {
        name
    }
    droid(id: "2000") {
        name
    }
}
```

**Response**

```
{
    "data": {
        "hero": {
            "name": "R2-D2"
        },
        "droid": {
            "name": "C-3P0"
        }
    }
}
```

That means that the GraphQL service needs to have a **Query** type with **hero** and **droid** fields:

```
type Query {
    hero(episode: Episode): Character
    droid(id: ID!): Droid
}
```

Mutations work in a similar way - you define fields on the **Mutation** type, and those are available as the root mutation fields you can call in your query

It is important to remember that other than the special status of being the "entry point" into the schema, the **Query** and **Mutation** types are the same as any other GraphQL object type, and their fields work exactly the same way

### Scalar types

A GraphQL object type has a name and fields, but at some points those fields have to resolve to some concrete data. That's where the scalar type comes in: they represent the leaves of the query

In the following queyr, the **name** and **appearsIn** fields will resolve to scalar types:

**Request**

```
{
    hero {
        name
        appearsIn
    }
}
```

**Response**

```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ]
    }
  }
}
```

We know this because those fields don't have any sub-fields - they are the leaves of the query

GraphQL comes with a set of default scalar types out of the box:

- **Int**: A signed 32-bit integer
- **Float**: A signed double-precision floating point value
- **String**: A UTF-8 character sequence
- **Boolean**: **true** or **false**
- **ID**: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialized in the same way as a String, however, defining it as an **ID** signifies that it is not intended to be human-readable

In most GraphQL service implementations, there is also a way to specify custom scalar types. For example, we could define a **Date** type:

```
scalar Date
```

Then it's up to our implementation to define how that type should be serialized, deserialized, and validated. For example, you could specify that the **Date** type should always be serialized into an integer timestamp, and your client should know to expect that format for any date fields

### Enumeration types

Also called _Enums_, enumeration types are a special kind of scalar that is restricted to a particular set of allowed values. This allows you to:

1. Validate that any arguments of this type are one of the allowed values
2. Communicate through the type system that a field will always be one of a finite set of values

Here's what an enum definition might look like in the GraphQL schema language

```
enum Episdoe {
    NEWHOPE
    EMPIRE
    JEDI
}
```

This means that wherever we use the type **Episode** in our schema, we expect it to be exactly one of **NEWHOPE**, **EMPIRE**, or **JEDI**

Note that GraphQL service implementations in various languages will have their own language-specific way to deal with enums. In languages that support enums as a first-class citizen, the implementation might take advantage of that; in a language like JavaScript with no enum support, these values might be internally mapped to a set of integers. However, these details don't leak out to the client, which can operate entirely in terms of the string names of the enum values

### Lists and Non-Null

Object types, scalars, and enums are the only kinds of types you can define in GraphQL. But when you use the types in other parts of the schema, or in your query variable declarations, you can apply additional _type modifiers_ that affect validation of those values.

```
type Character {
    name: String!
    appearsIn: [Episode]!
}
```

Here, we're using a **String** type and marking it as _Non-Null_ by adding an exclamation mark **!** after the type name. This means that our server always expects to return a non-null value for this field, and if it ends up getting a null values that will actually trigger a GraphQL execution error, letting the client know that something has gone wrong

The Non-Null type modifier can also be used when defining arguments for a field, which will cause the GraphQL server to return a validation error if a null value is passed as that argument, whether in the GraphQL string or in the variables

**Request**

```
query DroidById($id: ID!) {
  droid(id: $id) {
    name
  }
}
```

**Input**

```
{
  "id": null
}
```

**Response**

```
{
  "errors": [
    {
      "message": "Variable \"$id\" of non-null type \"ID!\" must not be null.",
      "locations": [
        {
          "line": 1,
          "column": 17
        }
      ]
    }
  ]
}
```

Lists work in a similar way. We can use a type modifier to mark a type as a **List**, which indicates that this field will return an array of that type. In the schema language, this is denoted by wrapping the type in square brackets, **[** and **]**. It works the same for arguments, where the validation step will expect an array for that value

The Non-Null and List modifiers can be combined. For example, you can have a List of Non-Null Strings:

```
myField: [String!]
```

This means that the _list itself_ can be null, but it can't have any null members. For example, in JSON:

```
myField: null // valid
myField: [] // valid
myField: ['a', 'b'] // valid
myField: ['a', null, 'b'] // error
```

Now, let's say we defined a Non-Null List of Strings:

```
myField: [String]!
```

This means that the list itself cannot be null, but it can contain null values:

```
myField: null // error
myField: [] // valid
myField: ['a', 'b'] // valid
myField: ['a', null, 'b'] // valid
```

You can arbitrarily nest any number of Non-Null and List modifiers, according to your needs

### Interfaces

Like many type systems, GraphQL supports interfaces. An _Interface_ is an abstract type that includes a certain set of fields that a type must include to implement the interface

For example, you could have an interface _Character_ that represents any character in the Star Wars trilogy:

```
interface Character {
    id: ID!
    name: String!
    friends: [Character]
    appearsIn: [Episode]!
}
```

This means that any type that _implements_ **Character** needs to have these exact fields, with these arguments and return types

For example, here are some types that might implement **Character**:

```
type Human implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  starships: [Starship]
  totalCredits: Int
}

type Droid implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  primaryFunction: String
}
```

You can see that both of these types have all of the fields from the **Character** interface, but also bring in extra fields, **totalCredits, starships, and primaryFunction**, that are specific to that particular type of character

Interfaces are useful when you want to return an object or set of objects, but those might be of several different types

For exampmle, note that the following query produces an error:

**Request**

```
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
    name
    primaryFunction
  }
}
```

**Input**

```
{
  "ep": "JEDI"
}
```

**Response**

```
{
  "errors": [
    {
      "message": "Cannot query field \"primaryFunction\" on type \"Character\". Did you mean to use an inline fragment on \"Droid\"?",
      "locations": [
        {
          "line": 4,
          "column": 5
        }
      ]
    }
  ]
}
```

The **hero** field returns the type **Character**, which means it might be either a **Human** or a **Droid** depending on the **episode** argument. In the query above, you can only ask for fields that exist on the **Character** interface, which doesn't include **primaryFunction**

To ask for a field on a specific object type, you need to use an inline fragment

**Request**

```
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
    name
    ... on Droid {
      primaryFunction
    }
  }
}
```

**Input**

```
{
  "ep": "JEDI"
}
```

**Response**

```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "primaryFunction": "Astromech"
    }
  }
}
```

### Union types

Union types are very similar to interfaces, but they don't get to specify any common fields between the types

```
union SearchResult = Human | Droid | Starship
```

Wherever we return a **SearchResult** type in our schema, we might get a **Human**, a **Droid**, or a **Starship**. Note that members of a union type need to be concrete object types: you can't create a union type out of interfaces or other unions

In this case, if you query a field that returns the **SearchResult** union type, you need to use an inline fragment to be able to query any fields at all:

**Request**

```
{
  search(text: "an") {
    __typename
    ... on Human {
      name
      height
    }
    ... on Droid {
      name
      primaryFunction
    }
    ... on Starship {
      name
      length
    }
  }
}
```

**Response**

```
{
  "data": {
    "search": [
      {
        "__typename": "Human",
        "name": "Han Solo",
        "height": 1.8
      },
      {
        "__typename": "Human",
        "name": "Leia Organa",
        "height": 1.5
      },
      {
        "__typename": "Starship",
        "name": "TIE Advanced x1",
        "length": 9.2
      }
    ]
  }
}
```

The **\_\_typename** field resolves to a **String**
which lets you differentiate different data types from each other on the client

Also, in this case, since **Human** and **Droid** share a common interface **(Character)**, you can query their common fields in one place rather than having to repeat the same fields across multiple types

**Request**

```
{
  search(text: "an") {
    __typename
    ... on Character {
      name
    }
    ... on Human {
      height
    }
    ... on Droid {
      primaryFunction
    }
    ... on Starship {
      name
      length
    }
  }
}
```

Note that **name** is still specified on **Starship** because otherwise it wouldn't show up in the results given that **Starship** is not a **Character!**

### Input types

So far, we've only talked about passing scalar values, like enums or strings, as arguments into a field. But you can also easily pass complex objects. This is particularly valuable in the case of mutations, where you might want to pass in a whole object to be created. In the GraphQL schema language, input types look exactly the same as regular object types, but with the keyword **input** instead of **type**:

```
input ReviewInput {
    stars: Int!
    commentary: String
}
```

Here is how you could use the input object type in a mutation:

**Request**

```
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
```

**Input**

```
{
  "ep": "JEDI",
  "review": {
    "stars": 5,
    "commentary": "This is a great movie!"
  }
}
```

**Response**

```
{
  "data": {
    "createReview": {
      "stars": 5,
      "commentary": "This is a great movie!"
    }
  }
}
```

The fields on an input object type can themselves refer to input object types, but you can't mix input and output types in your schema. Input object types also can't have arguments on their fields

# Validation

By using the type system, it can be predetermined whether a GraphQL query is valid or not. This allows servers and clients to effectively inform developers when an invalid query has been created, without having to rely on runtime checks

For our Star Wars example, the file given below contains a number of queries demonstrating various invalidities, and is a test file that can be run to exercise the reference implementations validator

To start, let's take a complex valid query. This is a nested query, similar to an example from the previous section, but with the duplicated fields factored out into a fragment

**Request**

```
{
  hero {
    ...NameAndAppearances
    friends {
      ...NameAndAppearances
      friends {
        ...NameAndAppearances
      }
    }
  }
}

fragment NameAndAppearances on Character {
  name
  appearsIn
}
```

**Response**

```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ],
      "friends": [
        {
          "name": "Luke Skywalker",
          "appearsIn": [
            "NEWHOPE",
            "EMPIRE",
            "JEDI"
          ],
          "friends": [
            {
              "name": "Han Solo",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            },
          ]
        }
      ]
    }
  }
}
```

And this query is valid. Let's take a look at some invalid queries

A fragment cannot refer to itself or create a cycle, as this could result in an unbounded result. Here's the same query but without the explicit three levels of nesting

**Request**

```
{
  hero {
    ...NameAndAppearancesAndFriends
  }
}

fragment NameAndAppearancesAndFriends on Character {
  name
  appearsIn
  friends {
    ...NameAndAppearancesAndFriends
  }
}
```

**Response**

```
{
  "errors": [
    {
      "message": "Cannot spread fragment \"NameAndAppearancesAndFriends\" within itself.",
      "locations": [
        {
          "line": 11,
          "column": 5
        }
      ]
    }
  ]
}
```

When we query for fields, we have to query for a field that exists on the given type. So as **hero** returns a **Character**, we have to query for a field on **Character**. That type does not have a **favoriteSpaceship** field, so this query is invalid:

**Request**

```
# INVALID: favoriteSpaceship does not exist on Character
{
  hero {
    favoriteSpaceship
  }
}
```

**Response**

```
{
  "errors": [
    {
      "message": "Cannot query field \"favoriteSpaceship\" on type \"Character\".",
      "locations": [
        {
          "line": 4,
          "column": 5
        }
      ]
    }
  ]
}
```

Whenever we query for a field and it returns something other than a scalar or an enum, we need to specify what data we want to get back from the field. Hero returns a **Character**, and we've been requesting fields like **name** and **appearsIn** on it; if we omit that, the query will not be valid:

**Request**

```
# INVALID: hero is not a scalar, so fields are needed
{
  hero
}
```

**Response**

```
{
  "errors": [
    {
      "message": "Field \"hero\" of type \"Character\" must have a selection of subfields. Did you mean \"hero { ... }\"?",
      "locations": [
        {
          "line": 3,
          "column": 3
        }
      ]
    }
  ]
}
```

Similarly, if a field is a scalar, it doesn't make sense to query for additional fields on it, and doing so will make the query invalid:

**Request**

```
# INVALID: name is a scalar, so fields are not permitted
{
  hero {
    name {
      firstCharacterOfName
    }
  }
}
```

**Response**

```
{
  "errors": [
    {
      "message": "Field \"name\" must not have a selection since type \"String!\" has no subfields.",
      "locations": [
        {
          "line": 4,
          "column": 10
        }
      ]
    }
  ]
}
```

Earlier, it was noted that a query can only query for fields on the type in questions; when we query for **hero** which returns a **Character**, we can only query for fields that exist on **Character**. What happens if we want to query for R2-D2s primary function, though?

**Request**

```
# INVALID: primaryFunction does not exist on Character
{
  hero {
    name
    primaryFunction
  }
}
```

**Response**

```
{
  "errors": [
    {
      "message": "Cannot query field \"primaryFunction\" on type \"Character\". Did you mean to use an inline fragment on \"Droid\"?",
      "locations": [
        {
          "line": 5,
          "column": 5
        }
      ]
    }
  ]
}
```

That query is invalid, because **primaryFunction** is not a field on **Character**. We want some way of indicating that we wish to fetch **primaryFunction** if the **Character** is a **Droid**, and to ignore that field otherwise. We can use the fragments we introduced earlier to do this. By setting up fragment defined on **Droid** and including it, we ensure that we ony query for **primaryFunction** where it is defined:

**Request**

```
{
  hero {
    name
    ...DroidFields
  }
}

fragment DroidFields on Droid {
  primaryFunction
}
```

**Response**

```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "primaryFunction": "Astromech"
    }
  }
}
```

This query is valid, but it's a bit verbose; named fragments were valuable above when we used them multiple times, but we're only using this one once. Instead of using a named fragment, we can use an inline fragment; this still allows us to indicate the type we are querying on, but without naming a separate fragment

**Request**

```
{
  hero {
    name
    ... on Droid {
      primaryFunction
    }
  }
}
```

**Response**

```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "primaryFunction": "Astromech"
    }
  }
}
```

This has just scratched the surface of the validation system; there are a number of validation rules in place to ensure that a GraphQL query is semantically meaningful. The specification goes into more detail about this topic in the "Validation" section, and the [validation](https://github.com/graphql/graphql-js/tree/main/src/validation) directory in GraphQL.js contains code implementing a specification-compliant GraphQL validator

# Execution

After being validated, a GraphQL query is executed by a GraphQL server which returns a result that mirrors the shape of the requested query, typically as JSON

GraphQL cannot execute a query without a type system, let's use an example type system to illustrate executing a query. This is a part of the same type system used throughout the examples in these articles

```
type Query {
  human(id: ID!): Human
}

type Human {
  name: String
  appearsIn: [Episode]
  starships: [Starship]
}

enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}

type Starship {
  name: String
}
```

In order to describe what happens when a query is executed, let's use an example to walk through

**Request**

```
{
  human(id: 1002) {
    name
    appearsIn
    starships {
      name
    }
  }
}
```

**Response**

```
{
  "data": {
    "human": {
      "name": "Han Solo",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ],
      "starships": [
        {
          "name": "Millenium Falcon"
        },
        {
          "name": "Imperial shuttle"
        }
      ]
    }
  }
}
```

You can think of each field in a GraphQL query as a function or method of the previous type which returns the next type. In fact, this is exactly how GraphQL works. Each field on each type is backed by a function called the _resolver_ which is provided by the GraphQL server developer. When a field is executed, the corresponding _resolver_ is called to produce the next value

If a field produces a scalar value like a string or number, then the execution completes. However, if a field produces an object value then the query will contain another selection of fields which apply to that object. This continues until scalar values are reached. GraphQL queries always end at scalar values

## Root fields and resolvers

At the top level of every GraphQL server is a type that represents all of the possible entry points into the GraphQL API, it's often called the _Root_ type or the _Query_ type.

In this example, our Query type provides a field called **human** which accepts the argument **id**. The resolver function for this field likely accesses a database and then constructs and returns a **Human** object.

```
Query: {
  human(obj, args, context, info) {
    return context.db.loadHumanByID(args.id).then(
      userData => new Human(userData)
    )
  }
}
```

This example is written in JavaScript, however GraphQL servers can be built in many different languages. A resolver function receives four arguments

- **obj** The previous object, which for a field on the root Query type is often not used
- **args** The arguments provided to the field in the GraphQL query
- **context** A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database
- **info** A value which holds field-specific information relevant to the current query as well as the schema details, also refer to type GraphQLResolveInfo for more details

## Asynchronous resolvers

Let's take a closer look at what's happening in this resolver function.

```
human(obj, args, context, info) {
  return context.db.loadHumanByID(args.id).then(
    userData => new Human(userData)
  )
}
```

The **context** is used to provide access to a database which is used to load the data for a user by the **id** provided as an argument in the GraphQL query. Since loading from a database is an asynchronous operation, this returns a **Promise**. In JavaScript, Promises are used to work with asynchronous values, but the same concept exists in many languages, often called _Futures, Tasks or Deferred_. When the database returns, we can construct and return a new **Human** object.

Notice that while the resolver function needs to be aware of Promises, the GraphQL query does not. It simply expects the **human** field to return something which it can then ask the **name** of. During execution, GraphQL will wait for Promises, Futures, and Tasks to complete before continuing and will do so with optimal concurrency.

## Trivial resolvers

Now that a **Human** object is available, GraphQL execution can continue with the fields requested on it.

```
Human: {
  name(obj, args, context, info) {
    return obj.name
  }
}
```

A GraphQL server is powered by a type system which is used to determine what to do next. Even before the **human** field returns anything, GraphQL knows that the next step will be to resolve fields on the **Human** type since the type system tells it that the **human** field will return a **Human**.

Resolving the name in this case is very straight-forward. The name resolver function is called and the **obj** argument is the **new Human** object returned from the previous field. In this case, we expect that Human object to have a **name** property which we can read and return directly.

In fact, many GraphQL libraries will let you omit resolvers this simple and will just assume that if a resolver isn't provided for a field, that a property of the same name should be read and returned.

## Scalar coercion

While the **name** field is being resolved, the **appearsIn** and **starships** fields can be resolved concurrently. The **appearsIn** field could also have a trivial resolver, but let's take a closer look:

```
Human: {
  appearsIn(obj) {
    return obj.appearsIn // returns [ 4, 5, 6 ]
  }
}
```

Notice that our type system claims **appearsIn** will return Enum values with known values, however this function is returning numbers! Indeed if we look up at the result we'll see that the appropriate Enum values are being returned. What's going on?

This is an example of scalar coercion. The type system knows what to expect and will convert the values returned by a resolver function into something that upholds the API contract. In this case, there may be an Enum defined on our server which uses numbers like **4**, **5**, and **6** internally, but represents them as Enum values in the GraphQL type system.

## List resolvers

We've already seen a bit of what happends when a field returns a list of things with the **appearsIn** field above. It returned a _list_ of enum values, and since that's what the type system expected, each item in the list was coerced to the appropriate enum value. What happens when the **starships** field is resolved?

```
Human: {
  starships(obj, args, context, info) {
    return obj.starshipIDs.map(
      id => context.db.loadStarshipByID(id).then(
        shipData => new Starship(shipData)
      )
    )
  }
}
```

The resolver for this field is not just returning a Promise, it's returning a _list_ of Promises. The **Human** object had a list of ids of the **Starships** they piloted, but we need to go load all of those ids to get real Starship objects

GraphQL will wait for all of these Promises concurrently before continuing, and when left with a list of objects, it will concurrently continue yet again to load the **name** field on each of these items

## Producing the result

As each field is resolved, the resulting value is placed into a key-value map with the field name (or alias) as the key and the resolved value as the value. This continues from the bottom leaf fields of the query all the way back up to the original field on the root Query type. Collectively these produce a structure that mirrors the original query which can then be sent (typically as JSON) to the client which requested it.

Let's take one last look at the original query to see how all these resolving functions produce a result:

**Request**

```
{
  human(id: 1002) {
    name
    appearsIn
    starships {
      name
    }
  }
}
```

**Response**

```
{
  "data": {
    "human": {
      "name": "Han Solo",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ],
      "starships": [
        {
          "name": "Millenium Falcon"
        },
        {
          "name": "Imperial shuttle"
        }
      ]
    }
  }
}
```

# Introspection
