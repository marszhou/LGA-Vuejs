export default function(router, store) {
  if (store.state.usePushState && location.pathname == '/') {
    let match = location.hash.match(/^#!\/([\w_\/]+)/i)
    if (match) {
      window.location.href = '/' + match[1]
      return false
    }
  }

  router.map({
    '/home': {
      name: 'home',
      component: require('views/home')
    },
    'bar': {
      name: 'bar',
      component: require('views/bar')
    }
  })

  router.redirect({
    '*': '/home'
  })

  // // alias
  // router.alias({
  //   '/index': '/home'
  // })

  router.beforeEach(({from, to, next, abort, redirect}) => {
    next()
  })

  return true
}
