import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ProjectList(props) {

  const [projects, setProjects] = useState({
    loading: true,
    data: []
  });
  // mimics the componentDidMount() method --> runs exactly once *after* the first render happened
  useEffect(() => {
    axios.get('/projects').then((resp) => {
      setProjects({
        loading: false,
        data: resp.data
      })
    })
  }, [])

  const [mapInformation, setmapInformation] = useState(null);
  useEffect(() => {
    axios.get('/projects').then((resp) => {
      setProjects({
        loading: false,
        data: resp.data
      })
    })
  }, [])


  if (projects.loading) { return <div>LOADING ... </div> }

  return (
    <div className="App" >
      <h1>Project List</h1>
      {projects.data.map((project) => {
        return <div>{project.title}</div>
      })}
    </div>
  );

}

export default ProjectList;
