function fibo () {
  let cache = new Map()

  return function (num) {
    if (num <=0) {
      return 0
    } else if (cache.has(num)) {
      return cache.get(num)
    } else {
      let result = 
      cache.set(num, )
    }
  }

}