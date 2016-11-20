import Component from 'inferno-component';
/* @flow weak */
import Inferno from 'inferno'

export default function HTML(props) {
  const post = this.props.route.page.data
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}