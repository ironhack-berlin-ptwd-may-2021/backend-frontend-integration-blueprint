import React from 'react'
import axios from 'axios'

class Signup extends React.Component {

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

    axios.post('/signup', { username: this.state.username, password: this.state.password }).then(() => {
      alert('user created')
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

export default Signup;
