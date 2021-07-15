import React, {useEffect, useState} from 'react';
import axios from "axios";
import './styles/resets/normalize.css';
import './styles/resets/reset.css';
import './styles.scss';
import './components/DataContainer';
import DataContainer from "./components/DataContainer";
import RiskMeter from "./components/RiskMeter";

function App() {

  const [state, setState] = useState(null);

  useEffect(()=> {
    if(state) {
      return;
    }
    // get data from the server
    axios.get(process.env.REACT_APP_SERVER)
      .then(data => {
        console.log(data);
        setState(data);
      })
      .catch(err => {
        setState({
          error: err.toString()
        });
      });
  })

  if(!state) {
    return (
      <h1>Loading...</h1>
    )
  }

  if(state.error) {
    return (
      <h1>{state.error}</h1>
    )
  }

  return (
    <div className="App">
      <RiskMeter percent={state.data.riskMeter}/>
      <div className="data-containers-holder">
        <DataContainer headline="CLEAR WEB TYPES" data={state.data.clearWeb.types} />
        <DataContainer type="circular-chart" headline="CLEAR WEB SEVERITIES" data={state.data.clearWeb.severities}/>
        <DataContainer type="progress-bar" headline="CLEAR WEB SOURCES %" data={state.data.clearWeb.sources}/>
        <DataContainer headline="DARK WEB TYPES" data={state.data.darkWeb.types}/>
        <DataContainer type="circular-chart" headline="DARK WEB SEVERITIES" data={state.data.clearWeb.severities}/>
        <DataContainer type="progress-bar" headline="DARK WEB SOURCES %" data={state.data.clearWeb.sources}/>
      </div>
    </div>
  );
}

export default App;
