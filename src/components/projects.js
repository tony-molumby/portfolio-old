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
                    label: "The responsive prototype and repo for this site... very meta.",
                    img: portfolio,
                    url: "https://p0gbs6.axshare.com/#c=2",
                    github: "https://github.com/tony-molumby/portfolio"
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
                number={i}
                duration={this.props.duration}
                key={"project" + i}  
                id={"project" + i} 
            />
        )
    }
    
    render() {
        let {projects} = this.state;
        let projectDisplay = projects.map(this.createDisplay);

        return (
            <div id={this.props.id}>
                <div 
                    id="projects-heading"
                    data-aos="zoom-in-right"
                    data-aos-duration={this.props.duration}
                    >
                    <h2 id="projects-subheading-1">Projects
                    </h2>
                    <hr />
                    <h3 id="projects-subheading-2">
                        These items were chosen from my most recent
                        coding projects.
                    </h3>
                </div>
                {projectDisplay}
            </div>
        )
    }
} 

export default Projects;