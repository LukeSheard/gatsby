import { Router, applyRouterMiddleware } from 'inferno-router'

/* @flow weak */
import Inferno from 'inferno'
import { createBrowserHistory } from 'history';
import createRoutes from 'create-routes'
import { onRouteChange } from 'gatsby-browser'

const loadContext = require('.gatsby-context')


function loadConfig (cb) {
  const stuff = require('config')
  if (module.hot) {
    module.hot.accept(stuff.id, () => cb())
  }
  return cb()
}

const browserHistory = createBrowserHistory();
let currentLocation = null

let routes
loadConfig(() =>
  loadContext((pagesReq) => {
    const { pages } = require('config')
    if (!routes) {
      routes = createRoutes(pages, pagesReq)
    } else {
      createRoutes(pages, pagesReq)
    }

    Inferno.render(
      <Router
        history={browserHistory}
        routes={routes}
      />,
      typeof window !== 'undefined' ? document.getElementById('inferno-mount') : void 0)
  })
)
