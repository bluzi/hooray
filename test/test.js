import '../lib'

import test from 'ava'

const testObject = { test: 'testim', hello: 'world', whats: 'up', foo: 'bar' }

test('map() should be able to return all the keys', t => {
  const result = testObject.map(([key]) => key)
  t.deepEqual(result, ['test', 'hello', 'whats', 'foo'])
})

test('map() should be able to return the length of all the keys', t => {
  const result = testObject.map(([key]) => key.length)
  t.deepEqual(result, [4, 5, 5, 3])
})

test('reduce() should be able to return a srting with all the keys', t => {
  const result = testObject.reduce((acc, [key]) => acc + `${key},`, '')
  t.is(result, 'test,hello,whats,foo,')
})

test('reduce() should be able to sum the length of all the keys', t => {
  const result = testObject.reduce((acc, [key, value]) => acc + value.length, 0)
  t.is(result, 16)
})

test('every() should return true if all the conditions are true', t => {
  const result = testObject.every(([key]) => key !== undefined)
  t.true(result)
})

test('every() should return false if non of the conditions are true', t => {
  const result = testObject.every(([key]) => key === [])
  t.false(result)
})

test('some() should return true if at least one condition is true', t => {
  const result = testObject.some(([key, value]) => value === 'up')
  t.true(result)
})

test('some() should return false if none of the conditions are true', t => {
  const result = testObject.some(([key, value]) => value === 'down')
  t.false(result)
})

test('find() should return the found key and value as and object', t => {
  const result = testObject.find(([key]) => key === 'test')
  t.deepEqual(result, { test: 'testim' })
})

test('find() should return undefined if nothing is found', t => {
  const result = testObject.find(([key]) => key === 'm&m')
  t.is(result, undefined)
})

test('filter() should return the found keys and values as an object', t => {
  const result = testObject.filter(([key]) => key.length === 5)
  t.deepEqual(result, { hello: 'world', whats: 'up' })
})

test('filter() should return an empty object if nothing is found', t => {
  const result = testObject.filter(([key, value]) => key === 'whats' && value === 'bar')
  t.deepEqual(result, {})
})

test('forEach() should iterate through all keys and values of an object', t => {
  const result = {}

  testObject.forEach(([key, value]) => {
    result[key] = value
  })

  t.deepEqual(result, testObject)
})

test('forEach() should return undefined', t => {
  const result = testObject.forEach(() => true)
  t.is(result, undefined)
})
