const Home = (resolve) => {
  require(['./views/home/home'], resolve)
}
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        name: 'home',
        path: '',
        component: (resolve) => {
          require(['./views/home/homefocus'], resolve)
        }
      },
      {
        name: 'fastnews',
        path: 'fastnews',
        component: (resolve) => {
          require(['./views/home/homefastnews'], resolve)
        }
      },
      {
        name: 'earlyproject',
        path: 'earlyproject',
        component: (resolve) => {
          require(['./views/home/earlyproject'], resolve)
        }
      }
    ]
  },
  {
    path: '/found',
    component: (resolve) => {
      require(['./views/found'], resolve)
    }
  },
  {
    path: '/me',
    component: (resolve) => {
      require(['./views/me'], resolve)
    }
  },
  {
    path: '/focus',
    component: (resolve) => {
      require(['./views/focus'], resolve)
    }
  },
  {
    path: '/articleview',
    component: (resolve) => {
      require(['./views/articleview'], resolve)
    }
  }
]

export default routes
