import React from 'react'
import ReactDOM from 'react-dom'
import Quiz from './components/Quiz'
import './styles/App.css';

function App() {
    return (
        <div className="App">
        <div className="scrollable-div"> </div>
            <Quiz />
        </div>
        
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App></App>, rootElement) //renders the component(first parameter) as a child of the element(second parameter)