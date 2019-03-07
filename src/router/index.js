import Vue from 'vue'
import Router from 'vue-router'

import TripStory from '@/components/TripStory/TripStory'
import GetOneTrip from '@/components/GetOneTrip/GetOneTrip'
import TripColleague from '@/components/TripColleague/TripColleague'
import Main from '@/components/Main'
import ArticleDetails from '@/components/TripStory/ArticleDetails'
import TripRecommendation from '@/components/GetOneTrip/SubMenu/TripRecommendation'
import TripStrategy from '@/components/GetOneTrip/SubMenu/TripStrategy'
import TripStrategyDetails from '@/components/GetOneTrip/SubMenu/TripStrategy/TripStrategyDetails'

// trip video
import tripVideo from '@/components/TripVideo/index'
import latestTripVideo from '@/components/TripVideo/latest'
import hotTripVideo from '@/components/TripVideo/hot'
import tripVideoDetail from '@/components/TripVideo/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TripVideo',
      component: tripVideo,
      redirect: '/TripVideo/latest',
      children: [
        {
          path: 'latest', name: 'latestTripVideo', component: latestTripVideo
        }, {
          path: 'hot/:time', name: 'hotTripVideo', component: hotTripVideo
        }
      ]
    }, {
      path: '/TripVideo/detail/:id', name: 'tripVideoDetail', component: tripVideoDetail
    }, {
      path: '/TripStory', name: 'TripStory', component: TripStory
    }, {
      path: '/GetOneTrip', name: 'GetOneTrip', component: GetOneTrip
    }, {
      path: '/TripColleague', name: 'TripColleague', component: TripColleague
    }, {
      path: '/', name: 'Main', component: Main
    }, {
      path: '/TripStory/details/:aid', name: 'ArticleDetails', component: ArticleDetails
    }, {
      path: '/TripRecommendation', name: 'TripRecommendation', component: TripRecommendation
    }, {
      path: '/TripStrategy', name: 'TripStrategy', component: TripStrategy
    }, {
      path: '/TripStrategy/:id', name: 'TripStrategyDetails', component: TripStrategyDetails
    }
  ]
})
