export default function(router, store) {
  if (store.state.usePushState && location.pathname == '/') {
    let match = location.hash.match(/^#!\/([\w_\/]+)/i)
    if (match) {
      window.location.href = '/' + match[1]
      return false
    }
  }

  router.map({
    '/': {
      name: 'home',
      component: require('views/home')
    },
    'app': {
      name: 'app',
      component: require('views/app'),
      subRoutes: { // 1
        '/': {
          name: 'app-home',
          component: require('views/app/home')
        },
        '/alphabet-solfa': {
          name: 'app-alphabet-solfa',
          component: require('views/app/alphabet-solfa'),
          subRoutes: {
            '/': {
              name: 'app-alphabet-solfa-home',
              component: require('views/app/alphabet-solfa/home')
            },
            '/tests': {
              name: 'app-alphabet-solfa-tests',
              component: require('views/app/alphabet-solfa/tests'),
              subRoutes: {
                '/': {
                  name: 'app-alphabet-solfa-tests-list',
                  component: require('views/app/alphabet-solfa/tests/list')
                },
                '/create': {
                  name: 'app-alphabet-solfa-tests-create',
                  component: require('views/app/alphabet-solfa/tests/create')
                },
                '/start/:test_id/': {
                  name: 'app-alphabet-solfa-tests-start',
                  component: require('views/app/alphabet-solfa/tests/start'),
                  subRoutes: {
                    '/:question_id': {
                      name: 'app-alphabet-solfa-tests-start-question',
                      component: require('views/app/alphabet-solfa/tests/start/question')
                    }
                  }
                },
                '/:test_id': {
                  name: 'app-alphabet-solfa-tests-detail',
                  component: require('views/app/alphabet-solfa/tests/detail')
                }
              }
            }
          }
        }
      } // 1
    },
    'bar': {
      name: 'bar',
      component: require('views/bar')
    }
  })

  router.redirect({
    '*': '/'
  })

  // alias
  router.alias({
    // '/': '/home'
  })

  router.beforeEach(({from, to, next, abort, redirect}) => {
    next()
  })

  return true
}
