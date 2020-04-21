import React from 'react'

const Home = () => {
    return (
        <div>
        <div className='jumbotron'>
           <h1> Medica </h1> <br/>
           <p>Online medical Shop for all your medicines</p>
        </div>
          <div>
              <input type='text' style={{width:'50vw',height:'70px',fontSize:'3vw'}} placeholder="Type the name of medicine"/>
          </div>
         

        </div>
    )
}

export default Home
