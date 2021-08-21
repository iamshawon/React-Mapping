import React from "react";
import Card from "./components/Card";
import Data from './data.json';

function App(){
    return <div>
                {
                    Data.map((item, index) => <Card titleText={item.title} descText={item.desc} key={index} />)
                }
           </div>
}

export default App;