// import React from 'react'
const Imagemul = (props) =>{
    var a = props.list_arr;
      return (
        <>
            <div className="container">
              <div className="row">
                {
                  a.map((item) =>{
                    return(
                      <div className='col-md-6 col-lg-4'>
                        <div className="main_part">
                          <div className="first_part">
                            <img src={require('./img'+item.img)}></img>
                          </div>
                        </div>
                        <div className="second_part">
                          <h4><a href='#'>{item.name}</a></h4>
                        </div>
                        <hr></hr>
                        <div className="third_part">
                          <p>{item.dec}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
        </>
      );
    }
    
    export default Imagemul
    
    