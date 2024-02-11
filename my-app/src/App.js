import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  console.log({
    uname,
    email,
    password,
  });

  const handlesubmit =(e)=> {
    e.preventDefault();
    Axios.post("http://localhost:1818/resister", {uname, email, password})
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("http://localhost:1818/api/user", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userdata");
        setData(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="form">
        <form method="post" action="/resister">
          <h1>resistration form</h1>
          <div className="name">
            <label>Name: </label>
            <input
              type="text"
              name="uname"
              value={uname}
              onChange={(e) => {
                setUname(e.target.value);
              }}
            ></input>
          </div>
          <div className="email">
            <label>email: </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="password">
            <label>password: </label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="btn">
          <button onClick={handlesubmit}>Submit Now</button>
          </div>
        </form>
      </div>

      <div className="tabledata">
        <table style={{ width: "500px" }}>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>password</th>
          </tr>
          {data.map((i) => {
            return (
              <tr>
                <td>{i.uname}</td>
                <td>{i.email}</td>
                <td>{i.password}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
