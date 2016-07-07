import _ from 'lodash'

export default function(router, store) {
  if (store.state.usePushState && location.pathname == '/') {
    let match = location.hash.match(/^#!\/([\w_\/]+)/i)
    if (match) {
      window.location.href = '/' + match[1]
      return false
    }
  }

  const routes = {
    '/': {
      name: 'home',
      component: require('pages/home'),
      display: '首页'
    },
    '/404': {
      name: 'not-found',
      component: require('pages/404'),
      display: '404'
    },
    '/foo': {
      name: 'foo',
      component: require('pages/foo'),
      display: 'Foo'
    },

    '/bar': {
      name: 'bar',
      component: require('pages/bar')
    },

    '/testings': {
      name: 'testings',
      component: require('pages/testings'),
      display: '测试',
      subRoutes: {
        '/': {
          name: 'testings-list',
          component: require('pages/testings/list'),
          display: '列表'
        },
        '/:testing_id': {
          name: 'testing',
          component: require('pages/testings/show')
        }
      }
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
          display: '音名唱名转换'
        }
      } // 1
    }
  }

  router.map(routes)

  router.redirect({
    '*': '/404'
  })

  // alias
  router.alias({
    '/home': '/'
  })

  router.beforeEach((transition) => {
    getBreadCrumb(transition, store);
    try {
      transition.next()
    } catch (e) {
      if (e.message === 'NOT_FOUND') {
        transition.redirect('/404')
      } else {
        transition.abort()
        console.log('route caught', e)
      }
    }
  })

  function getBreadCrumb(transition, store) {
    const {matched, name} = transition.to
    const routes = _.pluck(matched, 'handler')
                    .filter((h) => !!h.display)
                    .map((r) => _.pick(r, name === r.name ? ['display'] : ['display', 'name']));
    store.dispatch('SET_BREADCRUMB', routes)
  }

  return true
}
