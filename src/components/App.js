import React  from 'react';
import './App.css';
import Header from "./Header";
import AddInfo from "./AddInfo";
import InfoList from "./InfoList";
//import InfoView from "./InfoView";
function App() {

  const info = [
    {
      id: '1',
      name: "Raj",
      email: "raj@gmail.com"
    },
    {
      id: '2',
      name: "Taraa",
      email: "taraa@gmail.com"
    }

  ]; 
  return (
    <div className="ui container">
      
      <Header />
      <AddInfo />
      <InfoList infoProperty={info}/>
     
      
    </div>
  );
}

export default App;
