# cordova-hook-example

It's a very simple example of how to develop a hook for cordova in **Node.js**. In this case, the hook removes the **.psd** files before the compilation to reduce the apk size. This way, it's not necessary to extract from our project the files that we don't want to compile.

### config.xml

Add your script to the configuration file.

```xml
<platform name="android">
  <hook type="after_prepare" src="ignoreFiles.js" />
</platform>
```

### ignoreFiles.js

Edit script to change extensions and file paths.

```javascript
const blackListExtensions = ['psd'];
const blackListPaths = [
	'platforms\\android\\assets\\www\\assets\\images\\',
	'platforms\\android\\assets\\www\\assets\\images\\android\\'
];
```

You can see **cordova-hook-example** working in:
- https://github.com/AlejandroDiegoo/appest-reject
- https://play.google.com/store/apps/details?id=com.appestreject
