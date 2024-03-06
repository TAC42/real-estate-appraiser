import React from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'

interface Route {
  path: string
  component: React.ComponentType<any>
  label?: string
}

const routes: Route[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

export default routes
