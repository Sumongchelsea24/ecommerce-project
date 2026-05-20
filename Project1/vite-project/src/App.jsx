import React from 'react'
import Card from './components/card.jsx';
import sujan from "./assets/images/sujan.jpg";
import ramesh from "./assets/images/ramesh.jpg";
import rajesh from "./assets/images/rajesh.jpg";


const App = () => {
  return (
    <div className='parent'>
      <Card img={sujan} name="Sujan Shrestha" age={25} role="FullStack Developer" buttonText="View Profile"  />  
      <Card img={ramesh} name="Ramesh Upreti" age={30} role="UI/UX Designer" buttonText="View Profile"  />
      <Card img={rajesh} name="Rajesh Hamal" age={45} role="Actor" buttonText="View Profile" />


    </div>
  )
}

export default App
