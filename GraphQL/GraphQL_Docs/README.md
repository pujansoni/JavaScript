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

It's often useful to ask a GraphQL schema for information about what queries it supports. GraphQL allows us to do so using the introspection system

We designed the type system, so we know what types are available, but if we didn't we can ask GraphQL, by querying the **\_\_schema** field, always available on the root type of a Query. Let's do so now, and ask what types are available

**Request**

```
{
  __schema {
    types {
      name
    }
  }
}
```

**Response**

```
{
  "data": {
    "__schema": {
      "types": [
        {
          "name": "Query"
        },
        {
          "name": "String"
        },
        {
          "name": "ID"
        },
        {
          "name": "Mutation"
        },
        {
          "name": "Episode"
        },
        {
          "name": "Character"
        },
        {
          "name": "Int"
        },
        {
          "name": "LengthUnit"
        },
        {
          "name": "Human"
        },
        {
          "name": "Float"
        },
        {
          "name": "Droid"
        },
        {
          "name": "FriendsConnection"
        },
        {
          "name": "FriendsEdge"
        },
        {
          "name": "PageInfo"
        },
        {
          "name": "Boolean"
        },
        {
          "name": "Review"
        },
        {
          "name": "ReviewInput"
        },
        {
          "name": "Starship"
        },
        {
          "name": "SearchResult"
        },
        {
          "name": "__Schema"
        },
        {
          "name": "__Type"
        },
        {
          "name": "__TypeKind"
        },
        {
          "name": "__Field"
        },
        {
          "name": "__InputValue"
        },
        {
          "name": "__EnumValue"
        },
        {
          "name": "__Directive"
        },
        {
          "name": "__DirectiveLocation"
        }
      ]
    }
  }
}
```

- **Query, Character, Human, Episode, Droid** - These are the ones that we defined in our type system
- **String, Boolean** - These are built-in scalars that the type system provided
- **\_Schema, **Type, **TypeKind, **Field, **InputValue, **EnumValue, **Directive** - These all are preceded with a double underscore, indicating that they are part of the introspection system

Now, let's try and figure out a good place to start exploring what queries are available. When we designed our type system, we specified what type all queries would start at; let's ask the introspection system about that

**Request**

```
{
  __schema {
    queryType {
      name
    }
  }
}
```

**Response**

```
  "data": {
    "__schema": {
      "queryType": {
        "name": "Query"
      }
    }
  }
}
```

And that matches what we said in the type system section, that the **Query** type is where we will start. Note that the naming here was just by convention; we could have named our **Query** type anything else, and it still would have been returned here had we specified it was the starting type for queries. Naming it **Query**, though is a useful convention

It is often useful to examine one specific type. Let's take a look at the **Droid** type:

**Request**

```
{
  __type(name: "Droid") {
    name
  }
}
```

**Response**

```
{
  "data": {
    "__type": {
      "name": "Droid"
    }
  }
}
```

What if we want to know more about Droid, though? For example, is it an interface or an object?

**Request**

```
{
  __type(name: "Droid") {
    name
    kind
  }
}
```

**Response**

```
{
  "data": {
    "__type": {
      "name": "Droid",
      "kind": "OBJECT"
    }
  }
}
```

**kind** returns a **\_\_TypeKind** enum, one of whose values is **OBJECT**. If we asked about **Character** instead we'd find that it is an interface

**Request**

```
{
  __type(name: "Character") {
    name
    kind
  }
}
```

**Response**

```
{
  "data": {
    "__type": {
      "name": "Character",
      "kind": "INTERFACE"
    }
  }
}
```

It's useful for an object to know what fields are available, so let's ask the introspection system about **Droid**:

**Request**

```
{
  __type(name: "Droid") {
    name
    fields {
      name
      type {
        name
        kind
      }
    }
  }
}
```

**Response**

```
{
  "data": {
    "__type": {
      "name": "Droid",
      "fields": [
        {
          "name": "id",
          "type": {
            "name": null,
            "kind": "NON_NULL"
          }
        },
        {
          "name": "name",
          "type": {
            "name": null,
            "kind": "NON_NULL"
          }
        },
        {
          "name": "friends",
          "type": {
            "name": null,
            "kind": "LIST"
          }
        },
        {
          "name": "friendsConnection",
          "type": {
            "name": null,
            "kind": "NON_NULL"
          }
        },
        {
          "name": "appearsIn",
          "type": {
            "name": null,
            "kind": "NON_NULL"
          }
        },
        {
          "name": "primaryFunction",
          "type": {
            "name": "String",
            "kind": "SCALAR"
          }
        }
      ]
    }
  }
}
```

Those are our fields that we defined on **Droid**

**id** looks a bit weird there, it has no name for the type. That's because it's a "wrapper** type of kind **NON_NULL**. If we queried for **ofType** on that field's type, we would find the **ID\*\* type there, telling us that this is a non-null ID

Similarly, both **friends** and **appearsIn** have non name, since they are the **LIST** wrapper type. We can query for **ofType** on those types, which will tell us what these are lists of

**Request**

```
{
  __type(name: "Droid") {
    name
    fields {
      name
      type {
        name
        kind
        ofType {
          name
          kind
        }
      }
    }
  }
}
```

**Response**

```
{
  "data": {
    "__type": {
      "name": "Droid",
      "fields": [
        {
          "name": "id",
          "type": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "ID",
              "kind": "SCALAR"
            }
          }
        },
        {
          "name": "name",
          "type": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "String",
              "kind": "SCALAR"
            }
          }
        },
        {
          "name": "friends",
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "Character",
              "kind": "INTERFACE"
            }
          }
        },
        {
          "name": "friendsConnection",
          "type": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "FriendsConnection",
              "kind": "OBJECT"
            }
          }
        },
        {
          "name": "appearsIn",
          "type": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": null,
              "kind": "LIST"
            }
          }
        },
        {
          "name": "primaryFunction",
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      ]
    }
  }
}
```

Let's end with a feature of the introspection system particularly useful for tooling; let's ask the system for documentation

**Request**

```
{
  __type(name: "Droid") {
    name
    description
  }
}
```

**Response**

```
{
  "data": {
    "__type": {
      "name": "Droid",
      "description": null
    }
  }
}
```

So we can access the documentation about the type system using introspection and create documentation browsers, or rich IDE experiences

This has just scratched the surface of the introspection syste; we can query for enum values, what interfaces a type implements and more. We can even introspect on the introspection system itself. The specification goes into more detail about this topic

# GraphQL Best Practices

The GraphQL specification is intentionally silent on a handful of important issues facing APIs such as dealing with the network, authorization, and pagination. This doesn't mean that there aren't solutions for these issues when using GraphQL, just that they're outside the description about what GraphQL is and instead just common practice.

The articles in this section should not be taken as gospel, and in some cases may rightfully be ignored in favor of some other approach. Some articles introduce some of the philosophy developed within Facebook around designing and deploying GraphQL services, while others are more tactical suggestions for solving common problems like serving over HTTP and performing authorization.

Following are brief descriptions of some of the more common best practices and opinionated stances held by GraphQL services, however each article in this section will go into more depth on these and other topics.

## HTTP

GraphQL is typically served over HTTP via a single endpoint which expresses the full set of capabilities of the service. This is in contrast to REST APIs which expose a suite of URLs each of which expose a single resource. While GraphQL could be used alongside a suite of resource URLs, this can make it harder to use with tools like GraphiQL.

## JSON (with GZIP)

GraphQL services typically respond using JSON, however the GraphQL spec does not require it. JSON may seem like an odd choice for an API layer promising better network performance, however because it is mostly text, it compresses exceptionally well with GZIP.

It's encouraged that any production GraphQL services enable GZIP and encourage their clients to send the header:

```
Accept-Encoding: gzip
```

JSON is also very familiar to client and API developers, and is easy to read and debug. In fact, the GraphQL syntax is partly inspired by the JSON syntax.

## Versioning

While there's nothing that prevents a GraphQL service from being versioned just like any other REST API, GraphQL takes a strong opinion on avoiding versioning by providing the tools for the continuous evolution of a GraphQL schema.

Why do most APIs version? When there's limited control over the data that's returned from an API endpoint, _any change_ can be considered a breaking change, and breaking changes require a new version. If adding new features to an API requires a new version, then a tradeoff emerges between releasing often and having many incremental versions versus the understandability and maintainability of the API.

In contrast, GraphQL only returns the data that's explicitly requested, so new capabilities can be added via new types and new fields on those types without creating a breaking change. This has led to a common practice of always avoiding breaking changes and serving a versionless API.

## Nullability

Most type systems which recognise **null** provide both the common type and the _nullable_ version of that type, whereby default types do not include **null** unless explicitly declared. However, in a GraphQL type system, every field is _nullable_ by default. This is because there are many things that can go awry in a networked service backed by databases and other services. A database could go down, an asynchronous action could fail, an exception could be thrown. Beyond simply system failures, authorization can often be granular, where individual fields within a request can have different authorization rules.

By defaulting every field to _nullable_, any of these reasons may result in just that field returned **null** rather than having a complete failure for the request. Instead, GraphQL provides **non-null** variants of types which make a guarantee to clients that if requested, the field will never return **null**. Instead, if an error occurs, the previous parent field will be **null** instead.

When designing a GraphQL schema, it's important to keep in mind all the problems that could go wrong and if **null** is an appropriate value for a failed field. Typically it is, but occasionally, it's not. In those cases, use non-null types to make that guarantee.

## Pagination

The GraphQL type system allows for some fields to return **lists of values**, but leaves the pagination of longer lists of values up to the API designer. There are a wide range of possible API designs for pagination, each of which has pros and cons.

Typically fields that could return long lists accept arguments **first** and **after** to allow for specifying a specific region of a list, where **after** is a unique identifier of each of the values in the list.

Ultimately designing APIs with feature-rich pagination led to a best practice pattern called **Connections**. Some client tools for GraphQL, such as **Relay**, know about the Connections pattern and can automatically provide support for client-side pagination when a GraphQL API employs this pattern.

## Server-side Batching & Caching

GraphQL is designed in a way that allows you to write clean code on the server, where every field on every type has a focused single-purpose function for resolving that value. However without additional consideration, a naive GraphQL service could be very **chatty** or repeatedly load data from your databases.

This is commonly solved by a batching technique, where multiple requests for data from a backend are collected over a short period of time and then dispatched in a single request to an underlying database or microservice by using a tool like Facebook's DataLoader.

# Thinking in Graphs

## It's Graphs All the Way Down

> With GraphQL, you model your business domain as a graph

Graphs are powerful tools for modeling many real-world phenomena because they resemble our natural mental models and verbal descriptions of the underlying process. With GraphQL, you model your business domain as a graph by defining a schema; within your schema, you define different types of nodes and how they connect/relate to one another. On the client, this creates a pattern similar to Object-Oriented Programming: types that reference other types. On the server, since GraphQL only defines the interface, you have the freedom to use it with any backend (new/legacy)

## Shared Language

> Naming things is hard but important part of building intuitive APIs

Think of your GraphQL schema as an expressive shared language for your team and your users. To build a good schema, examine the everyday language you use to describe your business. For example, let's try to describe an email app in plain English:

- A user can have multpile email accounts
- Each email account has an address, inbox, drafts, deleted items, and sent items
- Each email has a sender, receive date, subject, and body
- Users cannot send an email without a recipient address

Naming things is a hard but important part of building intuitive APIs, so take time to carefully think about what makes sense for your problem domain and users. Your team should develop a shared understanding and consensus of these business domain rules because you will need to choose intuitive, durable names for nodes and relationships in the GraphQL schema. Try to imagine some of the queries you will want to execute:

Fetch the number of unread emails in my inbox for all my accounts

```
{
  accounts {
    inbox {
      unreadEmailCount
    }
  }
}
```

Fetch the "preview info" for the first 20 drafts in the main account

```
{
  mainAccount {
    drafts(first: 20) {
      ...previewInfo
    }
  }
}

fragment previewInfo on Email {
  subject
  bodyPreviewSentence
}
```

## Business Logic Layer

> Your business logic layer should act as the single source of truth for enforcing business domain rules

Where should you define the actual business logic? Where should you perform validation and authorization checks? The answer, inside a dedicated business logic layer. Your business logic layer should act as the single source of truth for enforcing business domain rules

![Business Logic Layer](./resources/ex_1.png)

In the diagram above, all entry points (REST, GraphQL, and RPC) into the system will be processed with the same validation, authorization, and error handling rules

## Working with Legacy Data

> Prefer building a GraphQL schema that describes how clients use the data, rather than mirroring the legacy database schema

Sometimes, you will find yourself working with legacy data sources that do not perfectly reflect how clients consume the data. In these cases, prefer building a GraphQL schema that describes how clients use the data, rather than mirroring the legacy database schema

Build your GraphQL schema to express "how" rather than "what". Then you can improve your implementation details without breaking the interface with older clients

## One Step at a time

> Get validation and feedback more frequently

Don't try to model your entire busindess domain in one sitting. Rather, build only the part of the schema that you need for one scenario at at time. By gradually expanding the schema, you will get validation and feedback more frequently to steer you toward building the right solution

# Serving over HTTP

HTTP is the most common choice for client-server protocol when using GraphQL because of its ubiquity. Here are some guidelines for setting up a GraphQL server to operate over HTTP

## Web Request Pipeline

Most modern web frameworks use a pipeline model where requests are passed through a stack of middleware (AKA filters/plugin). As the request flows through the pipeline, it can be inspected, transformed, modified, or terminated with a response. GraphQL should be placed after all authentication middleware, so that you have access to the same session and user information you would in your HTTP endpoint handlers

## URIs, Routes

HTTP is commonly associated with REST, which uses "resources" as its core concept. In contrast, GraphQL's conceptual model is an entity graph. As a result, entities in GraphQL are not identified by URLs. Instead, a GraphQL server operates on a single URL/endpoint, usually **/graphql**, and all GraphQL requests for a given service should be directed at this endpoint

## HTTP Methods, Headers, and Body

Your GraphQL HTTP server should handle the HTTP GET and POST methods

### GET request

When receiving an HTTP GET request, the GraphQL query should be specified in the "query" query string. For example, if we wanted to execute the following GraphQL query

```
{
  me {
    name
  }
}
```

This request could be sent via an HTTP GET like so:

```
http://myapi/graphql?query={me{name}}
```

Query variables can be sent as a JSON-encoded string in an additional query parameter called **variables**. If the query contains several named operations, an **operationName** query parameter can be used to control which one should be executed

## POST request

A standarad GraphQL POST request should use the **application/json** content type, and include a JSON-encoded body of the following form:

```
{
  "query": "...",
  "operationName": "...",
  "variables": { "myVariable": "someValue", ... }
}
```

**operationName** and **variables** are optional fields. **operationName** is only required if multiple operations are present in the query

In addition to the above, we recommend supporting two additional cases:

- If the "query" query string parameter is present (as in the GET example above), it should be parsed and handled in the same way as the HTTP GET case
- If the "application/graphql" Content-Type header is present, treat the HTTP POST body contents as the GraphQL query string

## Response

Regardless of the method by which the query and variables were sent, the response should be returned in the body of the request in JSON format. As mentioned in the spec, a query might result in some data and some errors, and those should be returned in a JSON object of the form:

```
{
  "data": { ... },
  "errors": [ ... ]
}
```

If there were no errors returned, the **"errors"** field should not be present on the response. If no data is returned, according to the GraphQL spec, the **"data"** field should only be included if no errors occurred during execution

## GraphiQL

GraphiQL is useful during testing and development but should be disabled in production by default. If you are using express-graphql, you can toggle it based on the NODE_ENV environment variable:

```
app.use('/graphql', graphqlHTTP({
  schema: MySessionAwareGraphQLSchema,
  graphiql: process.env.NODE_ENV === 'development',
}));
```

# Authorization

> Delegate authorization logic to the business logic layer

Authorization is a type of business logic that describes whether a given user/session/context has permission to perform an action or see a piece of data. For example:

**_Only authors can see their drafts_**

Enforcing this kind of behavior should happen in the business logic layer. It is tempting to place authorziation logic in the GraphQL layer like so:

```
var postType = new GraphQLObjectType({
  name: ???Post???,
  fields: {
    body: {
      type: GraphQLString,
      resolve: (post, args, context, { rootValue }) => {
        // return the post body only if the user is the post's author
        if (context.user && (context.user.id === post.authorId)) {
          return post.body;
        }
        return null;
      }
    }
  }
});
```

Notice that we define "author owns a post" by checking whether the post's **authorId** field equals the current user's **id**. Can you spot the problem? We would need to duplicate this ccode for each entry point into the service. Then if the authorization logic is not kept perfectly in sync, users could see different data depending on which API they use. Yikes! We can avoid that by having a single source of truth for authorization

Defining authorization logic inside the resolver is fine when learning GraphQL or prototyping. However, for a production codebase, delegate authorization logic to the business logic layer. Here's an example:

```
//Authorization logic lives inside postRepository
var postRepository = require('postRepository');

var postType = new GraphQLObjectType({
  name: ???Post???,
  fields: {
    body: {
      type: GraphQLString,
      resolve: (post, args, context, { rootValue }) => {
        return postRepository.getBody(context.user, post);
      }
    }
  }
});
```

In the example above, we see that the business logic layer requires the caller to provide a user object. If you are using GraphQL.js, the User object should be populated on the **context** argument or **rootValue** in the fourth argument of the resolver

It is recommended to pass a fully-hydrated User object instead of an opaque token or API key to your business logic layer. This way, we can handle the distinct concerns of authentication and authorization in different stages of the request processing pipeline

# Pagination

> Different pagination models enable different client capabilities

A common use case in GraphQL is traversing the relationship between sets of objects. There are a number of different ways that these relationships can be exposed in GraphQL, giving a varying set of capabilities to the client developer

## Plurals

The simplest way to expose a connection between objects is with a field that returns a plural type. For example, if we wanted to get a list of R2-D2's friends, we could just ask for all of them:

```
{
  hero {
    name
    friends {
      name
    }
  }
}

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

## Slicing

Quickly, though, we realize that there are additional behaviors a client might want. A client might want to be able to specify how many friends they want to fetch; maybe they only want the first two. So we'd want to expose something like:

```
{
  hero {
    name
    friends(first:2) {
      name
    }
  }
}
```

But if we just fetched the first two, we might want to paginate through the list as well; once the client fetches the first two friends, they might want to send a second request to ask for the next two friends. How can we enable that behavior?

## Pagination and Edges

There are a number of ways we could do pagination:

- We could do something like **friends(first:2 offset:2)** to ask for the next two in the list
- We could do something like **friends(first:2 after: $friendId)**, to ask for the next two after the last friend we fetched
- We could do something like **friends(first:2 after: $friendCursor)**, where we get a cursor from the last item and use that to paginate

In general, we've found that **cursor-based pagination** is the most powerful of those designed. Especially, if the cursors are opaque, either offset of ID-based pagination can be implemented using cursor-based pagination (by making the cursor the offset or the ID), and using cursors gives additional flexibility if the pagination model changes in the future. As a reminder, that the cursors are opaque and that their format should not be relied upon, we suggest base64 encoding them

That leads us to a problem; though; how do we get the cursor from the object? We wouldn't want cursor to live on the **User** type; it's a property of the connection, not of the object. So we might want to introduce a new layer of indirection; our **friends** field should give us a list of edges, and an edge has both a cursor and the underlying node

```
{
  hero {
    name
    friends(first:2) {
      edges {
        node {
          name
        }
        cursor
      }
    }
  }
}
```

The concept of an edge also proves useful if there is information that is specific to the edge, rather than to one of the objects. For example, if we wanted to expose "friendship time" in the API, having it live on the edge is a natural place to put it

## End-of-list, counts, and Connections

Now we have the ability to paginate through the connections using cursors, but how do we know when we reach the end of the connection? We have to keep querying until we get an empty list back, but we'd really like for the connection to tell us when we've reached the end so we don't need that additional request. Similarly, what if we want to know additional information about the connection itself; for example, how many total friends does R2-D2 have?

To solve both of these problems, our **friends** field can return a connection object. The connection object will then have a field for the edges, as well as other information (like total count and information about whether a next page exists). So our final query might look more like:

```
{
  hero {
    name
    friends(first:2) {
      totalCount
      edges {
        node {
          name
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Note that we also might include **endCursor** and **startCursor** in this **PageInfo** object. This way, if we don't need any of the additional information that the edge contains, we don't need to query for the edges at all, since we got the cursors needed for pagination from **pageInfo**. This leads to a potential usability improvement for connections; instead of just exposing the **edges** list, we could also expose a dedicated list of just the nodes, to avoid a layer of indirection

## Complete Connection Model

Clearly, this is more complex than our original design of just having a plural. But by adopting the design, we've unlocked a number of capabilities for the client:

- The ability to paginate through the list
- The ability to ask for information about the connection itself, like **totalCount** or **pageInfo**
- The ability to ask for information about the edge itself, like **cursor** or **friendshipTime**
- The ability to change how our backend does pagination, since the user just uses opaque cursors

To see this in action, there's an additional field in the example schema, called **friendsConnection**, that exposes all of these concepts. You can check it out in the example query. Try removing the **after** parameter to **friendsConnection** to see how the pagination will be affected. Also, try replacing the **edges** field with the helper **friends** field on the connection, which lets you get directly to the list of friends without the additional edge layer of indirection, when that's appropriate for clients

```
{
  hero {
    name
    friendsConnection(first:2 after:"Y3Vyc29yMQ==") {
      totalCount
      edges {
        node {
          name
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friendsConnection": {
        "totalCount": 3,
        "edges": [
          {
            "node": {
              "name": "Han Solo"
            },
            "cursor": "Y3Vyc29yMg=="
          },
          {
            "node": {
              "name": "Leia Organa"
            },
            "cursor": "Y3Vyc29yMw=="
          }
        ],
        "pageInfo": {
          "endCursor": "Y3Vyc29yMw==",
          "hasNextPage": false
        }
      }
    }
  }
}
```

# Global Object Identification

> Consistent object access enables simple caching and object lookups

To provide options for GraphQL clients to elegantly handle caching and data refetching, GraphQL servers need to expose object identifiers in a standardized way.

For this to work, a client will need to query via a standard mechanism to request an object by ID. Then, in the response, the schema will need to provide a standard way of providing these IDs.

Because little is known about the object other than its ID, we call these objects "nodes." Here is an example query for a node:

```
{
  node(id: "4") {
    id
    ... on User {
      name
    }
  }
```

- The GraphQL schema is formatted to allow fetching any object via the **node** field on the root query object. This returns objects which conform to a "Node" interface.
- The **id** field can be extracted out of the response safely, and can be stored for re-use via caching and refetching.
- Clients can use interface fragments to extract additional information specific to the type which conform to the node interface. In this case a "User".

The Node interface looks like:

```
# An object with a Globally Unique ID
interface Node {
  # The ID of the object.
  id: ID!
}
```

With a User conforming via:

```
type User implements Node {
  id: ID!
  # Full name
  name: String!
}
```

## Specification

Everything below describes with more formal requirements a specification around object identification in order to conform to ensure consistency across server implementations. These specifications are based on how a server can be compliant with the Relay API client, but can be useful for any client.

## Reserved Types

A GraphQL server compatible with this spec must reserve certain types and type names to support the consistent object identification model. In particular, this spec creates guidelines for the following types:

- An interface named **Node**
- The **node** field on the root query type

## Node Interface

The server must provide an interface called **Node**. That interface must include exactly one field, called **id** that returns a non-null **ID**.

This **id** should be a globally unique identifier for this object, and given just this **id**, the server should be able to refetch the object.

### Introspection

A server that correctly implements the above interface will accept the following introspection query, and return the provided response:

```
{
  __type(name: "Node") {
    name
    kind
    fields {
      name
      type {
        kind
        ofType {
          name
          kind
        }
      }
    }
  }
}
```

yields

```
{
  "__type": {
    "name": "Node",
    "kind": "INTERFACE",
    "fields": [
      {
        "name": "id",
        "type": {
          "kind": "NON_NULL",
          "ofType": {
            "name": "ID",
            "kind": "SCALAR"
          }
        }
      }
    ]
  }
}
```

## Node root field

The server must provide a root field called **node** that returns the **Node** interface. This root field must take exactly one argument, a non-null ID named **id**.

If a query returns an object that implements **Node**, then this root field should refetch the identical object when value returned by the server in the **Node**'s **id** field is passed as the **id** parameter to the **node** root field.

The server must make a best effort to fetch this data, but it may not always be possible; for example, the server may return a **User** with a valid **id**, but when the request is made to refetch that user with the **node** root field, the user's database may be unavailable, or the user may have deleted their account. In this case, the result of querying this field should be **null**.

### Introspection

A server that correctly implements the above requirement will accept the following introspection query, and return a response that contains the provided response.

```
{
  __schema {
    queryType {
      fields {
        name
        type {
          name
          kind
        }
        args {
          name
          type {
            kind
            ofType {
              name
              kind
            }
          }
        }
      }
    }
  }
}
```

yields

```
{
  "__schema": {
    "queryType": {
      "fields": [
        // This array may have other entries
        {
          "name": "node",
          "type": {
            "name": "Node",
            "kind": "INTERFACE"
          },
          "args": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "name": "ID",
                  "kind": "SCALAR"
                }
              }
            }
          ]
        }
      ]
    }
  }
}
```

## Field stability

If two objects appear in a query, both implementing **Node** with identical IDs, then the two objects must be equal

For the purposes of this definition, object equality is defined as follows:

- If a field is queried on both objects, the result of querying that field on the first object must be equal to the result of querying that field on the second object.
  - If the field returns a scalar, equality is defined as is appropriate for that scalar.
  - If the field returns an enum, equality is defined as both fields returning the same enum value.
  - If the field returns an object, equality is defined recursively as per the above.

For example:

```
{
  fourNode: node(id: "4") {
    id
    ... on User {
      name
      userWithIdOneGreater {
        id
        name
      }
    }
  }
  fiveNode: node(id: "5") {
    id
    ... on User {
      name
      userWithIdOneLess {
        id
        name
      }
    }
  }
}
```

might return:

```
{
  "fourNode": {
    "id": "4",
    "name": "Mark Zuckerberg",
    "userWithIdOneGreater": {
      "id": "5",
      "name": "Chris Hughes"
    }
  },
  "fiveNode": {
    "id": "5",
    "name": "Chris Hughes",
    "userWithIdOneLess": {
      "id": "4",
      "name": "Mark Zuckerberg",
    }
  }
}
```

Because **fourNode.id** and **fiveNode.userWithIdOneLess.id** are the same, we are guaranteed by the conditions above that **fourNode.name** must be the same as **fiveNode.userWithIdOneLess.name**, and indeed it is

## Plural identifying root fields

Imagine a root field named **username**, that takes a user's username and returns the corresponding user:

```
{
  username(username: "zuck") {
    id
  }
}
```

might return:

```
{
  "username": {
    "id": "4",
  }
}
```

Clearly, we can link up the object in the response, the user with ID 4, with the request, identifying the object with username "zuck". Now imagine a root field named **usernames**, that takes a list of usernames and returns a list of objects:

```
{
  usernames(usernames: ["zuck", "moskov"]) {
    id
  }
}
```

might return:

```
{
  "usernames": [
    {
      "id": "4",
    },
    {
      "id": "6"
    }
  ]
}
```

For clients to be able to link the usernames to the responses, it needs to know that the array in the response will be the same size as the array passed as an argument, and that the order in the response will match the order in the argument. We call these _plural identifying root fields_, and their requirements are described below.

## Fields

A server compliant with this spec may expose root fields that accept a list of input arguments, and returns a list of responses. For spec-compliant clients to use these fields, these fields must be _plural identifying root fields_, and obey the following requirements.

NOTE Spec-compliant servers may expose root fields that are not _plural identifying root fields_; the spec-compliant client will just be unable to use those fields as root fields in its queries.

_Plural identifying root_ fields must have a single argument. The type of that argument must be a non-null list of non-nulls. In our **usernames** example, the field would take a single argument named **usernames**, whose type (using our type system shorthand) would be \[String!]!.

The return type of a _plural identifying root field_ must be a list, or a non-null wrapper around a list. The list must wrap the **Node** interface, an object that implements the **Node** interface, or a non-null wrapper around those types.

Whenever the _plural identifying root field_ is used, the length of the list in the response must be the same as the length of the list in the arguments. Each item in the response must correspond to its item in the input; more formally, if passing the root field an input list **Lin** resulted in output value **Lout**, then for an arbitrary permutation **P**, passing the root field **P(Lin)** must result in output value **P(Lout)**.

Because of this, servers are advised to not have the response type wrap a non-null wrapper, because if it is unable to fetch the object for a given entry in the input, it still must provide a value in the output for that input entry; **null** is a useful value for doing so.

# Caching

> Providing Object Identifiers allows clients to build rich caches

In an endpoing-based API, clients can use HTTP caching to easily avoid refetching resources, and for identifying when two resources are the same. The URL in these APIs is a **globally unique identifier** that the client can leverage to build a cache. In GraphQL, though, there's no URL-like primitive that provides this globally unique identifier for a given object. It's hence a best practice for the API to expose such an identifier for clients to use

## Globally Unique IDs

One possible pattern for this is reserving a field, like **id**, to be a globally unique identifier. The example schema used throughout these docs uses this approach:

```
{
  starship(id:"3003") {
    id
    name
  }
  droid(id:"2001") {
    id
    name
    friends {
      id
      name
    }
  }
}
```

```
{
  "data": {
    "starship": {
      "id": "3003",
      "name": "Imperial shuttle"
    },
    "droid": {
      "id": "2001",
      "name": "R2-D2",
      "friends": [
        {
          "id": "1000",
          "name": "Luke Skywalker"
        },
        {
          "id": "1002",
          "name": "Han Solo"
        },
        {
          "id": "1003",
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```

This is a powerful tool to hand to client developers. In the same way that the URLs of a resource-based API provided a globally unique key, the **id** field in this system provides a globally unique key.

If the backend uses something like UUIDs for identifiers, then exposing this globally unique ID may be very straightforward! If the backend doesn't have a globally unique ID for every object already, the GraphQL layer might have to construct this. Oftentimes, that's as simple as appending the name of the type to the ID and using that as the identifier; the server might then make that ID opaque by base64-encoding it.

Optionally, this ID can then be used to work with the Global Object Identification's **node** pattern.

## Compatibility with existing APIs

One concern with using the **id** field for this purpose is how a client using the GraphQL API would work with existing APIs. For example, if our existing API accepted a type-specific ID, but our GraphQL API uses globally unique IDs, then using both at once can be tricky.

In these cases, the GraphQL API can expose the previous API's IDs in a separate field. This gives us the best of both worlds:

- GraphQL clients can continue to rely on a consistent mechanism for getting a globally unique ID
- Clients that need to work with our previous API can also fetch **previousApiId** from the object, and use that

## Alternatives

While globally unique IDs have proven to be powerful pattern in the past, they are not the only pattern that can be used, nor are they right for every situation. The really critical functionality that the client needs is the ability to derive a globally unique identifier for their caching. While having the server derive that ID simplifies the client, the client can also derive the identifier. Oftentimes, this would be as simple as combining the type of the object (queried with **\_\_typename**) with some type-unique identifier.

Additionally, if replacing an existing API with a GraphQL API, it may be confusing if all of the fields in GraphQL are the same **except id**, which changed to be globally unique. This would be another reason why one might choose not to use **id** as the globally unique field.
