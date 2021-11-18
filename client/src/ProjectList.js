import React from 'react'
import axios from 'axios'

class ProjectList extends React.Component {

  //const [count, setCount] = useState(0);

  state = {
    loading: true,
    projects: [],

    title: '',
    description: ''
  }

  componentDidMount() {
    // because we configured it in package.json it knows to access http://localhost:5555/projects here
    axios.get('/projects').then((resp) => {
      this.setState({
        loading: false,
        projects: resp.data
      })
    })
  }

  changeHandler = (e) => {
    let currentName = e.target.name

    let newState = {}
    newState[currentName] = e.target.value // newState['title'] / newState['description']

    this.setState(newState)
  }


  render() {
    if (this.state.loading) { return <h1>LOADING ... </h1> }

    return (
      <div className="App" >
        <h1>Project List</h1>
        {this.state.projects.map((project) => {
          return <div>{project.title}</div>
        })}

        <input type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
        <input type="text" name="description" value={this.state.description} onChange={this.changeHandler} />
      </div>
    );
  }

}

export default ProjectList;
