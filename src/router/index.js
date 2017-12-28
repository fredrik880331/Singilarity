import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Robotmaker1 from '@/components/pages/RobotMakerOne'
import VisionSystem from '@/components/pages/VisionSystem'
import OmFöretaget from '@/components/pages/OmFöretaget'
import MissingLinkInRobotics from '@/components/pages/MissingLinkInRobotics'
import Kontakt from '@/components/pages/Kontakt'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Robotmaker1',
      name: 'Robotmaker1',
      component: Robotmaker1
    },
    {
      path: '/VisionSystem',
      name: 'VisionSystem',
      component: VisionSystem
    },
    {
      path: '/OmForetaget',
      name: 'OmFöretaget',
      component: OmFöretaget
    },
    {
      path: '/MissingLinkInRobotics',
      name: 'MissingLinkInRobotics',
      component: MissingLinkInRobotics
    },
    {
      path: '/Kontakt',
      name: 'Kontakt',
      component: Kontakt
    }
  ]
})
