import React,{useEffect,useState} from 'react'

const Home = () => {
       
    const [msg,setMsg] = useState([])
   
    useEffect(()=>{
        fetch(`http://localhost:8080`,{
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
         
         }).then(res => res.json(res))
         .then( data =>{
          
         console.log(data)
         setMsg(msg=>data)
         })
      
        
      },[])

    return (
        <div>
        <div className='jumbotron'>
           <h1> Medica </h1> <br/>
           <p>Online medical Shop for all your medicines</p>
        </div>
          <div>
              <input type='text' style={{width:'50vw',height:'70px',fontSize:'3vw'}} placeholder="Type the name of medicine"/>
          </div>
    <h1>{msg.message}</h1>

        </div>
    )
}

export default Home
