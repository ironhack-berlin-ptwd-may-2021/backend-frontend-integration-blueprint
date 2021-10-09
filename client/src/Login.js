import React from 'react'
import axios from 'axios'

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  // generic change handler for text input fields
  changeHandler = (e) => {
    let currentName = e.target.name

    let newState = {}
    newState[currentName] = e.target.value // newState['title'] / newState['description']

    this.setState(newState)
  }

  // class property syntax
  submitHandler = () => {

    axios.post('/login', { username: this.state.username, password: this.state.password }).then((resp) => {

      let data = resp.data

      let message = data.message
      let user = data.user

      this.props.logInTheUser(user)
    })

  }


  render() {

    return (
      <div className="App" >

        <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} />
        <input type="text" name="password" value={this.state.password} onChange={this.changeHandler} />
        <button onClick={this.submitHandler}>Submit</button>
      </div>
    );
  }

}

export default Login;
