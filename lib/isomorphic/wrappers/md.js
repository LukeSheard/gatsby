/* @flow weak */
import Inferno from 'inferno'

export default function Markdown(props) {
  const post = this.props.route.page.data
  return (
    <div className="markdown">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  )
}
