import logo from './logo.svg';
import './App.css';
import ProjectList from './ProjectList';
import Signup from './Signup';
import Login from './Login';
import UploadPic from './UploadPic'

import React from 'react'

class App extends React.Component {

  state = {
    currentUser: this.props.user
  }

  loginHandler = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }


  render() {
    return (
      <div className="App" >
        Hi {this.state.currentUser ? this.state.currentUser.username : 'unknown person'} !
        {/* <ProjectList></ProjectList> */}

        <Signup></Signup >

        <Login logInTheUser={this.loginHandler}></Login>

        <UploadPic></UploadPic>
      </div >
    );
  }

}

export default App;
