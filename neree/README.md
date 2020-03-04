# Installation de l'application
### Requirement : nodeJS has to be installed 
[@see Node.js](https://nodejs.org/en/) *follow recommended installation*
### Requirement :  Java_JDK 8, Android Studio and JDK Build Tool have to be installed
### Requirement : git bash is used as prefered shell to "push" on GitHub website
[@see Git Bash](https://gitforwindows.org/) *follow recommended installation*
**Install with npm**

*To initialize npm in project :*

 ```npm init```

*To initialize Ionic Angular Type in project :*

 ```ionic init "My App" --type=angular```

 #  Cordova Installation if it isn't installed in project

[@see installation cordova](https://cordova.apache.org/)

*Installation*
```bash
npm install cordova
```

*Creation a project*
```bash
./node_modules/.bin/cordova create MyApp
```
*Installation Cordova in project MyApp*
```bash
cd MyApp
npm install cordova
```

*Android platform installation*
```bash
./node_modules/.bin/cordova platform add android
```

*Run application on device*
```bash
./node_modules/.bin/cordova run android --device
```
 #  Application Get Started

 *Enter in neree folder of application*
 ```bash
cd neree
```

*To run application on http://localhost:8100*
 ```bash
npm start
```



