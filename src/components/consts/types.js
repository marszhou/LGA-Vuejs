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