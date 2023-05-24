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

### deepClone
- 说明：对数据进行深拷贝
- 参数：T
- 返回值: T
- 示例代码
```js
const obj = {a:undefined,b:()=>{}}
const newObj = deepClone(obj)
```
### isIE
- 说明：判断当前浏览器是否为ie
- 参数：-
- 返回值: Boolean
- 示例代码
```js
const bool = isIE()
console.log(bool)  // true/false
```
### numSub
- 说明：js小数相减精度丢失减处理
- 参数：arg1:number,arg2:number
- 返回值: Number
- 示例代码
```js
const num1 = 1-0.33 
console.log(num1)  // 0.6699999999999999

const num2 = numSub(1,0.33)
console.log(num2)  // 0.67
```
### isEmail
- 说明：判断邮箱是否合法
- 参数：arg:string
- 返回值: Boolean
- 示例代码
```js
const str = 'manyicode@163.com'
const bool = isEmail(str)
console.log(bool)  // true/false
```

::: tip  Welcome
欢迎您的建言献策，我会将您提供的工具函数添加进去的~
:::