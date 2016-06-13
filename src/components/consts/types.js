const __TestModes__ = {
  'TIME': 1,
  'COUNT': 2,
  'UNLIMITED': 3
}

export const TestModeConsts = {
  mode: __TestModes__,
  modeLabels: [
    {
      value: __TestModes__.TIME,
      label: '限制时间'
    },
    {
      value: __TestModes__.COUNT,
      label: '限制数量'
    },
    {
      value: __TestModes__.UNLIMITED,
      label: '无限制'
    }
  ]
}

const __AlphabetTestTypes__ = {
  'A2T': 1,
  'T2A': 2,
  'MIXED': 3
}

export const AlphabetTestConsts = {
  types: __AlphabetTestTypes__,
  typeLabels: [
    {
      value: __AlphabetTestTypes__.A2T,
      label: '唱名转音名'
    },
    {
      value: __AlphabetTestTypes__.T2A,
      label: '音名转唱名'
    },
    {
      value: __AlphabetTestTypes__.MIXED,
      label: '混合'
    }
  ]
}