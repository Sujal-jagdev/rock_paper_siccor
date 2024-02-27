import React from 'react'

const Score = (props) => {
  return (
    <>
         <div className="score d-flex col-3 justify-content-between">
            <h5>You Score : <span>{props.you_score}</span></h5>
            <h5>  <span>{props.com_score}</span> : Computer</h5>
          </div>
    </>
  )
}

export default Score