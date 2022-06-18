# YAML

Basically programming languages are divided into two types

- Declarative programming language
- Imperative programming language

1. **Declarative programming** can be defined as what a program can do rather than how it can be done. Examples - HTML/CSS
2. **Imperative programming** can be defined as how a program can be accomplished. Examples - C++, JAVA, Python, and so on

_JSON, YAML, and XML are generally considered as context-sensitive languages and comes under declarative programming language_

### What is YAML?

![YAML](./resources/yaml_c1.png)

### Declaring Key-Value Pair, Array/Lists, and Dictionary/Map in YAML

![Declaration](./resources/yaml_c2.png)

### Importance of Spacing in YAML

![Spacing](./resources/yaml_c3.png)

### YAML Advanced

![Advanced](./resources/yaml_c4.png)

### Dictionary v/s List v/s List of Dictionaries

To store different information of a single object we use **Dictionary**

![Dictionary Ex](./resources/yaml_c5.png)

To store multiple items of a same type of object we use **List**

![List Ex](./resources/yaml_c6.png)

**List of Dictionaries**

![List of Dictionaries Ex](./resources/yaml_c7.png)

**Difference between Dictionary and List**

![List v/s Dictionary](./resources/yaml_c8.png)

### Benefits of YAML

- YAML data can be portable with many programming languages like Perl, Python, PHP, Ruby, and JavaScript
- It is easily readable and editable
- It can be easily implemented
- It consists of data consistent model
- It supports one-direction processing

### Comparisons

**Comparison between YAML, JSON, and XML**

- YAML has some advantages over JSON like self reference support for complex datatypes, embedded block literals, comments, and more
- JSON is only readable whereas YAML can be readable as well as editable
- JSON is a subset of YAML so that YAML parsers can be able to parse JSON
- YAML doesn't use any extra delimiters. So it is light-weight than XML and JSOn

**Note: YAML file is case-sensitive and you can save the YAML file in .yaml or .yml extension. YAML doesn't allow any tabs while creating a YAML file**

### Maps or Dictionaries

Sequences can be defined as **(lists or arrays)**:

Example

```
sequence1:
    - Item 1
    - Item 2
    - 0.5   # sequences can contain disparate types
    - Item 4
    - key: value
      another_key: another_value
    - sequence1
    - sequence2
```

## Basic Components of YAML file

**In this topic you will learn about basic types and syntaxes that are used in YAML file**

YAML file can be formatted into three types

- Conventional Block format
- Inline format
- Folded Text format

### Conventional Block format

The format that is followed in this is **hyphen(-)** and **space(" ")**:

**Example**

```
--- # Learning resources in tcs
- Fresco play
- Lynda
- Skillsoft
- Safari
```

### Inline format

It is delimited with comma(,) and space(" ")

**Example**

```
--- # Learning resources in tcs
[Fresco play, Skillsoft, Lynda, Safari]
```

### Folded Text

It converts newlines to spaces and removes leading white spaces

**Example**

```
- {name: tcs, founded: 1968}
        or
- name: tcs
  founded: 1968
```

## Indentation

**Spacing/Indentation** - As you know that YAML doesn't allow any tab spaces, but it follows spaces between element parts. **Example** - Key: Value

**Comments** - YAML suports only single-line comments. Comments are not supported in scalars but in collections it is vice-versa. The shortcut for commenting block is **Ctrl+Q**

syntax: # this is a comment

**comments in collection**

```
key: # comment 1
    - value line 1
     # comment 2
    - value line 2
```

### Structures

- To separate directives from document content, YAML uses three dashes (---)
- To end the document, YAML uses three dots(...)

**Example**

```
# Learning resources in TCS
---
- Fresco Play
- Lynda
- Skillsoft
...
```

- Repeated nodes are first identified as anchor (indicated by the symbol **&**)
- The subsequent sequences are then aliased (indicated by the symbol **\***)
- A question mark and a space indicates a complex mapping key
- For anchors and alias to work with maps and sequences inject **>>**

**Example - 1**

```
---
Software Companies:
- TCS
- &Apple # First occurence
- IBM
Fruits:
- *Apple # Subsequent occurence
```

**Example - 2**

```
? - TCS
  - Fresco PLAY
:
  12-11-2018
```

**Example - 3**

```
default: &default
  school: hogwarts

harry:
  <<: *default
  house: gryffindor
```

### Basic YAML Elements

YAML supports different data types such as **Scalar and Collections**

**Scalar** - Scalar can be of any type like **Integers, Floating point numbers, Dates and Miscellaneous Example**:

```
number1: 53 # integer
number2: 45.2361 # floating point number
date: 12-11-2010 # date
boolean: true # boolean
null_value: null # miscellaneous
```

Scalar is composed of two different styles like **Block scalar style** and **flow scalar style**

### Block Styles

**YAML consists of different types such as scalars, collections, sequences, and mappings**

In Block scalar style, multi-line strings can be written in two types such as **block notation** which uses a literal style, indicated by ("|") and **folded style**, indicated by (">")

- In block notation, each line break (means where text is divided into 2 lines) is preserved
- In folded style each line break is turned into a space, if it is an empty line or more-indented line

**Example of Block notation**

```
--- |
welcome to fresco play
hi, this is yaml course
you are in scalar topic
```

**Example of Folded style**

```
--- >
    In tcs there are several learning resources
        like fresco play, skill soft, safari and lynda.

        Now you are
        learning YAML course

        congratulations!
```

### Flow scalar styles

There are three different types of **Flow scalar types**:

- **Double-quoted** - It is surrounded by **Double quotes(")** and uses **\\** as escape sequence
- **Single-quoted** - It is surrounded by **Single quotes(')**. Escape sequences are not present in single-quoted style
- **Unquoted** - It is not surrounded by any indicators or escape sequences

## Collections

Collections are of two types like

- Lists
- Map or Dictionaries

**Lists** - The element in the list are denoted by the syntax **hyphen and space**

**Example**

```
- Fresco Play
- Lynda
- Skillsoft
- Safari
```

**Maps or Dictionaries** will be in the form of **Key: Value** pair

Maps can also be nested as follows

**Example**

```
nested_map1:
    key1: value1
    key2: value2
    nested_map2:
    key1: value1
```

_Maps don't have string as keys_

You can also have key with multiple lines by using the following syntax:

**Example**

```
? |
  This is a key
  which has multiple lines
: its value
```

### Information in YAML

> YAML is used to represent the information in text format and it is also used as a method to represent native data structure

YAML node is used to represent single native data structure which can be represented in three forms known as scalar, mapping, and sequence

### Examples

**Collections**

![Collection](./resources/yaml_c9.png)
![Collection_1](./resources/yaml_c10.png)

**Structures**

![Structures](./resources/yaml_c11.png)
![Structures](./resources/yaml_c12.png)

**Preserving the line break**

![Line Break](./resources/yaml_c13.png)

### YAML Processing Overview

![YAML Processing](./resources/yaml_c14.png)

# Processing YAML information

YAML information can be specified in two formats

- YAML Representation (A class of data objects)
- YAML Stream (YAML representation is presented as a series of characters)

---

YAML processor is used to handle this two different views and it does it work by obtaining and modifying the information from another module known as _Application_

---

YAML information can be understandable by two ways

- Machine processing
- Human consumption

**_The tuning between this two ways can be done in three stages such as_**

- **Representation** - It tells how YAML views native data structure to attain portability between different programmable environments
- **Serialization** - It is the process of converting YAML representation into serial form
- **Presentation** - In this YAML serialization can be converted into series of characters(human-friendly)

![Processes](./resources/yaml_c15.png)

The functionality of YAML processor is to convert information between different stages which are mentioned above in the diagram. This can be done in two ways

- Dump
- Load

**_Dumping native data structure into character stream can be done in three stages_**

- Representing Native Data Structures
- Serializing the Representation Graph
- Presenting the Serialization Tree

### Dump

**Representing native data structure** - Native data structure can be represented in three node kinds like _sequence_ (ordered series of entries), _mapping_ (unordered entries of key and value pairs), and _scalar_ (data with opaque structure is represented as unicode characters) and these are combined to generate graph structures

**Serializing the representation graph** - serialization is required to _order the mapping keys_ and _replacing the node that has occurred two or more times with the placeholders known as aliases_. YAML processor will take care of all the ordering of keys and aliases with the help of application

**Presenting the Serialization Tree** - The final stage is presenting the YAML serialization as character stream in a human-friendly manner. Different presentation styles like _node styles, how a scalar content is formatted, the chunk of indentation, the tag handles which can be used, to leave node tags which are not specified, the directives and so on_ are introduced by YAML processor with the help of application

### Load

**Loading is used to construct native data structure from character stream in three stages**

**Parsing the Presentation Stream** - The reverse process of presentation is known as parsing. It takes stream of characters and converts it into serialization events. It can fail due to ill-formed input

**Composing the Representation Graph** - Serialization event is converted to representation graph. It can also fail due to many reasons

**Constructing Native Data Structure** - You will construct native data structure from YAML representation. It doesn't consider any serialization details. It can fail due to absence of some required native data types

### Information models

![Information Model](./resources/yaml_c16.png)

The above picture explains about three information models like

- Representation graph
- Serialization tree
- Presentation stream
- Full arrows denote composition
- Hollow arrow denotes inheritance
- 1 denotes single relationship
- "\*" denotes many relationships
- Single "+" denotes serialization details
- Double "++" denotes presentation details

### Representation Graph

![Representation Graph](./resources/yaml_c17.png)

In YAML representation graph **native data structure** is rooted, connected and directed graph(tagged nodes). Every node is connected to each node through edges and at final all nodes must connect to the root node through edges. The directed graph can contain cycles and node can have more than one edge

The definition of nodes that are explained in terms of other nodes are _collection_. YAML supports two types of collection nodes called _sequences_ and _mappings_. The nodes which are independent are called _scalars_. Mapping nodes are tricky as they are unique and unordered

### Node

**Node** can be defined as single native data structure. The content present in the nodes is of three types such as **scalar, sequence or mapping**

- The values that are present in the content are restricted through the tag
- The content of **Scalar node** can be presented as a series of zero or more unicode characters
- The content of **sequence node** is represented as ordered series of zero or more unicode characters
- The content of **mapping node** is represented as unordered key, value pairs
- you can consider sequence and mappings as collections

### Tag

**The type information of native data structure is represented by an identifier known as Tag**

- There are two different types of tags known as **Global Tag** and **Local Tag**
- Global tags are nothing but URI's which are unique and can be used in any application
- Local tags start with "!" symbol and they are not considered as unique and URI's
- They are used to associate meta with each node
- It should specify node kind (like scalar, sequence or mapping)

### Serialization tree

![Serialization tree](./resources/yaml_c18.png)

YAML representation can be expressed in serial API by doing two things

- Imposing an ordering on mapping keys
- Mentioning aliasing nodes for the subequent occurences of the anchor nodes. The result of the above process is known as **Serialization Tree**

The two important concepts of serialization tree are **keys order** and **anchors and aliases**

- **keys order** - From the representation model mapping keys are not ordered. To serialize mappings you should impose an ordering on maps. Ordering mappings can be treated as a sequence of mappings. Mapping is a **key:value** pair

- **Anchors and Aliases** - A node can appear more than one time in a collection. The first occurrence is termed as an anchor and subsequent occurrences are considered as **aliases** which will refer back to the anchor. When a representation graph is constructed from serialization events alias will refer to most recent node having specified anchor. Anchors need not to be unique in this context

### Presentation Stream

![Presentation Stream](./resources/yaml_c19.png)

**Presentation stream** can be defined as the stream of unicode characters which makes use of comment, directives, node styles, scalar content formats, and also other presentation details so that to present the content in a human-readable manner

- YAML allows numerous serialization trees to be contain in same character stream, as a series of documents separated by markers

**Node Styles** - Node can be represented in some style. YAML supports two types of styles like **Block style** (uses indentation) and **Flow style** (uses explicit indicators)

> YAML consists of two scalar styles like **Block scalar style (literal and folded style) and Flow scalar style (plain style, single-quoted style and double-quoted style)**

**Scalar formats** - Scalar can be presented in various formats. For example integer can be represented in hexa-decimal format

**Comments** - Comments are not associated with any node. It is like a bridge between various human maintainers of a file

**Directives** - Document is associated with set of directives. Directive is like giving set of instructions to the YAML processor. YAML provides you with two types of directives like **YAML** and **TAG**

### Loading Failure Points

![Loading Failure Points](./resources/yaml_c20.png)

When you are loading native data structure from the YAML stream it has several failure points

- There are few common failure points like character stream might be deformed, aliases might be not identifiable, unspecified tags are not resolved, tags might be not recognized, content might not be valid and a native type might be not available

**Well formed streams and identified aliases** - YAML processor should reject ill-formed streams and unidentified aliases. It can get back from syntax errors by ignoring ceretain parts of input and such errors should be reported in some mechanism

**Resolved Tags** - Resolving a tag depends on mainly three important parameters like non-specific tag of the node, the path leading from root to node and the content of the node

**Recognized and valid tags** - To recognize node as a valid one, it must have a tag recognized by YAML processor and the content of node must satisfy the constraints imposed by tag. If the scalar node contains a unrecognized tag or invalid content, a partial representation is composed

**Available Tags** - A tag must contain an available native type. If node's tag is unavailable then YAML processor will unable to construct native data structure

## Syntax Primitives

YAML consists of the following syntax primitives like

- Production parameters
- Production naming conventions

### Production Parameters

**Production parameters** can be defined as set of parameters and their ranges that are used for specific production. There are different parameters like

- **Indentation** - character stream depends on the indentation level present in the block and it is denoted by the character **m** or **n**. So many production have enabled this feature
- **Context** - is divided into two types like _block styles_ and _flow styles_ and it is denoted by a character **c**
- **Style** - Scalar content can be represented in one of these five styles **(plain, double quoted and single quoted flow, literal and folded block)**
- **Chomping** - block scalars offers three mechanism for chomping(formatting new line strings) any trailing line breaks with _strip, clip, and keep_. It is denoted by the character **b**

### Production Naming Conventions

The naming conventions which are mentioned below are explained in the context of production combinations

- Production names uses Hungarian-style naming convention
- The following are the different type of characters that are used in production for different purposes
  - e - Matching no characters
  - c - Starting and ending with a special character
  - b - Matching a single-line break
  - nb - Starting and ending with a non-break character
  - s - Starting and ending with white space character
  - ns - Starting and ending with non-space character
  - l - Matching a complete line(s)
  - x-y- - starting with x- and ending with y- characters, where x- and y- are any of the above prefixes
  - x+, x-y+ - The additional property that the matched content indentation level is greater that the specified n parameter

## Space Processing

To achieve the structure, serialized YAML uses text lines. These requires special processing rules for white space(both space and tab)

### Indentation

Structure is determined by the indentation (line break character followed by zero or more spaces at start of the line)

- Tab characters are not allowed in indentation as they vary in different system
- The amount of indentation is presentation detail
- The child node is more indentated than parent node
- All siblings should follow same indentation and content of siblings can be indented independently
- The "-", "?", and ":" characters used to denote block collection entries

**Example**

```
%YAML 1.2
- - -
!!map {
  ? !!str "Not indented"
  : !!map {
      ? !!str "By one space"
      : !!str "By four\n  spaces\n",
      ? !!str "Flow style"
      : !!seq [
          !!str "By two",
          !!str "Also by two",
          !!str "Still by two",
        ]
    }
}
```

### Separation Spaces

YAML uses white space characters between token in a line that is outside of indentation and scalar content

- white space also includes tab space
- separation spaces comes under presentation detail

**Line Prefix**

_Each line in scalar content begin with non-content line prefix (which includes indentation)._

- Flow scalar style includes leading white-spaces including tab spaces
- Line prefixes also come under presentation details

```
%YAML 1.2
---
!!map {
  ? !!str "plain"
  : !!str "text lines",
  ? !!str "quoted"
  : !!str "text lines",
  ? !!str "block"
  : !!str "text\n·→lines\n",
}
```

### Empty lines

\*Empty lines consists of non-content prefix followed by line break

**Example**

```
%YAML 1.2
---
!!map {
  ? !!str "Folding"
  : !!str "Empty line\nas a line feed",
  ? !!str "Chomping"
  : !!str "Clipped empty lines\n",
}
```

### Line Folding

_Line folding can be defined as breaking of lines for human readability_

- If empty lines appears after the line break, then it is chopped
- If the line is not empty, then line break is converted into single space
- Line folding is applied to styles of scalar content like block style and flow style

### Types of foldings

**Block folding**

- In this the final line break and trailing empty lines are chomped and never folded
- The line breaks which are surrounded by text lines which contains leading white space are not subjected to folding
- The rules that are followed in the block folding are **_paragraph is interpreted as a line, empty lines as line feed and finally more indented lines are preserved_**

**Flow folding**

- The structure in the line folding depends on the indicators rather than indentation
- The rules that are followed in flow folding are **_paragraph is interpreted as a line, empty line as line feed and text can be more indented without effecting the content_**

### Comments

- An explicit comment is denoted by the syntax **#**
- Comments are separated from other token with white spaces
- Comment lines appear independently outside of scalar content and only white space character is considered to be a comment line

**Example**

```
# This is a comment
```

**Multi-line comments**

- YAML doesn't support multi-line comments, but you can write comments in multiple lines

**Example**

```
# this comment
# is written in
# multiple lines
```

### Directives

**_Directives can be defined as instructions given to YAML processor_**

- Each directive is denoted by the character **%** followed by directive name and its parameters

There are two different types of directives such as

- **_Reserved directive_**
- **_YAML directive_**
- **_TAG directive_**

**Reserved directive**: YAML should reject unknown directives with an appropriate warning. Those directives are called reserved directives

**Example**

```
% # This is ignored
  # with warning
```

**YAML directive**

**YAML directive** specifies the version of document that YAML follow to

- Let us consider an YAML 1.2 version processor which accepts documents with %YAML 1.2 directive and also accept the documents which doesn't have an directives
- If the directive is higher minor version (e.g.: %YAML 1.3 directive) then the document is processed with an appropriate warning
- If the directive is higher major version (e.g.: %YAML 2.0 directive) then the document is rejected with an approprite error
- If the directive is less than the processor version (e.g.: %YAML 1.1. directive), then it should accept the document as 1.2 version is superset of 1.1

**NOTE**: It gives an error when you specify more than one directive in same document

**TAG Directive**

**Node tags** are specified through a short-hand notation through TAG directive

- TAG directive is associated with handle along with a prefix

**Example**

```
%TAG !yaml! tag:yaml.org,2002:
---
!yaml!str "A"
```

- You can't specify more than one **_TAG directive_** for one handle

**TAG Handles**

**_The prefix of the exactly concerned tag handle will be matched by tag handle. There are three types of handle variants_**

- Primary Handle - Primary handle is indicated by single **!** identifier. These are interpreted as local tags. The prefix associated with this handle is **!**
- Secondary Handle - Secondary Handle is indicated by double **! !** identifier. The prefix associated with this is **tag:yaml.org, 2002:**
- Named Handle - Named handle is surrounded by a non-empty name with **!** character. A handle name cannot be used in tag shorthand until an explicit TAG has associated with some prefix

### TAG Prefixes

There are two types of tag prefixes such as

- Local Tag Prefix and
- Global Tag Prefix **Local Tag Prefix** - If the prefix consists of **!** identifier, then the shorthands using handle are expanded to a local tag

**Syntax**

```
c-ns-local-tag-prefix ::= "!" ns-uri-char*
```

**Global Tag Prefix** - If the prefix begin with an identifier other than **!**, it must be a valid URI prefix. Shorthands using handle are expanded to a global URI tag

**Syntax**

```
ns-global-tag-prefix ::= ns-tag-char ns-uri-char*
```

### Node Properties

**_Node may consists of two optional properties such as anchor and tag_**

- Node properties are specified in any order

**Example**

```
!!str &A "string1":
  !!str "string2"
&B  "string3": *A
```

### Node Tags

**\*The type of native data structure is presented by node is identified by the **Tag property\*\*

- **_Verbatim Tags_** - verbatim tag is surrounded by the identifiers **<** and **>**. Verbatim tag must start with a local tag(**!**) or a global tag (**valid URI**)
- **_Tag shorthand_** - It should consist of tag handle with prefix followed by non-empty suffix. Prefix must start with either local tag or global tag. The suffix should not contain characters like "!", "[", "]", "{", "}", ","
- **_Non-specific tag_** - If a node doesn't contain any tag property then it is assigned to non-specific tag. For scalar the non-specific tag **!** and for other node it is **?**. You can explicitly specify the non-specific tag ! and the node can be interpreted to "tag:yaml.org, 2002:seq",
  "tag:yaml.org,2002:map" and "tag.yaml.org,2002:str"
- An anchor is identified by the symbol **&**
- An alias node is used to represent the subsequent occurrences of the anchored nodes and it is represented as **\***
- Anchor names should not contains characters like **"{", "}", "[", "]", ","**
- Anchor name is preserved in serialization tree but it is not reflected in representation graph

**Example**

```
First occurrence: &anchor Value
Second occurrence: *anchor # This is alias
```

## Node Styles

**Node can be represented in two styles**

- Block style
- Flow style

Block style and Flow style are further explained with the concepts like **Scalar, mapping, and sequences**

### Flow Styles

There are three tasks that are done by _YAML flow styles_

- Folding long content lines for readability
- The construction of native data structure can be controlled by tagging nodes
- Usage of anchors and aliases to reuse constructed object instances

---

There are two types of nodes in flow styles

- Alias Nodes
- Empty Nodes

### Alias Nodes

- The first occurrence of the node is considered as _Anchor_
- The repeated occurrences of the node after the first appearance of the node is presented as _Alias Nodes_
- **_Alias nodes are represented by the symbol \* _**

**Example**

```
%YAML 1.2
---
!!map {
    ? !!str "First occurrence"
    : &F !!str "Foo",
    ? !!str "Override anchor"
    : &S !!str "Bar",
    ? !!str "Second occurrence"
    : *F,
    ? !!str "Reuse anchor"
    : *S,
}
```

### Empty Nodes

- YAML allows node content to be empty in some cases
- Nodes with empty content are treated as plain scalars with an empty value
- Empty nodes are determined to consists of a null value

**Example**

```
%YAML 1.2
---
!!map {
    ? !!str "tcs" : !!str "",
    ? !!str "" : !!str "fresco",
}
```

- If both **node properties** and **node content** are made null then it is known as **Completely Empty flow nodes**

**Example**

```
%YAML 1.2
---
!!map {
    ? !!str "tcs" : !!null "",
    ? !!null "" : !!str "fresco",
}
```

### Flow Scalar Styles

YAML comprises of three _Flow scalar types_ such as:

- Double-quoted
- Single-quoted
- Plain or unquoted
- Scalar style comes under presentation detail

### Double-quoted

- Double-quoted is presented by the indicator **double-quotes(")**
- The arbitrary strings (can be empty or it consists of characters) can be escapted using escaping character **/**

**Example**

```
%YAML 1.2
---
!!map {
  ? !!str "implicit block key"
  : !!seq [
    !!map {
      ? !!str "implicit flow key"
      : !!str "value",
    }
  ]
}
```

### Single-quoted

_Single-quoted_ is represented by the indicator **Single quotes(')**

- Characters like " and \ are freely used in single quotes

**Example**

```
%YAML 1.2
---
!!str "here's to \"quotes\""
```

**All leading and white space characters are excluded from the content by doing following tasks**

- Every continuation line must contain at least one non-space character
- Line folding consumes empty lines

**Example**

```
%YAML 1.2
---
!!str " 1st non-empty\n\
        2nd non-empty \
        3rd non-empty "
```

### Plain Style or Unquoted

- It doesn't contain any indicator or escaping sequences to specify
- Features of plain style are it is **most readable, sensitive and context-sensitive style**
- Characters like **:, ? and -** indicators can be used as first character if it is followed by non-space safe character
- Plain scalars never contain **: and #** characters as they cause ambiguity with key: value pairs
- Characters like "[", "]", "{", "}", and "," are not involved in plain scalars as they cause ambiguity with flow collection structures

### Flow Collection Styles

Flow collection can be nested in three formats

- Nested with block collection
- Nested with another flow collection
- Part of an implicit key

You can terminate flow sequence entries by the indicator ,
There are two different types of flow collections

- Flow Sequences
- Flow Mappings

### Flow Sequences

**Flow sequence is encompassed by the indicators [ and ] characters**

- The entries can be separated by , character
- Flow node can act like a flow sequence entry
- Compact notation is made available when flow sequence entry is a mapping with single key: value pair

**Example**

```
- [A, B, ]
- [C, D]
```

### Flow Mappings

**Flow mappings are encompassed by { and } characters**

- The entries are separated by , character

**Example**

```
- {A : B, C : D, }
- {E : F, G : H }
```

## Flow Nodes

\*\*All the flow styles consists of explicit start and end indicators except for plain scalar

**Following is the example of flow content**

```
%YAML 1.2
---
!!seq [
  !!seq [ !!str "tcs", !!str "fresco" ],  # flow sequence
  !!map { ? !!str "tcs" : !!str "fresco" },  # flow mapping
  !!str "tcs",                               # double-quoted
  !!str 'fresco',                        # single-quoted
  !!str play,                                # plain or unquoted
]
```

### Complete flow node

**A complete flow node can contain optional node properties for all nodes exxcept for alias nodes as they refer to anchor node properties**

```
%YAML 1.2
---
!!seq [
  !!str "one",
  !!str "two",
  &one !!str "three",
  *one,
  !!str "",
]
```

## Block Scalar Header

**You can control the block scalars by placing the few indicators in the header section which is placed before the content**

- Non-content line break with an optional content will be placed after the header
- In this scenario, additional comments are not allowed

**Example**

```
- | # Empty header↓
 literal
- >1 # Indentation indicator↓
 ·folded
- |+ # Chomping indicator↓
 keep
- >1- # Both indicators↓
 ·strip
```

### Block Indentation Indicator

- The indentation level of block scalar is identified from the first non-empty line
- Leading empty lines should not contain more spaces in the line than non-empty line
- If the first non-empty line contains space characters then the detection fails. content start with **tab** or **#** character
- If the detection fails, then YAML requires an explicit indentation indicator to be given for the content indentation level
- The indentation level is specified through an integer number

### Block Chomping Indicator

- **Line breaks** and **Trailing empty lines** are interpreted through chomping controls. There are three types of chomping methods
  **Strip** - By using strip you can exclude all the line breaks and trailing empty lines. The indicator for the stripping is **"-"**
  **Clip** - The default chomping indicator is clipping. It protects the line breaks in scalar content but eliminates trailing spaces
  **Keep** - It protects both trailing spaces and line breaks and the indicator for keep is **"+"**

**Example**

```
strip: |-
  text↓
clip: |
  text↓
keep: |+
  text↓
```

### Literal Style

**Literal style is denoted by "|" indicator. It is simple, restricted and most readable scalar style**

**Example**

```
|↓
·literal↓
·→text↓
↓
```

Including white space characters are considered under content for literals scalars. Empty lines are not folded but line breaks and trailing empty lines are chomped

### Folded Style

**Folded style is represented by the indicator **">"\*\*

**Example**

```
>↓
·folded↓
·text↓
↓
```

- The lines which are started with white-space characters and more-indented lines are not folded
- Final line break and trailing empty lines which are subjected to chomping are never folded

### Block Collection Styles

Indicators are not used in block collection styles, instead a **lookahead** method is used to differentiate block collection from plain scalar only when key: value pair or sequence entry is seen

**Block Sequences**

- Block sequences can be defined as a series of nodes that are indicated by the symbol **-**
- The node is separated from the white space by the indicator
- The following syntax is used to denote the block sequence. (e.g.: indicator followed by non-space character)

### Block Sequences

**Example**

```
block sequence:
··- A↓
  - B : C↓
```

Entry node can use one of these three notations like

- Empty node
- Nested block node
- Compact in-line notation (nested block collection uses compact in-line notation)

### Block Mapping

**Block Mapping** can be defined as series of entries in the form of key:value pair

**Syntax**

```
block mapping:
·key: value↓
```

- If a question mark (**?**) indicator is specified in block mapping then the optional value node should also be specified in a separate line with an indicator(**:**). Here compact-line notation is used for which is discussed before

**Explicit Block mapping Syntax**

```
? explicit key # Empty value↓°
? |
  block key↓
:·- one # Explicit compact
··- two # block value↓
```

### Block Node

- Flow nodes are allowed to be nested in block collections
- Flow nodes should be indented more than one space more than its parent block collection
- There are two types of block nodes like
- **Block Scalar Node**
- **Block Collection Node**

**Block Scalar Node**

```
literal: |2
··value
folded:↓
···!foo
··>1
·value
```

**Block Collection Node**

```
sequence: !!seq
- entry
- !!seq
 - nested
mapping: !!map
 foo: bar
```

# Character Set

**Characters are the basic structure for serialized version of YAML document. YAML allows only certain character subset from unicode characters for processing. The following topics are the syntax productions of YAML serialization**

The following are the standard ASCII Unicode control codes used by the computer systems which are excluded to ensure readability

- C0 control block #x0-#x1F(except for TAB #x9, LF(Line Feed), #xA, CR(Carriage Return), #xD)
- C1 control block #x80-#x9F(except for NEL(Next Line), #85)
- Surrogate block #xD800=#xDFFF, #xFFFE, and #xFF
- YAML processor should accept all Unicode characters on input except those which are excluded from character set
- YAML processor should produce only acceptable characters on output and excluded characters are presented through escape sequences

**Note: C0 and C1 control block consists of hexadecimal codes which are used by he system instead of using text**

## Character Encoding

- YAML processor supports UTF-8 and UTF-16 character encodings
- UTF-32 is used for JSON functionality
- If the data stream consists of a character code U+FEFF at it's beginning then it is known as _byte order mark_ (used as a signature for defining byte order and encoding form)
- If character stream begin with byte order mark, then character encoding is decided by the byte order mark

**Example: Byte order mark character is represented by "<=>" character**

```
<=># This is a comment
```

**Byte order mark should not appear in the middle of the document**

```
- It is not valid to use Bom
<=>
-In the middle of document
```

## Indicators

**The characters which have special semantics are called indicators**

The following are the different types of indicator characters

- Hyphen(#x2D) denotes a block sequence entry
- Question mark(#x3F) denotes mapping key
- Colon(#x3A) denotes mapping value
- Comma(#x2C) end a flow collection entry
- Left bracket(#x5B) - start a flow bracket
- Right bracket(#x5D) - end a flow bracket
- Left brace(#x7B) - start a flow mapping
- Right brace(#x7D) - end a flow mapping
- Hash or Pound(#x23) indicates comment
- Ampersand(#x26) - indicate node anchor property
- Asterisk(#x2A) indicates an alias node
- Exclamatory(#x21) - is heavily overloaded for specifying node tags. It can be used for denoting tag handles which are used in tag directives and tag properties, to denote local tags and for the non-plain scalars it is used as non-specific tag
- Vertical Bar(7C) - indicates literal block scalar
- Greater than(#x3E) - indicates folded block scalar
- Single quote(#x27) - indicates single-quoted flow scalar
- double quotes(#x22) - indicates double-quoted flow scalar
- percentage(#x25) indicates directive line
- "@" and "`" are reserved for future use

---

"left square bracket", "right square bracket", "left flower bracket", "right flower bracket" and "comma" comes under flow collections

### Line Break Characters

- ASCII line-break characters are Line-feed (#xA) and Carriage-return(#xB)
- Following are Non-ASCII line break characters Form feed (#x0C), Next line (#x85), Line separator (#x2028) and paragraph separator (#x2029)
- YAML version 1.1 doesn't support the above non-ASCII line break characters as they are treated as non-break characters of YAML version 1.2. So YAML processors while processing YAML 1.1 document should treat line-break characters as non-break characters with an appropriate warning
- Line break characters are different for different systems
- Inside the scalar content, YAML processor must normalize the line breaks into single line-feed characters and outside of the scalar content line breaks are used to terminate lines.
- Line breaks sometimes use glyph (“↓”)

**Syntax**

```
|
  Line break (no glyph)
  Line break (glyphed)↓
```

### White Space Characters

**YAML contains two white space characters such as space and tab**

- Tab characters are displayed with a glyph “→” and space characters are displayed with a glyph "."

**Example**

```
# Tabs and spaces
quoted:·"Quoted →"
block:→|
··void main() {
··→printf("Fresco Play!\n");
··}
```

### Miscellaneous Characters

**There are different character classes that are used by YAML**

- Decimal digits are used for number
- Hexadecimal are used for escape sequences
- ASCII letter characters
- Alpha numeric characters for identifiers
- URI characters are used for tags
- The ! is used to represent the end of named tag handle whereas it is restricted to use in tag shorthands. These shorthands should not contain characters like "left square bracket","right square bracket","left flower bracket","right flower bracket" and "comma" as they cause ambiguity with flow collection structures

### Escaped Characters

- Non-printable characters must be escaped
- In YAML escape sequences can be done by the identifier \ and come under presentation detail
- Then these escape sequences are interpreted into a unicode character
- Escape sequences are interpreted only in double-quoted scalars. Beside this, the identifier has no meaning in other scalar styles
- There are different escaped characters like null (#x0), backspace (#x8), feed (#xA), vertical tab (#xB), form feed (#xC), carriage return (#xD) and escape (#x1B)

**Example**

```
%YAML 1.2
---
"Different examples \x5C
\x22 \x07 \x08 \x1B \x0C
\x0A \x0D \x09 \x0B \x00
\x20 \xA0 \x85 \u2028 \u2029
are explained"
```

## Documents

**character stream can be defined as the combination of several documents**

**Document Prefix**

- Before starting a document, a prefix and comment lines (optional) should occur before document for character encoding
- All the documents in the stream must use the same character encoding
- You can re-specify the character encoding by using byte-order-mark

**Syntax**

```
⇔# Comment
# lines
Document
```

### Document Markers

**At the beginning of the document if % character appears then it is assumed as Directive**

- The actual content in the YAML file also happens to start with %
- Then how can you distinguish the above two scenarios
- For this a new concept is introduced known as Special marker lines
- Two special marker lines are used. One at beginning of the document and another at end of the document
- If the directives end with this marker line, then the content lines can use % character as their first character
- By using the marker line at end of the document to tell the parser that you can start scanning for directives again

**Syntax**

```
%YAML 1.2
---
Document
... # Suffix
```

### Bare Documents

- Bare document is well-known as clean document as it doesn't start with any directives or marker lines
- Bare document contains only the content
- The first non-comment line may not start with % character
- Document nodes are more indented such that if it allows parent node to be indented at -1 space, then the subsequents nodes should be more indented than parent node it allows them to be indented at zero or more spaces

**Example**

```
Bare
document
...
# No document
...
|
%Fresco-Play  # Not the first line
```

### Explicit Documents

The name itself explains that it consists of explicit directives end marker line rather than directives

- The document can be completely empty

**Example**

```
---
{ matches
% : 20 }
...
---
# Empty
...
```

### Directive Documents

**Directive Documents** can be defined as the document begins with some directives followed by explicit directives end marker line

**Example**

```
%YAML 1.2
--- |
%Fresco-Play
. . .
%YAML1.2
---
# Empty
. . .
```

### Streams

**YAML stream can be defined as the combination one or more documents**

- The successive documents should be separated by seperation marker line
- If one document doesn't end with document end marker line, then the successive document must start with directive end marker line

**Example**

```
Document
---
# Empty
...
%YAML 1.2
---
matches %: 80
```

### Use cases of streams

**A well-formed stream can be defined as the sequence of bytes. The following are the different use-cases comes under YAML stream structure**

- **Appending to streams** - In YAML single stream can allow multiple documents such that they are used as log files. Each document is independent to each other
- **Concatenating Streams** - Concatenating two YAML streams needs them to use same character encoding. It is compulsory to separate two documents either by separating last document of first stream of or the first document of second stream.You can separate them by placing document end marker between two streams
- **Communication streams** - The advantage of document end marker is that it signals that document is ended without closing the stream or starting next document. The main advantage is that receiver will wont wait for next one to arrive. The sender can aslo send keep-alive messages in the form of comments without signalling the start of the document

# YAML Schema

As in the previous topics you have learned about tags and non-specific tags.

_The combination of set of tags and a procedure for resolving non-specific tags is introduced through YAML Schema_

## Schemas

There are four different types of schemas in YAML

- **Failsafe Schema** - It can work with any YAML document. Different types of tags are discussed in this schema
- **JSON Schema** - It allows parsing json files. YAML processor will consider it is an option
- **Core Schema** - It is extension of JSON schema and default schema for YAML processor
- **Other Schemas** - If you want to use explicit tags it is highly recommended to go for other schemas

Each and every schema is explained in upcoming cards

### Failsafe schema

**Tags**

**Generic Mapping** - The common fields that are observed in different types of tags are URI, Kind, Definition, and Example
**URI** - tag.yaml.org, 2002:map
**Kind** - Mapping
**Definition** - Every key is uniquely mapped with unique and single value. YAML has no restriction to the type of key like scalar
**Example**:

```
Block style: !!map
F: Fresco Play
L: Lynda
S: Skillsoft
Flow style: !!map { F:Fresco Play, L: Lynda, S: Skillsoft }
```

### Generic Sequence

**URI**: tag.yaml.org, 2002:seq
**Kind**: Sequence
**Definition**: It represent the collection in a sequential integers starting with zero
**Example**:

```
Block style: !!seq
- F: Fresco Play
- L: Lynda
- S: Skillsoft
Flow style: !!seq [ F:Fresco Play, L: Lynda, S: Skillsoft ]
```

### Generic String

**URI**: tag:yaml.org, 2002:str
**Kind**: Scalar
**Definition**: It represents a unicode string of zero or more unicode characters
**Example**:

```
Block style: !!str |-
  String: You are in Fresco Play.

Flow style: !!str "String: You are in Fresco Play."
```

### Failsafe Tag Resolution

- The nodes with non-specific tag **!** are resolved by the standard convention "tag:yaml.org, 2002:seq", tag:yaml.org, 2002:map", "tag:yaml.org, 2002:string"
- The nodes with non-specific tag **?** are unresolved

### JSON Schema

**JSON schema uses the following tags in addition to the failsafe schema**

**Null**
**URI**: tag.yaml.org, 2002:null
**Kind**: Scalar
**Definition**: It doesn't consists of any value. If the mapping has a key and null value then it is valid and it is different from not having a key
**Example**:

```
!!null null: value for null key
key with null value: !!null null
```

### Boolean

**URI**: tag.yaml.org, 2002:bool
**Kind**: Scalar
**Definition**: It contains only two values that is either true or false
**Example**:

```
Fresco Play is a part of TCS: !!bool true
JSON is a superset of YAML: !!bool false
```

### Integer

**URI**: tag.yaml.org, 2002:int
**Kind**: Scalar
**Definition**: It represents finite mathematical integers. It restricts to native integer data type. Some languages allow numbers as both integer and floating point. In some languages integer may overflow the storage capability, so that YAML processor will throw an error by rejecting it
**Example**:

```
negative: !!int -54
zero: !!int 0
positive: !!int 85
```

### Floating point

**URI**: tag.yaml.org, 2002:float
**Kind**: Scalar
**Definition**: It represents the real numbers, which includes three special values like positive, negative infinity and not a number. Some languages allow number as both integer and floating point values. Not every floating number has the same value, some can be round-tripped
**Example**:

```
negative: !!float -8
zero: !!float 0
positive: !!float 1.7e2
infinity: !!float .inf
not a number: !!float .nan
```

### JSON Tag resolution

JSON has same tag resolution as that of Failsafe, the only difference is that it is mentioned below

- Collections with non-specific tag **?** are resolved to the standards "tag:yaml.org, 2002:seq", "tag:uaml.org, 2002:map"
- Scalar with non-specific tag **?** should match a list of regular expression

<table>
  <tr>
    <th>Regular Expression</th>
    <th>Resolved to Tag</th>
  </tr>
  <tr>
    <td>null</td>
    <td>tag:yaml.org,2002:null</td>
  </tr>
  <tr>
    <td>true or false</td>
    <td>tag:yaml.org,2002:bool</td>
  </tr>
  <tr>
    <td>-?(0 or [1-9[0-9]*)</td>
    <td>tag:yaml.org,2002:int</td>
  </tr>
  <tr>
    <td>-? ( 0 or [1-9] [0-9]* ) ( . [0-9]* )? ( [eE] [-+]? [0-9]+ )?</td>
    <td>tag:yaml.org,2002:float</td>
  </tr>
  <tr>
    <td>| Error</td>
    <td>tag:yaml.org,2002:int</td>
  </tr>
</table>

### Core Schema

Core Schema tags are same as that of JSON tags

**Tag Resolution**

Core Schema tag resolution is an extension of JSON tag resolution but the only difference is that the regular expressions matching the scalar non-specific tag. The following are the regular expressions that are used

<table>
  <tr>
    <th>Regular Expression</th>
    <th>Resolved to Tag</th>
  </tr>
  <tr>
    <td>null or Null or NULL</td>
    <td>tag:yaml.org, 2002:null</td>
  </tr>
  <tr>
    <td>/* Empty */</td>
    <td>tag:yaml.org, 2002:null</td>
  </tr>
  <tr>
    <td>true,True,TRUE,false,False and FALSE</td>
    <td>tag:yaml.org, 2002:null</td>
  </tr>
  <tr>
    <td>[-+]? [0-9]+</td>
    <td>tag:yaml.org, 2002:int (Base 10)</td>
  </tr>
  <tr>
    <td>0o [0-7]+</td>
    <td>tag:yaml.org, 2002:int(Base 8)</td>
  </tr>
  <tr>
    <td>0x [0-9a-fA-F]+</td>
    <td>tag:yaml.org, 2002:int(Base 16)</td>
  </tr>
  <tr>
    <td>[-+]? ( . [0-9]+ or [0-9]+ ( . [0-9]* )? ) ( [eE] [-+]? [0-9]+ )?</td>
    <td>tag:yaml.org, 2002:float(Number)</td>
  </tr>
  <tr>
    <td>[-+]? ( .inf or .Inf or .INF )</td>
    <td>tag:yaml.org, 2002:float(infinity)</td>
  </tr>
  <tr>
    <td>.nan or .NaN or .NAN</td>
    <td>tag:yaml.org, 2002:float(not a number)</td>
  </tr>
  <tr>
    <td>| tag:yaml.org, 2002:str(Default)</td>
    <td></td>
  </tr>
</table>
