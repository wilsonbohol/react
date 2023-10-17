import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
function App() {
  const [role, setRole] = useState();

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
        <input type="text" onChange={(e)=>{
          console.log(e.target.value);
          setRole(e.target.value);
        }}></input>
          <Employee name="Caleb" role="Intern"/>
          <Employee name="Winter" role ={role}/>
          <Employee name="Minjeong"/>
        </>
      ):(
        <p>You cannot see the employee</p>
      )}
    </div>
  );
}

export default App;
