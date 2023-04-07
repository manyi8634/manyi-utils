/**
 * @param {T} obj
 * @returns {T}
 * @description 深拷贝
 */
export function deepClone(obj) {
  if (typeof obj !== "object" || obj == null) { // 判断传进来的参数类型不是对象数组 或者是null时 直接返回
    return obj
  }
  let result // 定义返回值
  if (obj instanceof Array) {  // 判断传进来的数据类型 是数组/对象 就给result一个数组/对象
    result = []
  } else {
    result = {}
  }
  for (let key in obj) { // 循环遍历方便拷贝
    if (obj.hasOwnProperty(key)) {  // 判读自有属性
      result[key] = deepClone(obj[key])  // 函数递归实现深层拷贝
    }
  }
  return result
}

/**
 * @returns {Boolean}
 * @description 是否为IE浏览器
 */
export function isIE(){
  const userAgent = navigator.userAgent.toLocaleLowerCase()
  const ie = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('msie') > -1
  const ie11 = userAgent.indexOf('trident') > -1 && userAgent.indexOf('rv:11.0') > -1
  // const edge = userAgent.indexOf('Edge') > -1 && !ie  // 判断是否IE的Edge浏览器
  return ie || ie11
}

/**
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number}
 * @description js小数相减精度丢失减处理
 */
export function numSub(arg1,arg2){ 
  let r1,r2,m,n; 
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
  m=Math.pow(10,Math.max(r1,r2))
  n=(r1>=r2)?r1:r2
  return ((arg1*m-arg2*m)/m).toFixed(n); 
}

/**
 * @param {string} email
 * @returns {Boolean}
 * @description 正则验证Emai格式是否合法
 */
export function isEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}


// 合并lodash,对lodash进行扩展
import _ from 'lodash'

export default {
  ..._,
  deepClone,
  isIE,
  numSub,
  isEmail
}