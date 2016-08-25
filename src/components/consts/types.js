const TestModes = {
  'TIME': 1,
  'COUNT': 2,
  'UNLIMITED': 3
}

export const TestModeConsts = {
  mode: TestModes,
  modeLabels: {
    [TestModes.TIME]: '限制时间',
    [TestModes.COUNT]: '限制数量',
    [TestModes.UNLIMITED]: '无限制'
  }
}

const AlphabetTestTypes = {
  'A2T': 1,
  'T2A': 2,
  'MIXED': 3
}

export const AlphabetTestConsts = {
  types: AlphabetTestTypes,
  typeLabels: {
    [AlphabetTestTypes.A2T]: '唱名转音名',
    [AlphabetTestTypes.T2A]: '音名转唱名',
    [AlphabetTestTypes.MIXED]: '混合'
  }
}