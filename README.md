---
cnpm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest -D

.babelrc
{
    "presets":["es2015", "latest"],
    "plugins":[]
}

装饰器
npm install babel-plugin-transform-decorators-legacy -D
.babelrc
{
    "presets":["es2015", "latest"],
    "plugins":["transform-decorators-legacy"]
}