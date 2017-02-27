import Route from './components/app/route'

import Landing from './components/landing'
import ReactTasks from './components/reactTasks'
import ImportExportTasks from './components/importExportTasks'

export const routes = [
  { path: 'reactTasks', component: ReactTasks },
  { path: 'importExportTasks', component: ImportExportTasks },
]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Landing },
  childRoutes: routes
}