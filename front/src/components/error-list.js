import React from 'react'
import isEmpty from 'lodash/isEmpty';

function ErrorList({message}) {
  if (isEmpty(message)) {
    return null;
  }
  return (
    <div className="box error-box">
      <i className="fa fa-exclamation-triangle fa-3x" aria-hidden="true"></i>
      {message}
    </div>
  )
}


export default ErrorList;
