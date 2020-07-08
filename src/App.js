import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {
  const [users,setUsers] = useState([]);
  const [filtered, setFilered] = useState([]);

  useEffect(()=>{
    axios.get('https://randomuser.me/api/?results=200&nat=us')
    .then(({data})=> {
      console.log(data.results)
      setUsers(data.results);
      setFilered(data.results);
    })
  },[])

  const filter = val => {
    //do some filtering here
    const data = users.filter(a=> a.name.first.toLowerCase().includes(val) ||  a.name.last.toLowerCase().includes(val));
    setFilered(data)
  }

  return (
    <>
      <div className="jumbotron">
        <h1 style={{textAlign:"center"}}>Employee Directory</h1>
      </div>
      <div className="container">
        <input onChange={(e)=> filter(e.target.value.toLowerCase())} style={{width:"60vw",margin:"auto"}} placeholder="Search Employee Here"/>
      </div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {filtered.map(a=><tr>
      <th scope="row"><img src={a.picture.thumbnail}/></th>
      <td>{a.name.first}</td>
      <td>{a.name.last}</td>
      <td>{a.email}</td>
      <td>{a.cell}</td>
    </tr>
    )}
  </tbody>
</table>
    </>
  );
}

export default App;
