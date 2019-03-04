import Vue from 'vue'
import Router from 'vue-router'
import TripVideo from '@/components/TripVideo/index'
import latestTripVideo from '@/components/TripVideo/latest'
import hotTripVideo from '@/components/TripVideo/hot'
import TripStory from '@/components/TripStory/TripStory'
import GetOneTrip from '@/components/GetOneTrip/GetOneTrip'
import TripColleague from '@/components/TripColleague/TripColleague'
import Main from '@/components/Main'
import ArticleDetails from '@/components/TripStory/ArticleDetails'
import TripRecommendation from '@/components/GetOneTrip/SubMenu/TripRecommendation'
import TripStrategy from '@/components/GetOneTrip/SubMenu/TripStrategy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TripVideo',
      component: TripVideo,
      redirect: '/TripVideo/latest',
      children: [
        {
          path: 'latest', name: 'latestTripVideo', component: latestTripVideo
        }, {
          path: 'hot', name: 'hotTripVideo', component: hotTripVideo
        }
      ]
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
    }
  ]
})
