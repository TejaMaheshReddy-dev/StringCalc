import './App.css';

function App() {
  const handleOnClick=()=>{
    console.log("Clicked")
  }
  const handleOnChange=(event)=>{
    const stringValue=event.target.value
    console.log(stringValue)
  }
  return (
    <div className="App">
      <div className="card">  
        <h2>String Calculator</h2>    
        <textarea  type="text" className="custom-input" placeholder="Enter value ..." rows={5} onChange={(event)=>handleOnChange(event)}/>  
        <button className="custom-btn" onClick={handleOnClick}>Calculate</button>  
      </div>
    </div>
  );
}

export default App;
