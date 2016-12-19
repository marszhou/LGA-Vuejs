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
    if (type === 'minor') {
      ret += 'm'
    } else if (spec === 6 || spec === 7 || spec === 9) {
      if (type === 'major2') { // 大小三和和弦，似乎对6、7和弦都有此区分
        ret += 'maj'
      }
    }
    if (pitch) {
      ret = pitch + ret
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
      displayTitle: {
        type: Boolean,
        default: false
      },
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
        config.positions = config.positions.split('-').map(x => {
          if (x.toUpperCase() === 'X') {
            return x
          }
          return Number(x)
        })
        config.start = config.start || 0
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
          positions: '0-1-0-2-3-0' // 1弦，2弦...6弦，若不可用则用x
        },
        {
          start: 2,
          positions: '3-5-5-5-3-x'
        },
        {
          start: 7,
          positions: '8-8-9-10-x-x'
        },
        {
          start: 7,
          positions: 'x-x-9-10-10-8'
        },
        {
          start: 7,
          positions: '8-8-9-10-10-8'
        }
      ],
      'Cm': [
        {
          start: 2,
          positions: '3-4-5-5-3-3'
        }
      ],
      'C7': [
        {
          start: 0,
          positions: '0-1-4-2-3-0'
        }
      ],
      'Cm7': [
        {
          start: 2,
          positions: '3-4-3-5-3-3'
        }
      ],
      'C6': [
        {
          start: 0,
          positions: '0-1-0-2-0-0'
        }
      ],
      'Cmaj7': [
        {
          start: 0,
          positions: '0-0-0-2-3-0'
        },
        {
          start: 6,
          positions: '7-8-9-10-x-x'
        }
      ],
      'C9': [
        {
          start: 0,
          positions: '0-3-0-2-3-0'
        }
      ],
      'Csus4': [
        {
          start: 0,
          positions: '1-1-0-2-3-0'
        }
      ],
      'Cm6': [
        {
          start: 3,
          positions: '5-4-5-5-0-x'
        }
      ],
      '♯C': [
        {
          positions: '1-2-1-3-4-1'
        }
      ],
      '♯Cm': [
        {
          start: 3,
          positions: '4-5-6-6-4-4'
        }
      ],
      '♯C7': [
        {
          start: 3,
          positions: '4-6-4-6-4-4'
        }
      ],
      '♯Cm7': [
        {
          start: 3,
          positions: '4-5-4-6-4-4'
        }
      ],
      '♯C6': [
        {
          positions: '1-2-1-3-1-1'
        }
      ],
      '♯Cm6': [
        {
          start: 4,
          positions: '6-5-6-6-x-x'
        }
      ],
      '♯Cmaj7': [
        {
          positions: '1-1-1-3-4-1'
        }
      ],
      '♯C9': [
        {
          start: 3,
          positions: '4-6-4-6-6-4'
        }
      ],
      '♯Csus4': [
        {
          start: 3,
          positions: '4-7-6-4-4-4'
        }
      ],
      'D': [
        {
          start: 0,
          positions: '2-3-2-0-0-x'
        }
      ],
      'D6': [
        {
          start: 0,
          positions: '2-0-2-0-0-x'
        }
      ],
      'Dm6': [
        {
          start: 0,
          positions: '1-0-2-0-0-x'
        }
      ],
      'Dmaj7': [
        {
          start: 0,
          positions: '2-2-2-0-0-0'
        }
      ],
      'D9': [
        {
          positions: '0-3-2-0-0-0'
        }
      ],
      'Dsus4': [
        {
          positions: '3-3-2-0-0-0'
        }
      ],
      '♯D': [
        {
          start: 2,
          positions: '3-4-3-5-6-3'
        }
      ],
      '♯Dm': [
        {
          start: 1,
          positions: '2-4-3-4-x-x'
        }
      ],
      '♯D7': [
        {
          positions: '3-2-3-1-x-x'
        }
      ],
      '♯Dm7': [
        {
          positions: '2-2-3-1-x-x'
        }
      ],
      '♯D6': [
        {
          positions: '2-1-3-1-1-x'
        }
      ],
      '♯Dmaj7': [
        {
          positions: '3-3-3-1-1-x'
        }
      ],
      '♯Dm6': [
        {
          positions: '2-1-3-1-1-x'
        }
      ],
      '♯D9': [
        {
          positions: '1-4-3-1-1-1'
        }
      ],
      '♯Dsus4': [
        {
          positions: '4-4-1-1-1-1'
        }
      ],
      'E': [
        {
          positions: '0-0-1-2-2-0'
        }
      ],
      'Em': [
        {
          positions: '0-0-0-2-2-0'
        }
      ],
      'E7': [
        {
          positions: '0-3-1-2-2-0'
        }
      ],
      'Em7': [
        {
          positions: '0-3-0-2-2-0'
        }
      ],
      'E6': [
        {
          positions: '0-2-1-2-2-0'
        }
      ],
      'Em6': [
        {
          positions: '0-2-0-2-2-0'
        }
      ],
      'Emaj7': [
        {
          positions: '0-0-1-1-2-0'
        }
      ],
      'E9': [
        {
          positions: '2-3-1-0-2-0'
        }
      ],
      'Esus4': [
        {
          positions: '0-0-2-2-2-0'
        }
      ],
      'F': [
        {
          start: 0,
          positions: '1-1-2-3-3-1'
        }
      ],
      'Fm': [
        {
          positions: '1-1-1-3-3-1'
        }
      ],
      'F7': [
        {
          positions: '1-1-2-1-3-1'
        }
      ],
      'Fm7': [
        {
          positions: '1-1-1-1-3-1'
        },
        {
          positions: '0-1-2-3-x-x'
        }
      ],
      'F6': [
        {
          positions: 'x-3-2-3-3-x'
        }
      ],
      'Fm6': [
        {
          positions: '1-3-1-3-3-1'
        }
      ],
      'Fmaj7': [
        {
          positions: '1-1-2-2-3-1'
        }
      ],
      'F9': [
        {
          positions: '1-1-2-1-3-3'
        }
      ],
      'Fsus4': [
        {
          start: 2,
          positions: '6-6-3-3-3-x'
        }
      ],
      '♯F': [
        {
          start: 1,
          positions: '2-2-3-4-4-2'
        }
      ],
      '♯Fm': [
        {
          start: 1,
          positions: '2-2-2-4-4-2'
        }
      ],
      '♯F7': [
        {
          start: 1,
          positions: '2-2-3-2-4-2'
        }
      ],
      '♯Fm7': [
        {
          start: 1,
          positions: '2-2-2-2-4-2'
        }
      ],
      '♯F6': [
        {
          start: 2,
          positions: 'x-4-3-4-4-x'
        }
      ],
      '♯Fm6': [
        {
          positions: '2-2-2-1-0-x'
        }
      ],
      '♯Fmaj7': [
        {
          positions: '1-2-3-4-x-x'
        }
      ],
      '♯F9': [
        {
          start: 1,
          positions: '4-2-3-2-4-2'
        }
      ],
      '♯Fsus4': [
        {
          start: 1,
          positions: '2-2-4-4-2-2'
        }
      ],
      'G': [
        {
          positions: '3-0-0-0-2-3'
        }
      ],
      'Gm': [
        {
          start: 2,
          positions: '3-3-3-5-5-3'
        }
      ],
      'G7': [
        {
          positions: '1-0-0-0-2-3'
        }
      ],
      'Gm7': [
        {
          start: 2,
          positions: '3-3-3-3-5-3'
        }
      ],
      'G6': [
        {
          positions: '0-0-0-0-2-3'
        }
      ],
      'Gm6': [
        {
          start: 1,
          positions: '3-3-3-x-1-0'
        }
      ],
      'Gmaj7': [
        {
          positions: '2-0-0-0-2-3'
        }
      ],
      'G9': [
        {
          positions: '1-0-0-0-0-0'
        }
      ],
      'Gsus4': [
        {
          positions: '3-1-0-0-2-3'
        }
      ],
      '♯G': [
        {
          start: 3,
          positions: '4-4-5-6-6-4'
        }
      ],
      '♯Gm': [
        {
          start: 3,
          positions: '4-4-4-6-6-4'
        }
      ],
      '♯G7': [
        {
          start: 3,
          positions: '4-4-5-4-6-4'
        }
      ],
      '♯Gm7': [
        {
          start: 3,
          positions: '4-4-4-4-6-4'
        }
      ],
      '♯G6': [
        {
          positions: '1-1-1-1-x-x'
        }
      ],
      '♯Gm6': [
        {
          positions: '1-0-1-1-x-x'
        }
      ],
      '♯Gmaj7': [
        {
          start: 3,
          positions: '4-4-5-5-6-4'
        }
      ],
      '♯G9': [
        {
          positions: '2-1-1-1-1-x'
        }
      ],
      '♯Gsus4': [
        {
          start: 3,
          positions: '4-4-6-6-4-4'
        }
      ],
      'A': [
        {
          positions: '0-2-2-2-0-0'
        }
      ],
      'Am': [
        {
          positions: '0-1-2-2-0-0'
        }
      ],
      'A7': [
        {
          positions: '3-2-2-2-0-0'
        }
      ],
      'Am7': [
        {
          positions: '0-1-0-2-0-0'
        }
      ],
      'A6': [
        {
          positions: '2-2-2-2-0-0'
        }
      ],
      'Am6': [
        {
          positions: '2-1-2-2-0-0'
        }
      ],
      'Amaj7': [
        {
          positions: '0-2-1-2-0-0'
        }
      ],
      'A9': [
        {
          positions: '0-0-2-2-0-0'
        }
      ],
      'Asus4': [
        {
          positions: '0-3-2-2-0-0'
        }
      ],
      '♯A': [
        {
          positions: '1-3-3-3-1-1'
        }
      ],
      '♯A7': [
        {
          positions: '1-3-1-3-1-1'
        }
      ],
      '♯Am7': [
        {
          positions: '1-2-1-3-1-1'
        }
      ],
      '♯A6': [
        {
          positions: '3-3-3-3-1-1'
        }
      ],
      '♯Am6': [
        {
          start: 1,
          positions: '3-2-3-3-x-x'
        }
      ],
      '♯Amaj7': [
        {
          positions: '1-3-2-3-1-1'
        }
      ],
      '♯A9': [
        {
          positions: '1-3-1-3-3-1'
        }
      ],
      '♯Asus4': [
        {
          positions: '1-4-3-1-1-1'
        }
      ],
      'B': [
        {
          start: 1,
          positions: '2-4-4-4-2-2'
        }
      ],
      'Bm': [
        {
          start: 1,
          positions: '2-3-4-4-2-2'
        }
      ],
      'B7': [
        {
          start: 0,
          positions: '2-0-2-1-2-x'
        }
      ],
      'Bm7': [
        {
          start: 1,
          positions: '2-3-2-4-2-2'
        }
      ],
      'B6': [
        {
          start: 1,
          positions: '4-4-4-4-2-2'
        }
      ],
      'Bm6': [
        {
          start: 0,
          positions: '2-0-1-0-2-2'
        }
      ],
      'Bmaj7': [
        {
          start: 1,
          positions: '2-4-3-4-2-2'
        }
      ],
      'B9': [
        {
          start: 1,
          positions: '1-1-4-4-1-1'
        }
      ],
      'Bsus4': [
        {
          start: 1,
          positions: '2-5-4-2-2-2'
        }
      ],
      'D/♯F': [
        {
          positions: '2-3-2-0-0-2'
        }
      ],
      'G/B': [
        {
          positions: 'x-3-0-0-2-x'
        }
      ]
    }
  }
}