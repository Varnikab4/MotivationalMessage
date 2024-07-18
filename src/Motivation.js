import {useState, useEffect} from "react";
import axios from "axios";

function Motivation(){
    const[msg, setMsg] = useState("");
    const[aut, setAut] = useState("");

    const gm = (event) =>{
        // event.preventDefault();

        let url = "https://quotes-api-self.vercel.app/quote";
        axios.get(url)
        .then(res =>{
            setMsg(res.data.quote);
            setAut(res.data.author);

        })
        .catch(err =>alert("issue"+err));

        }
        
        useEffect(() => {
            gm();
            setInterval(gm,5000);
    },[]);


return(
      <>
      <center>
        <h1>MOTIVATIONAL MESSAGE APP</h1>
        <form onSubmit={gm}>
            <input type = "submit" value="Submit"></input>
        </form>
        <h2 id="msg">{msg}</h2>
        <h2 id="aut">{aut}</h2>
      </center>
      </>
);
}export default Motivation;