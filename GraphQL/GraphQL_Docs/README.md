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
