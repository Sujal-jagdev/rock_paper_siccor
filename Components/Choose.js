import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Choose = () => {
  return (
    <>
        <div className="choose d-flex justify-content-between col-2">
            <div className="you">
                <h5>You : <span>g</span></h5>
            </div>
            <div className="com">
            <h5><span>f</span> : Com </h5>
            </div>
        </div>
    </>
  )
}

export default Choose