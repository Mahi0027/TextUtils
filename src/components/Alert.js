import React from 'react'

function Alert(props) {
  return (
    <div style={{height: '60px'}}>
      {props.alert  && <div className='container'><div className={`alert alert-${ props.alert.type }`} role="alert">
        <strong>{ props.alert.type }</strong>: { props.alert.message }
    </div></div>}
    </div>
  )
}

export default Alert;