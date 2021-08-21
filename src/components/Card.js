const date = "28 July 2021"

function Card(props){
    // Destructuring
    const{titleText, descText} = props; 

    return <div className="card">
              <h3 className="titleStyle">{titleText}</h3>
              <p>{descText}</p>
              <p>{date}</p>
           </div>
}

export default Card;