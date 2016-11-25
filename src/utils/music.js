import _ from 'lodash'

const majorDistance = [
  2, 2, 1, 2, 2, 2, 1
]

const minorDistance = [
  2, 1, 2, 2, 1, 2, 2
]

const allAlphas = [
  'C', ['C♯', 'D♭'], 'D', ['D♯', 'E♭'], 'E', 'F',
  ['F♯', 'G♭'], 'G', ['G♯', 'A♭'], 'A', ['A♯', 'B♭'], 'B'
]

export function majorOrMinor(c) {
  return c.charCodeAt(0) >= 97 ? 'minor' : 'major'
}

export function getMajors() {
  return ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
}

export function getMinors() {
  return ['g', 'a', 'b', 'c', 'd', 'e', 'f'];
}

/**
 * 获得指定调子的全部音符
 */
export function getScaleOfAlpha(a) {
  let i = _.indexOf(allAlphas, a.toUpperCase())
  let ret = [a.toUpperCase()]
  let seq = null
  if (majorOrMinor(a) === 'major') {
    seq = majorDistance
  } else {
    seq = minorDistance
  }
  ret = _.reduce(_.range(1, 7), (r, k) => {
    i = i + seq[k - 1]
    if (i>=allAlphas.length) {
      i = i - allAlphas.length
    }
    r.push(allAlphas[i])

    return r
  }, ret)

  return ret
}

export function getScaleOfSolfa() {
  return _.range(1, 8)
}

/**
 * a - 调名
 */
export function generateRandomAlphaSolfaPair(a) {
  let scale = getScaleOfAlpha(a)
  let rand = _.random(0, 6)
  return {a: scale[rand], s: rand + 1}
}

export function getChordPitches() {
  return {'♭': '♭', '': '(原调)', '♯': '♯'}
}

export function getChordTypes() {
  return {'major': '大调', 'minor': '小调'}
}

export function getChordSpecs() {
  return {3: '三和弦', 6: '六和弦', 7: '七和弦'}
}

export function getChordModifiers() {
  return {'': '(none)', sus: 'sus'}
}

export function generateRandomAlpha() {

}

export function generateRandomSolfa() {

}
