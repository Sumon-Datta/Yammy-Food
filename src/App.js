// import React, { useEffect } from 'react';
import Home from "./components/Home/Home"

const App = () => {

  // useEffect(()=>{
  //   const fetchData = async () =>{
  //     const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  //     const data = await res.json();
  //     console.log(data)
  //   }
  //   fetchData()
  //  }, [])

 



  // useEffect(()=>{
  //   fetch('bbq.json')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // },[])
  return (
    <div>
       
      {/*------------ home -------------------*/}
      <Home></Home>
      {/*------------ home -------------------*/}
    </div>
  );
};

export default App;