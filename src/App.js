import githubimage from './github.png'
import './App.css';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <div className="container text-center">
      <h1 className="py-5">Github Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={search}
              onChange={handleChange}
              required
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
          <div>
            <img
              src={githubimage}
              className="responsive rounded-circle"
              alt=""
              height="200px"
            />
            <h1 className="pt-5">
              <a href="#!" className="text-decoration-none" target="_new">
                lorem ipsum
              </a>
            </h1>
            <h3>lorem ipsum</h3>
            <p>
              <a href="#!" className="text-decoration-none" target="_new">
                lorem ipsum
              </a>
            </p>
          </div>
      </div>
    </div>
  );
}

export default App;
