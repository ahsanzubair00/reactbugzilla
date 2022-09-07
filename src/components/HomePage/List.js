import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function List({ project}) {
 const navigate = useNavigate()
  return (
    <div className="card">
      <div className="card-body ">
        <div className="row">
          <div className="col-md-4">
            <div className='image'/>
          </div>
          <div className="col-md-4 ">
            <div className="row name_style">
            <h2>{project.name} </h2>
            </div>
            <div className="row name_style">
              <p>{project.description} </p>
            </div>       
          </div>
          <div className="col-md-2 offset-md-2 ">
            <div className="row margin btn-style">
              <button id={project.id} onClick={(e)=>{navigate(`/projects/${project.id}`);}}  className="btn btn-danger">
                Project Details
              </button>   
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}
