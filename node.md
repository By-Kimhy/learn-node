create vue project
    - npm create vue@latest

install vue
    - cd <project-name>
    - npm install

run vue
    - npm run dev

build vue  
    - npm run build


using vue
    -script setup (need setup to use like javascript)

API
    -fetch
        - fetch = async ()=> {
                url
                let rp= await fetch(url)
                let rs = await rp.json()
                return rs
            }
            
    - Axios
    If you want to use axios, you need to install it first
        - npm install axios
        - import Axios from 'axios'

        -Axios.get(url)
            .then(rp => {
                // code
                })

router
    - vue-router
    If you want to use vue-router, you need to install it first
        - npm install vue-router

rout config
    path use for url
        -path (url)
    name use for name of component
        -name (name of component)
    component use for component
        -component (component)
    props use for props
        -props (props)
    meta use for create title
        -meta (meta)

    // error 404 page
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../components/NotFound.vue'),

    // redirect
      path: '/all-item',
      redirect: '/',

router beforeEach
    router.beforeEach use for before route to make tilte change
        -router.beforeEach(to, from, next)
            -to (route to)
                ex: to: '/'
            -from (route from)
                ex: from: '/'
            -next (next)
                ex: next()

store.js
    - store.js is for store data using in other component

onMounted
    - onMounted use for when component mounted
        -onMounted(() => {
            // code
            })

watchEffect
    - watchEffect use for when data change don't need to rerender
        -watchEffect(() => {
            // code
            })

ref
    - ref use for store data
        -ref (name of ref)

computed
    - computed use for when data change need to rerender
        -computed(() => {
            // code
            })