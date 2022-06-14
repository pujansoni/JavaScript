npm init - it's the base command to initiate the package.json file

After entering the command, whatever the name we enter for the package is the name of the package when/if we publish it.

Adding package locally v/s globally:
Adding package locally will install the package in the project's directory. When we install globall it will be installed in the system which is available to all of the projects

Syntax to install a package: npm install package-name
e.g. npm install express

After installing the package we will see the node-modules folder which will contains all the dependencies of the package

To use some of the npm packages while developing the project, but we don't want those dependencies/packages in the final project/production build then we use the flag --save-dev which will install those package as the dev tools which will be used during the development but won't be available during the final project
e.g. npm install babel-cli babel-preset-stage-0 babel-preset-es2015 --save-dev
Here we are installing different dependencies by using the spacing in between different packages

We can observe in the package.json file that after installing these dependencies we can see them under the "devDependencies" property

Global Directories:
Unix-based systems (Mac/Linux):
-> /usr/lobal/lib/node_modules OR
-> /usr/local/lib/node

Windows 7 or later:
-> %AppData%\npm\node_modules

When we install the packages globally then the packages will sit in these directories. Sometimes, we need some packages to be available globally

Same Commands for Global Installs:
We can use -g or -global
e.g. npm install -g react

Sometimes these command will not run on the Linux O.S. for which we can use the sudo keyword before the command
e.g. sudo npm install -g react

Links to follow if experiencing any issues with the global install:
https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
https://stackoverflow.com/questions/19874582/change-default-global-installation-directory-for-node-js-modules-in-windows

To install the specific version we use the command: npm install eslint@5.2.0 -g

To check for the outdated packages locally we use the command: npm outdated

To check for the outdated packaged globally we use the command:
npm outdated -g

To update the packages we use the command: npm update eslint
Sometimes the update command does not work, so we can use the command: npm install eslint

To install the latest version globally we use the command: npm install eslint -g

To install the outdated version globally we use the command: npm outdated -g

To uninstall a package we use the command: npm uninstall babel-preset-es2015

Semantic versioning: To understand the semantic versioning for a package e.g. "express": "^4.18.1". Here 4 represents the Major release, 18 represents the Minor release, and 2 represents Patch releases. Moreover, the Caret(^) means all minor and patches OK. Tilde(~) means all the patches only. To install a specific version we don't use the Tilde or Caret

Whenever we install a package there's a new file i.e. package-lock.json available. If we have a new project and we have both the package.json and the package-lock.json file available then we won't have any issue with the version of the software we are using i.e. if the package.json contains the dependency "express": "^4.18.1" and if there's a new version available then as we have Caret(^) before the version it will install the newer dependency if the package-lock.json file is not available. However, if we have the package-lock.json file available and it specifies the version "express": "^4.18.1" then it will install the exact version.

npm keeps the cache of the installed dependency so that it does not need to fetch it every time. But that can sometime leads to unexpected results. We can clear the cache as sometimes npm cache gets confused. It is always one of the preferred troubleshooting steps when working with node modules. Since npm 5 the cache self heals but it's not full proof

npm cache verify: This command will verify the cache

npm cache clean --force: This command is used to clean the cache. We have to include the --force flag as while cleaning it as if we ignore the flag then it won't clean the cache and prompts an error saying that the cache self heals

To check if all the dependencies are safe to use we can use the command: npm audit
In order to audit the dependencies we need to have the npm version >= 6. We can check the version of the npm with the command: npm -v
To install the latest version we can use the command: npm install npm

By visiting the site: docs.npmjs.com/misc/scripts
Here we can see all the options that we can see that we can use with the scripts.
By default we see the test script if we run the npm init command.
Let's install the nodemon which is a utility to restart a node server when we make changes to the code.
e.g. npm install nodemon

Now we have to modify the package.json file and remove the "test" from "script" and write "start": "nodemon ./index.js --exec babel-node -e js"

Now, if we run the command: npm start
then it will run as if we have enter the command: nodemon ./index.js --exec babel-node -e js

Here we are running the same command by writing less code. This is only possible if we are using the presets that comes with npm. Here we can also enter a line like: "nodemonthis": "nodemon ./index.js --exec babel-node -e js"
inside the script but then we have to run the command: npm run nodemonthis

Here what this command will temporary install the package specified after the -p command i.e. @angular/cli in this case and then use the command from that package to create a new app:
npx -p @angular/cli ng new myapp

To know more about npx we can visit the link: www.npmjs.com/package/npx

To check the locally installed modules we can use the command: npm ls
To check the globally installed modules we can use the command: npm ls -g

# NPM - Package Manager

The individual file of a reusable code is called **Module**

A Package is a directory which contains one or more modules along with a file called package.json

**Note: The terms module and package are used interchangeably**

### Package Manager

A Package Manager, as the name suggests, helps developers share packages, install packages and manage version upgrades.

There are many package managers like Bower and npm that developers can use.

**Why so many Package Managers?**

Every package manager is built for a specific purpose. So developers need to choose packages based on their need.

For example, **Bower** is built specifically for front-end libraries like jquery, angular, bootstrap, and so on. It works on the principle of minimal resource load which is essential for your front-end to load quickly.

On the other hand, **npm is mostly used for node.js packages and developer tools** like Grunt, Gulp, CoffeeScript and so on. npm aims for stability and hence loads all nested dependencies of a package.

## Getting Started with npm

npm, by default, comes with NodeJS.

Working with npm is simple. Type npm followed by the command. To start with, find the version of npm by using the command "v" or "version"

```
> npm -v
```

You should now be able to see the version of npm

npm offers good help features. To view Help, type the following command

```
> npm help
```

**This will detail the usage of npm along with the list of commands available.**

Using npm with "-h" on any specific command will provide the different ways in which a specific command can be used

```
> npm -h search
```

### Searching for a Package

npm registry has over 500,000 packages. So, finding the required package can be daunting if you don't know the exact package name. The different ways to search for the package are as follows:

- Use the command **"npm search"** on your terminal
- Go to [**npmjs.com**](https://www.npmjs.com/) and find package
- Go to [**google.com**](https://www.google.com/) and search for the package

### Tips for Package Selection

While search results might return many packages, here are few points to consider while selecting a package:

- Frequency of Updates
- Availability of Documentation
- Number of Downloads
- Dependencies
- Collaborators

### Installing a Package Locally

If a package is required just for a specific project, you can **install the package locally** using:

```
> npm install <package name>
```

For example, running "npm install redux-thunk" will create a new folder **node_modules**. Inside this, another folder **redux-thunk** will be created

This folder will contain all **Redux Thunk** related files such as source code, license, readme file and package.json

## Installing a Package with Dependencies

Usually, packages contain references to a number of other packages. npm, by default, installs all the inner dependencies(packages) while installing a package

- For example, try to install "request"

Along with request, other dependencies like **safe-buffer, safer-buffer** also get installed

- Inside the **node_module/request** folder, navigate to the **node_module** folder created

You will find that the folder contains files related to these packages

### Uninstalling Packages

You can uninstall packages using the command **npm uninstall \<package name\>**

When the first package is uninstalled, that specific folder is deleted from the **node_modules** folder

Once all packages are uninstalled, even the **node_modules** folder is automatically deleted from the project

## Installing Packages Globally

npm, by default, installs packages and their dependencies locally. The functions of these packages can be directly referenced within the application

However, **certain packages like grunt, bower, karma, jshint and so on, need to be installed in a global context** so that they can be used in CLI function in node.js

Packages can be installed by using **-g or --global** commands

```
> npm install <package name> -g
```

**Note: Packages that are installed globally can not be referred from within the application**

### What happens during global installation?

When you install a package globally:

- It downloads the files into the global node_modules directory
- It also creates the command in the bin directory and links it to the package
- Now, run **npm config get prefix**. This shows exactly where these node_modules and bin directories are

### Permissions for Global Installation

While installing packages globally, if the permissions are not set correctly, you might run into EACCES error

Easy way to fix the error is to use:

In Linux:

```
sudo npm install <package name> -g
```

In Windows:

- Go to the **Environment Variables** under Properties from My Computer
- Find **NODE_PATH** under **System Variables**
- Set the folder path to the **npm** directory

However, the correct way to fix the error is to set the permissions correctly

### Fix npm Permissions

There are many ways to fix permissions while installing packages globally

**Option 1:** Ensure your user has permission to write to the correct directories

**Option 2:** Configure a directory for your user and install all global dependencies there

## Semantic Versioning in npm

npm follows Semantic Versioning (semver) for its packages

Semantic Versioning is a specification where a version is represented by three numbers that represent **major/minor/patch version numbers**

### Understanding Version Numbers

Consider a package "lodash 4.17.2". Here, 4 represents **major version number**, 17 represents **minor version number** and 2 represents **patch version number**

- **Major Version number**: Gets incremented when **new features that are not backward compatible** are introduced. E.g.: Angular 1, Angular 2
- **Minor Version number**: Gets incremented when a **new feature** is added and does not break any of the existing functionalities
- **Patch Version number**: Gets incremented whenever a **bug fix or other minor updates are done**

### Installing the Right Version

Sometimes you may want a specific version of a package and not the latest one. In such cases, you can use the following approach.

- Install package with a specific major, minor version, and the latest patch version

```
> npm install react@15.5 --save
```

- Install a specific major version and the latest minor and patch version

```
> npm install react@15 --save
```

- Install the latest version

```
> npm install react --save
```

### Checking for Outdated Packages

You should update the packages often so that new features that come with every release of the package are available for use in the project

For this, first you will need to check if there are any dependency packages that are not the latest

```
> npm outdated
```

This will list all **outdated packages**, along with the current and latest version of the packages available

Run this command in the folder "maxbot" which has the package.json and observe

### Updating Packages

Running **npm update** from the project directory will update all packages in the project to the latest version

However, it is possible that you may not want the latest version for all dependency packages. In such cases, you can update a specific package

```
// Update all dependencies and dev dependencies
> npm update
// Update a specific package to latest version
> npm update lodash --save
// Update just the dev dependencies
> npm update --dev --save-dev
// Update all packages globally
> npm update -g
// Update npm to latest requires administrative privileges
> npm install npm@latest -g
```

## Understanding package.json

Before we create a package, we should be familiar with package.json file

package.json is a file that holds package metadata and gives information to npm when you execute the command "npm view"

- To start with, install the "react" package
- Open package.json file and scan through the details in the file

**At this point, we may not understand everything in package.json. However, we can clearly notice the following:**

- Name, version, license type, source code repository
- In **dependencies** we can view the list of other packages that react depends on
- In **maintainers** we can view the various authors/collaborators for the package

### Creating your Own Package

So far, we have consumed packages available in the npm registry

Considering we have multiple developers in the team working on a project **MaxBot**. All of them need to have the same setup in their local

**So, try to create your own package "maxbot"** with the software that the project needs. This package can then be used by rest of the team

Assume MaxBot requires

- bootstrap version 3.2.0
- latest version of react
- latest version of jasmine for testing in dev

### Creating package.json

First, create a directory "maxbot" using the following command:

```
> mkdir maxbot
> cd maxbot
```

This is the directory where all project dependencies will be installed. Now, create a package.json file using:

```
> npm init
```

We will need to answer a series of questions. By the end of this, we can see a **package.json** file created in "maxbot" folder

### Installing a Specific Version of Bootstrap

By default, npm installs the latest version of a software. However, sometimes you might want to use an older and more stable version of the software. For you project, you will need to install bootstrap 3.2.0

We can check for the bootstrap versions available and install the required version

```
// View the latest version
> npm view bootstrap version
// View all available versions
> npm view bootstrap versions
// Install required version
> npm install bootstrap@3.2.0 --save
```

We can notice that an entry is made in the **dependencies** section of the package.json file

**Note: --save ensures the application dependencies are added in package.json file**

### Installing the Latest Version of React

Now, install the latest version of react

```
> npm install react --save
```

You will notice that react has dependency on a number of other packages. Hence many other packages are also installed in
**"maxbox/node_module/react/node_module"**

```
// This will list all packages installed for the maxbot project
> npm list
```

### Installing Jasmine for Dev

Finally, you will want to use the testing framework **jasmine** in dev. However, you do not need this package to be installed when the project moves to production

Go ahead and install jasmine and use the command --save-dev

```
> npm install jasmine --save-dev
```

You will notice that jasmine is registered as a dependency for development in package.json file under **devDependencies** section

### Now we are all Set!

Go ahead and distribute your package with other developers in your team

At any point in time, you can view the version of software used by your project using:

```
> npm list
```

This lists the entire tree of dependency packages installed. You can restrict the number of branches shown, using the command **--depth**

```
> npm list --depth 0
> npm list --depth 1
```

## Naming your Package

The first step towards publishing is to **name your package**

It is recommended to keep the package name simple, easy to remember and relevant to its functionality. A few popular npm packages are:

- express
- request
- async

**Note:** Package names should be unique. To check if a package name has been taken, plug the package name to the following URL: http://www.npmjs.com/package/packagename

## Creating a User

To publish a package, you need to have access to the npm Registry

- Create a User directly from the CLI. Enter the username, password and e-mail address, when prompted

```
npm adduser
```

- Check if user details have been stored locally

```
npm config ls
```

- To check if the user is created on the registry, go to: https://www.npmjs.com/~username

### Publishing the Package

Once you create the user, execute **npm publish** command from the package folder. This will upload the package into the npm registry

- Unless ignored by a local .gitignore or .npmignore file, everything in the directory will be included
- The package will not be published if there is an existing package with the same name
- To check if the package is published, go to
  - [https://www.npmjs.com/package/packagename](https://www.npmjs.com/package/packagename)

### Updating the Package

You can update the package using **npm version <update_type>**

Here, update_type is one of the semantic versioning release types - patch/minor/major

- This command updates the version number in package.json
- Once the version number is updated, use **npm publish** to update the package
- To check if the updated package is published, go to https://www.npmjs.com/package/packagename

Note: The **README** displayed on the site will not be updated unless a new version of a package is published. So you need to run **npm version patch** and **npm publish** to have a documentation fix displayed on the site

### Package Documentation

Every package should have a **README.md** file where you will explain what the package is for and give instructions on how to use it

This is useful for others to get a quick understanding on the package and to decide on which package to use

Also, the content in the README.md needs to be in Markdown for better readability

## Scoped Packages

**Scope** is like a namespace for a package. A user or an organization can opt to have all their packages published under one scope

Scope folder is referred as "@" followed by the name of the scope like username/an organization

**@scopename/packagename**

With over 500,000 packages already registered in the npm registry, scoped packages will allow users to worry less about a package name being already taken

Note: Scoped modules, require a version of npm greater than 2.7.0

### Using a Scoped Package

Installing a scoped package

```
npm install @scopename/packagename -save
```

Configuring package.json:

```
{
    "dependencies": {
        "@scopename/packagename": "^1.0.0"
    }
}
```

Using in a require

```
var mypackage = require("@scopename/packagename")
```

### Initializing a Scoped Package

While creating a scoped package using **npm init**, add the created scope as an option to that command

```
npm init --scope=scopename
```

In the package.json file, refer the package name as:

```
{
    "name": "@scopename/packagename"
}
```

### Publishing a Scoped Package

- By default, the scoped packages are private. Publishing and downloading private modules requires a paid subscription to npm registry
- However, public scoped modules don't require a paid subscription. They are free. To publish a public scoped module, set the access option while publishing it

```
npm publish --access=public
```

### Private Packages in npm

All scoped packages in npm are published as private by default. **These packages are in private scope with access restricted to few users, who can collaborate to build/use the package**

To publish a package as private:

```
> npm publish
// OR
> npm publish --access restricted
```

These packages can be used along with the public packages in the same project without any issues

To change a package from a public to private scope

```
> npm access restricted <package_name>
```

This will ensure that the package is removed from listings on the site

## Useful npm Commands

Here are a few npm commands that are popularly used:

### npm Prune

npm prune is a way to clean up your package. During development, you might end up installing packages to try something and later against using it

**Prune is a way to remove all those packages that are not listed as dependencies in the package.json file**

To list all packages that are used by the project as well as the ones installed and not in use

```
> npm list --depth 0
```

Run the prune command to remove/unbuild all packages that were identified as extraneous

```
> npm prune
```

### npm Search

npm search command searches the registry and package metadata and returns packages matching the search terms

```
Syntax: npm search [-l|--long] [--json] [--parseable] [--no-description] [search terms ...]
```

**Options used to filter and format search results:**

- **--no-description**: Omits search on package description
- **--json**: Returns results as a JSON array
- **--parseable**: Returns results as rows with tab-separated columns
- **-long**: Displays entire package details across multiple lines. When disabled, results are neatly fit into a single line
- **searchexclude**: Displays options separated by space and filters the search results
- **Ending a search term with ~ (eg: rea~)**: Returns all packages starting with "rea"

### npm Dedupe

npm installs the entire dependency package tree by default. However, when you install multiple packages for a project, there is a high possibility of same package being installed multiple times, owing to it being an inner dependency for multiple packages

**This behavior slows down the project installation**

This is where **npm dedupe** comes to rescue

**npm dedupe** searches the local package tree and reduces duplicates by moving dependencies further up the tree

### npm shrinkwrap

npm shrinkwrap locks down the version numbers of installed packages and their descendant packages

It helps you to use same package versions on all environments (development, staging, production) and also **improve download and installation speeds**

You can execute **npm shrinkwrap** after installing packages using npm install. This will create a new **npm-shrinkwrap.json** file with information like package version and the descendant packages being used

### npm run

While npm is a great package manager, it has the capability to run tasks in a packages lifecycle, making it a great tool for build scripts. It can very well do all that the build tools like grunt and gulp can do, with less maintenance overhead

```
> npm run <args>
```

**Arguments in the npm run refer to property in the scripts object** configured in package.json file. This will execute the value of the property as a command in the operating system's default shell

### npm run example

Consider scripts module in package.json file:

```
"scripts": {
    "patch-release": "npm version patch && npm publish && git push --follow-tags"
}
```

Running "npm run patch-release" will update the version in package.json, commit the change, publish the changed package to npm and push the changes to GitHub. Note: **npm run** can be used not only on the globally available commands, but also on the modules installed as dependencies

### npm run - build example

Here is another example that depicts the usefulness of the npm run command

```
"scripts": {
    "build": "...",
    "git-commit": "git add -A . && git commit -a -m 'gh-pages update'",
    "git-push": "git push origin gh-pages --force && git checkout master",
    "deploy": "npm run build && npm run git-commit && np run git-push"
},
```

With this script, deploying your project is as easy as running **npm run deploy**
