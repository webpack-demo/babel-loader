# babel-loader

```bash
$ cnpm i babel-loader @babel/core @babel/preset-env -D
```

1. 配置 babel-loader
2. .babelrc 文件配置转换规则

假设我们继续写这样一段代码：

```js
class Person {
  a = 1
  constructor () {
    this.age = 1
  }
}

const p = new Person()
console.log(p.a)
```

@babel/preset-env 会编译 class，但是对于 `a = 1` 这行代码它不认识。我们查看控制台提示

> Add @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.

安装完后，将其加入 .babelrc 的 plugins 里
