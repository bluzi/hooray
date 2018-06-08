const entries = Object.entries || (obj => {
  const result = []

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      result.push([key, value])
    }
  }

  return result
})

const methods = [
  'map',
  'reduce',
  'reduceRight',
  'every',
  'some',
  'find',
  'filter',
  'forEach'
]

methods.forEach(method => {
  if (Array.prototype[method] && Array.prototype[method].apply) {
    Object.prototype[method] = function () {
      return Array.prototype[method].apply(entries(this), arguments)
    }
  }
})

if (Object.prototype.filter) {
  const f = Object.prototype.filter
  Object.prototype.filter = function () {
    const result = {}
    f.apply(this, arguments).forEach(([key, value]) => {
      result[key] = value
    })
    return result
  }
}

if (Object.prototype.find) {
  const f = Object.prototype.find
  Object.prototype.find = function () {
    const result = f.apply(this, arguments)
    if (result) {
      return {[result[0]]: result[1]}
    }
    return result
  }
}
