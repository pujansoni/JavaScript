# Node JS

**Difference between Browser and Node.js**

    Browser				Node.js

- DOM No DOM
- Window No Window
- Interactive Apps Server Side Apps
- No Filesystem Filesystem
- Fragmentation Versions
- ES6 Modules CommonJS

To open the REPL we write **node** on the terminal

## NPM

- npm - global command, comes with node

```
npm --version
```

- local dependency - use it only in this particular project

```
npm i <packageName>
```

- global dependency - use it in any project

```
npm install -g <packageName>
sudo npm install -g <packageName> (mac)
```

- package.json - manifest file (stores important info about project/package)
  1.  manual approach (create package.json in the root, create properties etc)
  2.  npm init (step by step, press enter to skip)
  3.  npm init -y (everything default)

**Note: We always need to install the external dependencies before we use it in the project**
