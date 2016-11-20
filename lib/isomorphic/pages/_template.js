/* @flow weak */
import Inferno from 'inferno'

const defaultMessage = `
Gatsby is currently using the default _template. You can override it by
creating a Inferno component at "/pages/_template.js".

You can see what this default template does by visiting:
https://github.com/gatsbyjs/gatsby/blob/master/lib/isomorphic/pages/_template.js
`
console.info(defaultMessage)

function template (props) {
  return <div>{props.children}</div>
}

module.exports = template
