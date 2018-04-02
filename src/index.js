import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Jumbotron from './components/Jumbotron'

class App extends Component {
    render() {
        return <Jumbotron title="hello world" />
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))

