import React, {Component} from "react";
//import { robots } from './Robots';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
        constructor() {
            super()
            this.state = {
                robots: [],
                seacrhfield: ''
            }
        }

        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response=> Response.json())
            .then(users=> this.setState({ robots: users}))
        }

        onSearchChange = (event) => {
        this.setState({seacrhfield: event.target.value})
        }

        render () {
            const filteredRobots = this.state.robots.filter(robots =>{
                return robots.name.toLowerCase().includes(this.state.seacrhfield.toLowerCase())
            })
            if (this.state.robots.length === 0) {
                return <h1>loading</h1>
            } else {
                return (
                    <div className='tc'>
                        <h1 className="f1">Robofriends</h1>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <CardList robots = {filteredRobots}/>
                    </div>
                );
            }
        }
    
}

export default App;