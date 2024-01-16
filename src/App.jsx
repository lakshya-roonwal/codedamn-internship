import "./App.css";

function App() {
	return (
    <>
      <div className="main">
        <h1>Joke Generator</h1>
        <button className="send-btn">Generate</button>
        <div className="joke-container">
          <p className="joke-text"></p>
        </div>
      </div>
    </>
  );
}

export default App;
