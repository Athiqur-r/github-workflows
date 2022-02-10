import logo from "./Raheman.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          style={{ height: "350px", width: "270px" }}
          alt="logo"
        />
        <p>
          Helllo All, I am Mohammad Raheman.
          <br /> This webpage is created for testing purpose.
        </p>
        <a
          className="App-link"
          href="https://athiqur-r.github.io/cv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for my CV
        </a>
      </header>
    </div>
  );
}

export default App;
