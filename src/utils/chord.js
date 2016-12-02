export default {
  parse(text) {

  },
  serialize(chord) {

  },
  chordName(alpha, modifier, type, pitch, spec, rootKey) {
    let ret = `${alpha}`
    if (modifier) {
      ret += modifier
    }
    if (type !== 'major') {
      ret += 'm'
    } else if (spec === 6 || spec === 7 || spec === 9) {
      if (type === 'major2') { // 大小三和和弦，似乎对6、7和弦都有此区分
        ret += 'major'
      }
    }
    if (pitch) {
      ret += pitch
    }
    if (spec !== 3) {
      ret += spec
    }
    if (rootKey && rootKey != alpha + pitch) {
      ret += '/' + rootKey
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
      rootKey: {
        type: String,
        default: ''
      },
      width: {
        type: Number,
        default: 240
      }
    }
  },
  getConfigs(instrument, chordName) {
    if (this.configs[instrument] && this.configs[instrument][chordName]) {
      let configs = _.cloneDeep(this.configs[instrument][chordName])
      configs = configs.map(config => {
        config.positions = config.positions.split('').map(x => {
          if (x.toUpperCase() === 'X') {
            return x
          }
          return Number(x)
        })
        return config
      })
      return configs
    }
    return []
  },
  getChordFretScale(config) { // 和弦的品跨度
    let min = 100
    let max = 0
    for (let i of config.positions) {
      if ((i+'').toUpperCase() !== 'X' && i !== 0) {
        min = Math.min(min, i)
        max = Math.max(max, i)
      }
    }

    let ret = max -  (min === 0 ? min : min - 1)
    if (ret < 3) {
      ret = 3
    }
    return ret
  },
  configs: {
    guitar: {
      'C': [
        {
          start: 0,
          positions: '010230' // 1弦，2弦...6弦，若不可用则用x
        },
        {
          start: 2,
          positions: '355533'
        }
      ],
      'Cm6': [
        {
          start: 3,
          positions: '54550x'
        }
      ],
      'F': [
        {
          start: 0,
          positions: '112331'
        }
      ],
      'F♯': [
        {
          start: 1,
          positions: '223442'
        }
      ]
    }
  }
}