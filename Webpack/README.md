# Webpack

![Webpack](./resources/webpack_1.png)

_Webpack_ is an open source module bundler for modern **JavaScript** applications. It takes modules with dependencies and generates static assets representing those modules

## When do you need Webpack?

Webpack is _good fit_ for a complex front-end application with non-code static assets like style sheets, images, etc

Webpack is not recommended for small web applications

## Why do need Webpack?

Based on the **_dependency_**, Webpack creates a **dependency graph** so as to give a modular approach to the web applications

_Code Splitting_ is an exciting feature that keeps Webpack distinct from all other module bundlers

## Goals of Webpack

![Goals of Webpack](./resources/webpack_2.png)

The Webpack goals are not limited to:

- Splitting the dependency tree into chunks loaded on demand
- Reducing initial load time
- Every static asset should be able to be a module
- Integrating Third party libraries as modules
- Ensuring each part of the module is customizable

_Webpack is very much suitable for large projects_

To save webpack only as dev dependency, we use the command given below

```
npm install webpack --save-dev
```
