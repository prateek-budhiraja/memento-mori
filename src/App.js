import React, {useEffect, useState} from 'react';
import './App.css';
import BirthDate from './BirthDate';

function App() {

  const getLocalDOB = () => {
    const localDOB = new Date(localStorage.getItem("dob"));
    console.log("fetching local data", localDOB);
    if(localDOB){
        return localDOB;
       }
    return new Date();
  }

  const [dob, setDOB] = useState(getLocalDOB());

  const setDate = (date) => {
    setDOB(date)
  }

  useEffect(() => {
    localStorage.setItem("dob", dob.toString());
  }, [dob])

  return (
    <div className="App">
      <h1>Memento Mori</h1>
      <BirthDate dob={dob} setDate={setDate}/>
    </div>
  );
}

export default App;
