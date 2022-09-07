export default function Buglist({list}) {
  return ( 
    <div>
       {list.length ? <div>  	    
          <div className="listWrapper">   
              {list.map((bug) => {
                return(
                  <div key={bug.id} className="container style">
                    <div className="card">
                      <div className="card-body ">
                        <div className="row">
                          <div className="col-md-6">
                           <img src={bug.screenshot} alt="image" className="bug_images"/>
                          </div>
                          <div className="col-md-6 ">
                            <div className="row ">
                            <h3>{bug.title} </h3>
                            </div>
                            <div className="row">
                              <p>{bug.description} </p>
                            </div> 
                            <div className="row ">
                              <h3>Bug status is : {bug.feature} </h3>
                            </div>
                            <div className="row attribute_style">
                              <h3>deadline : {bug.deadline} </h3>
                            </div>        
                          </div>     
                      </div>
                    </div>
                  </div>
                </div>
                )       
              })} 	   
          </div> 
     </div> :<div className="container"><h1>No Bugs Exist</h1></div>}    
    </div>
  )
}
