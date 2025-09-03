import React from 'react'
import { useNavigate, useParams } from 'react-router';

const About = () => {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params,'--------------------');
  return (
    <div>
      <p>About page</p>
      <button onClick={()=>navigate("/")} className="mx-4 mt-3 p-1 border-2 bg-red-500 text-4xl">Home</button>
    </div>
  )
}

export default About
