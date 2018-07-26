export class NewsPost extends Component {
  render() {
    return (
      <li className="news-item">
        <img className="news-item-image"
             src={this.props.src}
             height={this.props.height}
             alt={this.props.post.title}/>
        <div className="news-item-inner">
          <h3 className="news-item-title">
            <a className="news-item-link" href="#">{this.props.post.title}</a>
          </h3>
          <div className="news-item-desc">
            {this.props.post.body}
          </div>
          <a href="#" className="news-item-detailed">Read me</a>
        </div>
      </li>
    )
  }
}