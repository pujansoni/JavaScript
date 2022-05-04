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
