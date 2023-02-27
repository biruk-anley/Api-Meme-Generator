import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    //console.log(starWarsData)---this statement makes a component to be renderd many times
    // and that is why we use side effect called useEffect
    
    
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
