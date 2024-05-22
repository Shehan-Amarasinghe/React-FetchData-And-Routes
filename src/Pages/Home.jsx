import React, { useEffect, useState } from 'react'

function Home() {

  const [comments, setComments] = useState([]);

  const fetchData = async () => {
     try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments")
      const result = await response.json();
      setComments(result);

     } catch (error) {
      console.log(error);
     }
 
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
   <div>
      <h1>Comments</h1>
      {comments.map((comment) => {
       return (
          <div key={comment.id}>
          <p>{comment.name}</p>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      )})}
   </div>
  )
}

export default Home