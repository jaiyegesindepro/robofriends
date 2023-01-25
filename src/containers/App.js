import React, {Component} from "react";
//import { robots } from './Robots';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
            const { robots, seacrhfield } = this.state;
            const filteredRobots = robots.filter(robot =>{
                return robot.name.toLowerCase().includes(seacrhfield.toLowerCase())
            })
            return !robots.length ?
                <h1>loading</h1> :
             (
                    <div className='tc'>
                        <h1 className="f1">Robofriends</h1>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <Scroll>
                            <CardList robots = {filteredRobots}/>
                        </Scroll>
                    </div>
                );
        }
    
}

export default App;