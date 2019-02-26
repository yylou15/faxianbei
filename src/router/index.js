import Vue from 'vue'
import Router from 'vue-router'
import TripVideo from '@/components/TripVideo/TripVideo'
import TripStory from '@/components/TripStory/TripStory'
import GetOneTrip from '@/components/GetOneTrip/GetOneTrip'
import TripColleague from '@/components/TripColleague/TripColleague'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TripVideo', name: 'TripVideo', component: TripVideo
    }, {
      path: '/TripStory', name: 'TripStory', component: TripStory
    }, {
      path: '/GetOneTrip', name: 'GetOneTrip', component: GetOneTrip
    }, {
      path: '/TripColleague', name: 'TripColleague', component: TripColleague
    }, {
      path: '/', name: 'Main', component: Main
    }
  ]
})
