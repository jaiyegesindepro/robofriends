import React, {Component} from "react";
import { robots } from './Robots';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {
    constructor() {
        super()
            this.state = {
                robots: robots,
                seacrhfield: ''
            }
    }

    onSearchChange = (event) => {
       this.setState({seacrhfield: event.target.value})
    }

        render () {
            const filteredRobots = this.state.robots.filter(robots =>{
                return robots.name.toLowerCase().includes(this.state.seacrhfield.toLowerCase())
            })
                return (
                    <div className='tc'>
                        <h1 className="f1">Robofriends</h1>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <CardList robots = {filteredRobots}/>
                    </div>
                );
        }
    
}

export default App;