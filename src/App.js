import { data } from "./data";
import "./App.css";
import { useState } from "react";

function App() {
    const [state, rankState] = useState(data);
    const [showText, setShowText] = useState(false);
    
    const showTextClick = (item) => {
      item.showMore = !item.showMore
      setShowText(!showText)
    }

    return(
<div>
  <div className="container">
          <h1>{state.length} Best States to Live in the USA in 2023</h1>
          <p>Source: https://www.moneyrates.com</p>
          <p>The best states to live in the USA two years after the pandemic on the basis of average wages, cost of living, unemployment rates, and state taxes.</p>
  </div>

  {state.map((item => {
    const {id, stateName, description, image, stateMap, showMore} = item;
        
    const removeState = (id) => {
        let newStates = state.filter((stateName) => stateName.id !== id);
        rankState(newStates);
    }
    
    return(
      <div key={id}>
        <div className="container">
          <h2>{id}. {stateName}</h2>
          <img src={image} width="80%" alt='pic'/>
          <img src={stateMap} width="70%" alt='stateMap'/>
          <p>{showMore ? description : description.substring(0, 200) + "..."}
          <button onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button></p>
          <button className="btn" onClick={() => removeState(id)}>Remove</button>
        </div>
      </div>
    )
    }))}
</div>
)
}

export default App;