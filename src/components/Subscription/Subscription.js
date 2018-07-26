import './subscription.scss';

export class SubscribtionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      valid: false,
      success: 'Thank you for subscribing to our newsletter.',
      error: 'Sorry, this doesn\'t look like a valid email.',
      changed: false,
      exp: /\S+@\S+\.\S+/
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      valid: this.state.exp.test(this.state.email),
      changed: true
    });

    setTimeout(function () {
      this.setState({
        email: this.state.valid ? '' : this.state.email
      });
    }.bind(this), 0);

    setTimeout(function () {
      this.setState({
        changed: false
      });
    }.bind(this), 3000);
  }

  render() {
    return (
        <div className="subscribe">
          <div className="subscribe-inner">
            <h4 className="subscribe-title">Sign up for newsleter!</h4>
            <p className="subscribe-desc">Stay informed of the last company news</p>
            <form action="#" className="subscribe-form" onSubmit={this.handleSubmit}>
              <input type="text"
                     placeholder="Enter your email address"
                     value={this.state.email}
                     onChange={this.handleChange}
                     className="input"
              />
              <button className="button button-subscribe">Subscribe</button>
              <div className={'subscribe-message' + `${this.state.changed ? ' visible' : '' }`}>
                <p className={'subscribe-result' + `${this.state.valid ? ' success' : ' error' }`}>
                  {this.state.valid ? this.state.success : this.state.error }
                </p>
              </div>
            </form>
          </div>
          <div className="subscribe-image" />
        </div>
    )
  }
}