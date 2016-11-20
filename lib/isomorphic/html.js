/* @flow weak */

import Inferno from 'inferno'
import { prefixLink } from 'gatsby-helpers'

const defaultMessage = `
Gatsby is currently using the default template for HTML. You can override
this functionality by creating a Inferno component at "/html.js"

You can see what this default template does by visiting:
https://github.com/gatsbyjs/gatsby/blob/master/lib/isomorphic/html.js
`
console.info(defaultMessage)

function HTML (props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
        />
      </head>
      <body>
        <div id="inferno-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
        <script src={prefixLink('/bundle.js')} />
      </body>
    </html>
  )
}

module.exports = HTML
