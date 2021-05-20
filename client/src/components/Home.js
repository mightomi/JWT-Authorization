import React from 'react';
// import { Link } from 'react-router-dom';

function Home() {

  const [username, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/username")
      .then((res) => res.json())
      .then((username) => setData(username.username));
  }, []);
 
  // console.log(username);
    
  return (
      <div>
        <h1>Welcome {username},</h1>
        
        <h2>Your API to get Current Price is as follow : <a href="http://localhost:8080/api/currentPrice">Link</a></h2>

        <a href="/login">Login!</a> <br></br><br></br>

        <a href="http://localhost:8080/logout">Logout!</a>
      </div>
  );
  
}

export default Home;