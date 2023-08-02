import React from 'react'
import { useLocation } from 'react-router-dom';

function Following() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div>Contoh</div>
  )
}

export default Following;