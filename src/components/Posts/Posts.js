import './posts.scss';
import {NewsPost} from './NewPosts';
import axios from 'axios';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://jsonplaceholder.typicode.com/posts',
      src: 'https://picsum.photos/300/300?image=306',
      posts: [],
      start: 0,
      end: 6,
      step: 6,
      last: 0,
      width: 432,
      height: 288,
      children: [],
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(this.state.url)
      .then(res => {
        this.setState({
          posts: res.data,
          last: res.data.length
        });
      });
  }

  addNewPosts() {
    this.state.start += this.state.step;
    this.state.end += this.state.step;

    for (let i = this.state.start; i < this.state.end; i++) {
      this.state.children.push(
        <NewsPost post={this.state.posts[i]}
                  src={this.state.src}
                  key={this.state.posts[i].id} />
      )
    }

    this.setState({
      clicked: true
    });
  }

  handleClick() {
    if (this.state.end > this.state.last - this.state.step) return;
    this.addNewPosts();
  }

  render() {
    return (
      <div className="container">

          <h2 className="title">Latest News</h2>
          <ul className="news-list">
            {this.state.posts.slice(0, 6).map(post =>
              <NewsPost post={post}
                        width={this.state.width}
                        height={this.state.height}
                        src={this.state.src}
                        key={post.id}
              />
            )}
            {this.state.clicked ? this.state.children : null}
          </ul>
          <div className="button-wrapper">
            <span className="button button-more" onClick={this.handleClick}>More News</span>
          </div>
      </div>
    );
  }
}
