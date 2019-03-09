import Vue from 'vue'
import Router from 'vue-router'

import TripStory from '@/components/TripStory/TripStory'
import GetOneTrip from '@/components/GetOneTrip/GetOneTrip'
import Main from '@/components/Main'
import ArticleDetails from '@/components/TripStory/ArticleDetails'
import TripRecommendation from '@/components/GetOneTrip/SubMenu/TripRecommendation'
import TripStrategy from '@/components/GetOneTrip/SubMenu/TripStrategy'
import TripStrategyDetails from '@/components/GetOneTrip/SubMenu/TripStrategy/TripStrategyDetails'
import TripSport from '@/components/GetOneTrip/SubMenu/TripSport'

// trip video
import tripVideo from '@/components/TripVideo/index'
import latestTripVideo from '@/components/TripVideo/latest'
import hotTripVideo from '@/components/TripVideo/hot'
import tripVideoDetail from '@/components/TripVideo/videoDetails'

// trip colleague
import TripColleague from '@/components/TripColleague/TripColleague'
import newTripColleague from '@/components/TripColleague/new'

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
      path: '/TripStory/details/:aid', name: 'ArticleDetails', component: ArticleDetails
    }, {
      path: '/GetOneTrip', name: 'GetOneTrip', component: GetOneTrip
    }, {
      path: '/TripColleague', name: 'TripColleague', component: TripColleague
    }, {
      path: '/TripColleague/new', name: 'newTripColleague', component: newTripColleague
    }, {
      path: '/', name: 'Main', component: Main
    }, {
      path: '/TripRecommendation', name: 'TripRecommendation', component: TripRecommendation
    }, {
      path: '/TripStrategy', name: 'TripStrategy', component: TripStrategy
    }, {
      path: '/TripStrategy/:id', name: 'TripStrategyDetails', component: TripStrategyDetails
    }, {
      path: '/TripSport', name: 'TripSport', component: TripSport
    }
  ]
})
