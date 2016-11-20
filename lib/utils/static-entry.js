import { RouterContext, match } from 'inferno-router'
import { config, pages } from 'config'
import { renderToStaticMarkup, renderToString } from 'inferno-server'

import Html from 'html'
/* @flow weak */
import Inferno from 'inferno'
import createRoutes from 'create-routes'
import { prefixLink } from '../isomorphic/gatsby-helpers'

const loadContext = require('.gatsby-context')

let routes
loadContext((pagesReq) => {
  routes = createRoutes(pages, pagesReq)
})

module.exports = (locals, callback) => {
  const renderProps = match(routes, prefixLink(locals.path))
  const component = <RouterContext {...renderProps} />
  
  let body
  if (config.noProductionJavascript) {
    body = renderToStaticMarkup(component)
  } else {
    body = renderToString(component)
  }

  const html = `<!DOCTYPE html>\n ${renderToStaticMarkup(
    <Html body={body} {...renderProps} />
  )}`
  callback(null, html)
}
