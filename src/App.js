import React, {useEffect, useState} from 'react';
import './App.css';
import BirthDate from './BirthDate';
import Timer from './Timer';

function App() {

  // function to bring retreive date from local storage if available
  const getLocalDOB = () => {
    console.log("fetching data")
    const localDOB = new Date(localStorage.getItem("dob"));
    console.log("fetching local data", localDOB);
    if(localDOB){
        return localDOB;
       }
    return new Date();
  }

  //state that stores the birth date
  const [dob, setDOB] = useState(getLocalDOB());

  // changes state when the date changes
  const setDate = (date) => {
    setDOB(date)
  }

  // when user changes the birth date from date picker, it will store the new date to the local storage
  useEffect(() => {
    localStorage.setItem("dob", dob.toString());
  }, [dob])

  return (
    <div className="App">
      <h1>Memento Mori</h1>
      <BirthDate dob={dob} setDate={setDate}/>
      <Timer dob={dob} />
    </div>
  );
}

export default App;
