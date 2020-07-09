export default {
    path : '/movie',
    component : () => import('@/views/movie'),
    children:[
        {
            path: 'City',
            component:() =>import('@/components/City')
        },
        {
            path: 'ComingSoon',
            component:() =>import('@/components/ComingSoon')
        },
        {
            path: 'Search',
            component:() =>import('@/components/Search')
        },
        {
            path: 'NowPlaying',
            component:() =>import('@/components/NowPlaying')
        },

    ]
}