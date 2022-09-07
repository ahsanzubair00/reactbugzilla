import React from 'react'
import { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProjectDetails } from '../../api/RestApi';
import './ProjectShow.css';
import Buglist from './Buglist';
import Details from './Details';

export default function ProjectShow() {
  const {id}=useParams();
  const [project, setProject] = useState([]);

  useEffect(()=>{
    getProjectDetails(id).then(res=>setProject(res.data)).catch(err=>console.log(err))
    console.log(getProjectDetails(id))
    },[])

    return (
      <div className = "container style">
        <h2 className = "title_style"> This is Project Show Page </h2>
        <Details project={project}/>
        <div className="container">
        {project.bugs && <Buglist list={project.bugs}/>}
        </div>
    </div>     
    )
}





