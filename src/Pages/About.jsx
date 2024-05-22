import React, { useEffect, useState } from 'react'

function About() {

  const [datas, setData] = useState([]);

  const Fetchjson = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await res.json();
    setData(result);
  }

  useEffect(() => {
    Fetchjson();
  })
  
  return (
    <div>
    <h1>About</h1>
      {datas.map((data) => {
        return (
            <div key={data.id}>
              <p>{data.userId}</p>
              <p>{data.title}</p>
              <p>{data.body}</p>
            </div>
        )})}
    </div>
  )
}

export default About