export const routes = {
  '/': {
    name: 'home',
    component: require('pages/home'),
    display: '首页'
  },
  '/bar': {
    name: 'bar',
    component: require('pages/bar')
  },
  'app': {
    name: 'app',
    component: require('pages/app'),
    subRoutes: { // 1
      '/': {
        name: 'app-home',
        component: require('pages/app/home')
      },
      '/alphabet-solfa': {
        name: 'app-alphabet-solfa',
        component: require('pages/app/alphabet-solfa'),
        display: '音名唱名转换',
        subRoutes: {
          '/': {
            name: 'app-alphabet-solfa-home',
            component: require('pages/app/alphabet-solfa/home')
          },
          '/tests': {
            name: 'app-alphabet-solfa-tests',
            component: require('pages/app/alphabet-solfa/tests'),
            display: '测试',
            subRoutes: {
              '/': {
                name: 'app-alphabet-solfa-tests-list',
                component: require('pages/app/alphabet-solfa/tests/list')
              },
              '/create': {
                name: 'app-alphabet-solfa-tests-create',
                component: require('pages/app/alphabet-solfa/tests/create'),
                display: '创建'
              },
              '/start/:test_id/': {
                name: 'app-alphabet-solfa-tests-start',
                component: require('pages/app/alphabet-solfa/tests/start'),
                subRoutes: {
                  '/:question_id': {
                    name: 'app-alphabet-solfa-tests-start-question',
                    component: require('pages/app/alphabet-solfa/tests/start/question')
                  }
                }
              },
              '/:test_id': {
                name: 'app-alphabet-solfa-tests-detail',
                component: require('pages/app/alphabet-solfa/tests/detail')
              }
            }
          }
        }
      }
    } // 1
  }
}

export function getBreadCrumb(transition, store) {
  console.log(transition, store);
  store.dispatch('SET_BREADCRUMB', [1,2,3])
}

export default function(router, store) {
  if (store.state.usePushState && location.pathname == '/') {
    let match = location.hash.match(/^#!\/([\w_\/]+)/i)
    if (match) {
      window.location.href = '/' + match[1]
      return false
    }
  }

  router.map(routes)

  router.redirect({
    '*': '/'
  })

  // alias
  router.alias({
    '/home': '/'
  })

  router.beforeEach((transition) => {
    getBreadCrumb(transition, store);
    transition.next()
  })

  return true
}
