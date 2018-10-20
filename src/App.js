import React, {Component} from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import Router from "./Router";
import Message from './components/common/message';



class App extends Component {
  render() {
    console.log(this);
    return (
      <React.Fragment>
        <Nav/>
        <Message/>
        <Router />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;