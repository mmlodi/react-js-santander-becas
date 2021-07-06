import React from 'react';



export default function Hello(props){
  return (
    <h1>{props.title} + {props.children}</h1>
  )
};
