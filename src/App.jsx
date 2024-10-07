import React from "react";
import "./styles.css";
import emojipedia from "./emojipedia";

function App() {
    //    {emojipedia.map(item =>(
    //   <div key={item.id}>

    //     <h1>{item.emoji}</h1>
    //     <p>{item.name}</p>
    //     <p>{item.meaning}</p>
    //   </div>
    // ))}
  
  return (

    

  
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emojipedia[0].emoji}
            </span>
            <span>{emojipedia[0].name}</span>
          </dt>
          <dd>
          {emojipedia[0].meaning}
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emojipedia[1].emoji}
            </span>
            <span>{emojipedia[1].name}</span>
          </dt>
          <dd>
           {emojipedia[1].meaning}
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emojipedia[2].emoji}
            </span>
            <span>{emojipedia[2].name}</span>
          </dt>
          <dd>
           {emojipedia[2].meaning}
          </dd>
        </div>
      </dl>
    </div>
  
  );
}

export default App;

