
'use strict';

const e = React.createElement;



class OtherComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'User Click Button Now';
    }

    return e(
      'button',
      { onMouseLeave: () => this.setState({ liked: true }) },
      'Click Here'
    );
  }
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(OtherComp));