// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <div>
//         <h1 className="text-3xl">Count: {count}</h1>
//         <button className="p-3 m-3 bg-green-400" onClick={() => setCount(count + 1)}>Increment</button>
//         <button className="p-3 m-3 bg-green-400" onClick={() => setCount(count - 1)}>Decrement</button>
//       </div>
//     </>
//   );
// }

// import React, { useState } from 'react'

// const App = () => {
//   const [color, setColor] = useState(true);
//   return (
//     <div style={{
//       backgroundColor: color,
//       height: '100vh',
//       width: '100%'
//     }}>
//       {/* <h1 className="text-3xl">My favourite color is {color ? 'red' : 'blue'}</h1> */}
//       <h1 className="text-3xl">Color picker</h1>
//       <button className="p-3 m-3 bg-red-600" onClick={() => setColor('red')}>Red</button>
//       <button className="p-3 m-3 bg-blue-600" onClick={() => setColor('blue')}>Blue</button>
//       <button className="p-3 m-3 bg-pink-600" onClick={() => setColor('pink')}>Pink</button>
//       <button className="p-3 m-3 bg-purple-600" onClick={() => setColor('purple')}>Purple</button>
//       <button className="p-3 m-3 bg-yellow-600" onClick={() => setColor('yellow')}>Yellow</button>
//       <button className="p-3 m-3 bg-gray-600" onClick={() => setColor('gray')}>Gray</button>
//       <button className="p-3 m-3 bg-orange-600" onClick={() => setColor('orange')}>Orange</button>
//       <button className="p-3 m-3 bg-green-600" onClick={() => setColor('green')}>Green</button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react';
// import './index.css'; // 

// const Apps = () => {
//   const [data, setData] = useState([]);
//   const [text, setText] = useState('');

//   const getData = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.in/api/products');
//       const res = await response.json();
//       console.log(res); // ✅ See your data
//       setData(res.products); // Or res, depending on structure
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const filteredproducts = data.filter((each)=>
//     each.title.toLowerCase().includes(text.toLowerCase())
// )

//   return (
//     <div className="p-6">
//       <input
//         type="text"
//         className="border-2 border-red-600 p-3 rounded-md"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       {data.map((each) => (
//         <p key={each.id} className="text-blue-500">
//           {each.title}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default Apps;


import React,{useEffect,useState} from 'react'

const timeprogram = ()=>{
    const[time,settime] = useState(0);
    const [isRunning,setRunning] = useState(false);

    useEffect(()=>{
        let intervalId;
        if(isRunning){
            intervalId = setInterval(()=>{
                settime((prev)=prev+1);
            },1000);
        }
    },[]);
     const startAndStop = ()=>{
        setRunning(!isRunning);
     }

    const resetInterval = ()=>{
        setRunning(false);
        settime(0);
    };
    
     const formatTime = (time)=>{
        const hours = Math.floor(time/3600000);
        const min = Math.floor(time%3600000) /60000;
        const sec = Math.floor(time%60000)/1000;

        return `${hours .toString.padStart(2,0)} : ${min.toString().padStart(2,0)} : `
     }

    return(
    <div>
        <h1></h1>
        <button onClick={resetInterval}>Reset</button>
        <button>{isRunning ? "Stop":"Start"}</button>
    </div>
    );
}
export default timeprogram;
