import React , {useState} from "react";
import Heading from "./Heading";


const quote = [
    "Be yourself; everyone else is already taken.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "True friends stab you in the front.",
]


function App()
{
    function changeQuotes()
    {
        const newQts = quote[Math.floor(Math.random() * quote.length)]
        setQuotes(newQts)
    }
    const [qts , setQuotes ] = useState(quote[0])

return <div>
    <Heading />
    <center>
    {qts}    <br />
    <button onClick={changeQuotes}>changes quoes </button>
    </center>
</div>
}


export default App
