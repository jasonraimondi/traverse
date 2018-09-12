<h1 align="center">
  	<img height="100" src="https://res.cloudinary.com/jmondi/image/upload/c_scale,w_150/v1534475620/jasonraimondi.com/traverse/pointing.png" alt="Traverse" /> 
  	<br /> The Build
</h1>

# Why Webpack + Electron?

You can obfuscate a project, it is not much, but it is something. 

## Build  

We have broken our Webpack build into two parts, the main and the renderer. We set the [webpack `target` output](https://webpack.js.org/configuration/target/) to 'electron-main' and 'electron-renderer' for each the main and renderer files located in our source directory.

### Main

Source: [here](./webpack.main.ts) 

Compile for [Electron main](https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes) process.

```
{
  target: 'electron-main',
  node: {
    __dirname: false,
    __filename: false,
  }
}
```

For our Webpack main process configuration, we need to add resolutions to the our node env. This resolves an issue Webpack brings up in electron where Webpack, by default, tries to "mock" Node globals like __dirname. 

[This thread](https://github.com/electron/electron/issues/5107#issuecomment-229396204) goes into more detail.

### Renderer

Source: [here](./webpack.renderer.ts) 

Compile for [Electron renderer](https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes) process.

Our main process does not need to worry about style bundling, because of this we leave it out of our Webpack base configuration. We are adding support for css as well as generic images including png, svg, gif, and svg's. 

Our main process also bundles our styles and main html file.
