import React, {Component} from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Todo item number 1",
                completed: false
            },
            {
                id: 2,
                title: "Todo item number 2",
                completed: true
            },
            {
                id: 3,
                title: "Todo item number 3",
                completed: false
            },
            {
                id: 4,
                title: "Todo item number 4",
                completed: false
            }
        ]
    };

    render() {

        return (
            <div className="App">
                <Todos todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
