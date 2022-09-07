import React from 'react'

export default function Details({project}) {
  return (
      <div className="card">
          <div className="image"></div>
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.description}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            <h5 className="card-text"><small className="text-muted">{project.created_at}</small></h5>
            <button className="btn btn-danger">
              Show All Bugs
            </button>    
          </div>
      </div> 
  )
}
