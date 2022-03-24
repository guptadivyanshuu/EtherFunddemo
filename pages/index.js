// import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import App from './App.js';
import React, { Component } from 'react';


// ReactDOM.render(<App />, document.getElementById('root'));
// if (typeof window !== 'undefined') {
//     React.render(<App />, document.getElementById("root"));
// }

// export default Index;
class Index extends Component {
  state = {};
  render() {
    return <App />;
  }
}

export default Index;
