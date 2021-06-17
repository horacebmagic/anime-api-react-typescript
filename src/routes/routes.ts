import { Routes } from "../types/types"
import Home from '../views/Home'
import Schedule from '../views/Schedule'
import Season from '../views/Season'

const routes: Array<Routes> = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
    props: {
      title: 'Top Upcoming Anime'
    }
  },
  {
    name: 'Schedule',
    path: '/schedule',
    component: Schedule,
    exact: true,
    props: {
      title: 'Anime Schedule'
    }
  },
  {
    name: 'Season',
    path: '/season',
    component: Season,
    exact: true,
    props: {
      title: 'Anime Season'
    }
  }
]

export default routes