
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const ToggelMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#080a50';
      showAlert(" Darkmode has been enabel","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Litemode has been enabel","success");
    }
  }
  return (

    <>
      <Navbar title="TextUtils" mode={mode} ToggelMode={ToggelMode} />
      {/* <Navbar/> */}
      <Alert  alert={alert}/>
      <div className='container my-3'>
        <TextForm heading="Enter The Text For Analyze" showAlert={showAlert} mode={mode} />
      </div>

    </>
  );
}

export default App;
