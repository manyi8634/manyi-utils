# 使用说明
- manyi-utils集成了lodash并对其进行了扩展

```js
import _ from 'manyi-utils'
或
import { isIE , chunk } from 'manyi-utils'

console.log(_.isIE()) // => true/false isIE为manyi特有
console.log(_.chunk(['a','b','c','d'], 2)) // => [['a', 'b'], ['c', 'd']] chunk为lodash方法

```
## 关于lodash
- manyi-utils集成了lodash，相关方法和lodash保持一致，目前依赖的lodash版本为`4.17.21`，后续lodash如有更新，我会看心情同步更新的~  使用文档请参考 [lodash官网](https://www.lodashjs.com)

## 关于manyi
| 方法      | 说明          | 参数     | 返回值                           |
|---------- |-------------- |---------- |--------------------------------  |
| deepClone     | 深拷贝           | T | T |
| isIE | 是否为ie浏览器 | - | Boolean |
| numSub | js小数相减精度丢失减处理| arg1:number,arg2:number | Number |
| isEmail | 正则校验email是否合法 |  arg:string | Boolean |
- 未完待续，持续更新中 ...
::: tip  Welcome
欢迎您的建言献策，我会将您提供的工具函数添加进去的~
:::