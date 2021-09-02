[![npm version](https://badge.fury.io/js/graphql-tag.svg)](https://badge.fury.io/js/graphql-tag)

# graphql-compress-loader
A loader to compress graphql query before loaded into graphql-tag

## Install

```bash
npm install --save-dev graphql-compress-loader
```

## Usage

**webpack.config.js**
```js
module.exports = {
  module: {
    loaders: [
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: ['graphql-tag/loader', 'graphql-compress-loader']
    ]
  }
}
```

**vue.config.js**
```js
chainWebpack: config => {
  config.module
    .rule('graphql')
    .test(/\.graphql$/)
    .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
    .use('compress')
      .loader('@bluexlab/graphql-compression-loader')
      .end()
},
```
