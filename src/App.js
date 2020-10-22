import React from 'react'
import logo from './logo.svg'
import './App.css'
import Clock from './Clock'

function Welcome(props) {
    return <h1>Welcome to {props.name}</h1>
}

function App() {
    return (
        <div className="App">
            <Welcome name="TTDP" />
            <Clock />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
