import React from 'react';
import {useRouteError} from 'react-router-dom';

const ErrorPages = () => {
  const routingError = useRouteError();
  console.log("Routing error...",routingError);
  return (
    <div>
        <h1>OOPS!! Some error occured.</h1>
        <h3>{routingError.status} : {routingError.error.message}</h3>
    </div>
  )
}

export default ErrorPages;