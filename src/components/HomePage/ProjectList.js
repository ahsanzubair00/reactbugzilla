import React from 'react'
import { useEffect ,useState } from 'react'
import './ProjectList.css';
import { getProjects } from '../../api/RestApi';
import List from './List';

export default function ProjectList() {
 const [projects, setProject] = useState([])

  useEffect(() => {
    getProjects().then(res=>setProject(res.data)).catch(err=>console.log(err))
  },[])

  return (
      <div className="listWrapper">
        {projects && projects.map((project) => {
          return(
            <div key={project.id} className="container style">
              {project&& <List  project = {project}/>}
            </div>
            )       
          })} 	   
      </div>      
  )
}
