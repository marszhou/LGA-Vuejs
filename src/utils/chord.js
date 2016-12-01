export default {
  parse(text) {

  },
  serialize(chord) {

  },
  chordName(alpha, modifier, type, pitch, spec, lowKey) {
    let ret = `${alpha}`
    if (modifier) {
      ret += modifier
    }
    if (type !== 'major') {
      ret += 'm'
    }
    if (pitch) {
      ret += pitch
    }
    if (spec !== 3) {
      ret += spec
    }
    if (lowKey && lowKey != alpha + pitch) {
      ret += '/' + lowKey
    }
    return ret
  },
  commonProps: () => {
    return {
      instrument: {
        type: String,
        default: 'guitar' // ukulele
      },
      alpha: { // 和弦
        type: String,
        default: 'C'
      },
      type: { // 类型
        type: String,
        default: 'major'
      },
      modifier: { // 修饰
        type: String,
        default: ''
      },
      pitch: { // 音高
        type: String,
        default: ''
      },
      spec: { // 3、6、7？
        type: Number,
        default: '',
        coerce: function(v) {
          return Number(v)
        }
      },
      width: {
        type: Number,
        default: 240
      }
    }
  },
  configs: {
    guitar: {
      'C': [{
        start: 0,
        positions: '010230' // 1弦，2弦...6弦，若不可用则用x
      }]
    }
  }
}