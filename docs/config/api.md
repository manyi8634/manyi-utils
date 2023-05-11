# 使用说明
- manyi-utils集成了lodash并对其进行了扩展

# 使用方法
```js
import { deepClone } from 'manyi-utils'
或
import manyi from 'manyi-utils'
manyi.deepClone(...)

支持lodash (version 4.17.21)用法，并对lodash进行了增强
import _ from 'manyi-utils'
```

## api说明
| 方法      | 说明          | 参数     | 返回值                           |
|---------- |-------------- |---------- |--------------------------------  |
| deepClone     | 深拷贝           | T | T |
| isIE | 是否为ie浏览器 | - | Boolean |
| numSub | js小数相减精度丢失减处理| arg1:number,arg2:number | Number |
| isEmail | 正则校验email是否合法 |  arg:string | Boolean |

::: tip
欢迎您的建言献策，我会将您提供的工具函数添加进去的~
:::