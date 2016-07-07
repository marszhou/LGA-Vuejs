const __TestModes__ = {
  'TIME': 1,
  'COUNT': 2,
  'UNLIMITED': 3
}

export const TestModeConsts = {
  mode: __TestModes__,
  modeLabels: {
    [__TestModes__.TIME]: '限制时间',
    [__TestModes__.COUNT]: '限制数量',
    [__TestModes__.UNLIMITED]: '无限制'
  }
}

const __AlphabetTestTypes__ = {
  'A2T': 1,
  'T2A': 2,
  'MIXED': 3
}

export const AlphabetTestConsts = {
  types: __AlphabetTestTypes__,
  typeLabels: {
    [__AlphabetTestTypes__.A2T]: '唱名转音名',
    [__AlphabetTestTypes__.T2A]: '音名转唱名',
    [__AlphabetTestTypes__.MIXED]: '混合'
  }
}