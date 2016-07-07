export function saveObj(key, obj, prefix='') {
  window.localStorage.setItem(
    `${prefix}_${key}`, JSON.stringify(obj)
  )
}

export function loadObj(key, prefix='') {
  return JSON.parse(window.localStorage.getItem(`${prefix}_${key}`))
}