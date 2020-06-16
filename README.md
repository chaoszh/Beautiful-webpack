# <img src="./readme/logo.png" style="height: 30px"/>

 ![Me](https://img.shields.io/badge/author-chaoszh-15b6e8?style=flat-square)
 [![GitHub license](https://img.shields.io/github/license/File-New-Project/EarTrumpet?style=flat-square)]() ![Maintenance status](https://img.shields.io/maintenance/yes/2020?style=flat-square)


## 🍊Features

* Support command line interfaces.
* Define a single file, supports multiple entries.
* Define a public path, pack all of them in a chunk.

## 🔨Install

```
npm i beautiful-webpack --save-dev
```

## 📕Documentation

### 📃getting start

#### beautiful-webpack初始化

安装beautiful-webpack后，首先进行初始化，执行命令

```
npx b-webpack init
```

根目录将出现beautiful-webpack的默认配置文件，可以按照下面[配置文件说明](###configuration)对它进行配置。

#### beautiful-webpack打包

Beautiful-webpack的打包可以通过命令行执行，使用如下命令

```
npx b-webpack build
```

将通过beautiful-webpack的配置文件对webpack的打包进行处理，产出最终的静态代码。

或者也可以直接使用webpack进行打包。只需要将config改为beautiful-webpack的配置文件路径即可，示例命令如下

```
npx webpack --config [config]
```

### 📃configuration

#### 最简单的配置文件示例

```js
const makeup = require('beautiful-webpack/lib/make-up-config')
config = {
    mode: 'development',
    webpack_config: './webpack.config.js',
    entry: {
        index:{
            mode: 'singular',
            in: './app/index.js',
    },
    output_path: './dist',
}
module.exports = makeup(config);
```

- **mode**：可选值development（开发环境）/production（部署环境），对应webpack.config.js的mode参数。
- **webpack_config**：webpack的配置文件模板路径，使用项目根目录的相对路径表示。
- **entry**：entry定义项目的所有chunks。
- **output_path**：output_path定义项目打包出口的根目录。

#### entry的配置

```js
config.entry: {
    index:{
        mode: 'singular',
        in: './app/index.js',
        out: './index'
    },
    lib:{
        mode: 'combination',
        in: './app/lib/**.js',
        out: './lib'
    }
}
```

- **index/lib**：entry的对象名字，除了保留值`vendor`之外用户可以自定义。
- **mode**：可选值singular（入口文件）/combination(组合chunk)。singular用于提取web项目入口文件，
- **in**：用于匹配文件的表达式，所有成功匹配上表达式的文件都会被打包成为一个公共的chunk。
- **out**：定义公共chunk的输出名字（不需要加.js）。在未定义的情况下，将会默认创建一个与entry对象名字相同的chunk。

## 👩‍💻My links
[![GITHUB](http://img.shields.io/badge/caocao's%20space-github?&style=social&logo=Bitrise)](http://www.caocao.space)
[![GITHUB](http://img.shields.io/badge/chaoszh-github?&style=social&logo=Github)](https://github.com/ChaosZh)