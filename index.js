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

// 默认导出
export default {
  ..._,
  deepClone,
  isIE,
  numSub,
  isEmail
}

// 批量导出
export {
  // 数组
  chunk, compact, concat, difference, differenceBy,
  differenceWith, drop, dropRight, dropRightWhile, dropWhile,
  fill, findIndex, findLastIndex, first, flatten,
  flattenDeep, flattenDepth, fromPairs, head, indexOf,
  initial, intersection, intersectionBy, intersectionWith, join,
  last, lastIndexOf, nth, pull, pullAll,
  pullAllBy, pullAllWith, pullAt, remove, reverse,
  slice, sortedIndex, sortedIndexBy, sortedIndexOf, sortedLastIndex,
  sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy, tail,
  take, takeRight, takeRightWhile, takeWhile, union,
  unionBy, unionWith, uniq, uniqBy, uniqWith,
  unzip, unzipWith, without, xor, xorBy,
  xorWith, zip, zipObject, zipObjectDeep, zipWith,

  // 集合
  countBy, each, eachRight, every, filter,
  find, findLast, flatMap, flatMapDeep, flatMapDepth,
  forEach, forEachRight, groupBy, includes, invokeMap,
  keyBy, map, orderBy, partition, reduce,
  reduceRight, reject, sample, sampleSize, shuffle,
  size, some, sortBy, 

  // 函数
  after, ary, before, bind, bindKey,
  curry, curryRight, debounce, defer, delay,
  flip, memoize, negate, once, overArgs,
  partial, partialRight, rearg, rest, spread,
  throttle, unary, wrap, 

  // 语言
  castArray, clone, cloneDeep, cloneDeepWith, cloneWith,
  conformsTo, eq, gt, gte, isArguments,
  isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean,
  isBuffer, isDate, isElement, isEmpty, isEqual,
  isEqualWith, isError, isFinite, isFunction, isInteger,
  isLength, isMap, isMatch, isMatchWith, isNaN,
  isNative, isNil, isNull, isNumber, isObject,
  isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet,
  isString, isSymbol, isTypedArray, isUndefined, isWeakMap,
  isWeakSet, lt, lte, toArray, toFinite,
  toInteger, toLength, toNumber, toPlainObject, toSafeInteger,
  toString,

  // 数学
  add, ceil, divide, floor, max,
  maxBy, mean, meanBy, min, minBy,
  multiply, round, subtract, sum, sumBy,

  // 数字
  clamp, inRange, random,

  // 对象
  assign, assignIn, assignInWith, assignWith, at,
  create, defaults, defaultsDeep, entries, entriesIn,
  extend, extendWith, findKey, findLastKey, forIn,
  forInRight, forOwn, forOwnRight, functions, functionsIn,
  get, has, hasIn, invert, invertBy,
  invoke, keys, keysIn, mapKeys, mapValues,
  merge, mergeWith, omit, omitBy, pick,
  pickBy, result, set, setWith, toPairs,
  toPairsIn, transform, unset, update, updateWith,
  values, valuesIn,

  // Seq
  chain, tap, thru,

  // 字符串
  camelCase, capitalize, deburr, endsWith, escape,
  escapeRegExp, kebabCase, lowerCase, lowerFirst, pad,
  padEnd, padStart, parseInt, repeat, replace,
  snakeCase, split, startCase, startsWith, template,
  toLower, toUpper, trim, trimEnd, trimStart,
  truncate, unescape, upperCase, upperFirst, words,

  // 实用函数
  attempt, bindAll, cond, conforms, constant,
  defaultTo, flow, flowRight, identity, iteratee,
  matches, matchesProperty, method, methodOf, mixin,
  noConflict, noop, nthArg, over, overEvery,
  overSome, property, propertyOf, range, rangeRight,
  runInContext, stubArray, stubFalse, stubObject, stubString,
  stubTrue, times, toPath, uniqueId, 

  // Properties & Methods
  VERSION, templateSettings

} from 'lodash'