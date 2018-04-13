import React, {Component} from 'react';

//components
import ProjectCard from './projectCard';

//images
import find12Steps from '../pictures/find12steps.png';
import gameOfLife from '../pictures/gameoflife.png';
// import leaderboard from '../pictures/leaderboard.png';
import memory from '../pictures/memory.png';
import portfolio from '../pictures/portfolio.png';


class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    name: "Portfolio",
                    label: "The responsive prototype for this site... very meta.",
                    img: portfolio,
                    url: "https://p0gbs6.axshare.com/#c=2"
                },
                {
                    name: "find12steps.com",
                    label: "A 12-step search for San Francisco Bay Area residents.",
                    img: find12Steps,
                    url: "http://www.find12steps.com"
                },
                
                {
                    name: "JQuery Memory Game",
                    label: "Feel like a kid again.",
                    img: memory,
                    url: 'https://codepen.io/InfiniteSet/full/EmMjZR',
                    github: 'https://github.com/tony-molumby/Jquery-Memory-Game'
                },
                {
                    name: "Game of Life",
                    label: "Cellular automaton made in ReactJS.",
                    img: gameOfLife,
                    url: 'https://codepen.io/InfiniteSet/full/xXGvbx',
                    github: 'https://github.com/tony-molumby/Game-of-Life'
                }
            ]
        }
    }

    createDisplay = (project, i) => {
        let position = "right";
        if(i % 2) position = "left";
        return (
            <ProjectCard
                name={project.name}
                url={project.url}
                github={project.github}
                label={project.label} 
                img={project.img}
                position={position} 
                key={"project" + i} 
                id={"project" + i} 
            />
        )
    }
    
    render() {
        let {projects} = this.state;
        let projectDisplay = projects.map(this.createDisplay);

        return (
            <div id={this.props.id} className="container">
                <h2>Recent Projects</h2>
                {projectDisplay}
            </div>
        )
    }
} 

export default Projects;