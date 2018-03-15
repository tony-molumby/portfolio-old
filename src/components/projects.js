import React, {Component} from 'react';
import ProjectCard from './projectCard';

//images
import find12steps from '../pictures/find12steps.png';
import gameoflife from '../pictures/gameoflife.png';
import leaderboard from '../pictures/leaderboard.png';
import memory from '../pictures/memory.png';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    name: "find12steps.com",
                    url: "http://www.find12steps.com",
                    description: `
                        A website which aggregates 12-step program
                        meetings in San Francisco Bay Area.
                    `,
                    img: find12steps
                },
                {
                    name: 'Game of Life',
                    url: 'https://codepen.io/InfiniteSet/full/xXGvbx',
                    github: 'https://github.com/tony-molumby/Game-of-Life',
                    description: `
                    A cellular automaton devised by the British 
                    mathematician John Horton Conway in 1970. 
                    `,
                    img: gameoflife
                },
                {
                    name: 'JQuery Memory Game',
                    url: 'https://codepen.io/InfiniteSet/full/EmMjZR',
                    github: 'https://github.com/tony-molumby/Jquery-Memory-Game',
                    description: `
                    A JQuery version of the simon memory game we all
                    played when we were kids. 
                    `,
                    img: memory
                },
                {
                    name: 'FCC LeaderBoard',
                    url: 'https://codepen.io/InfiniteSet/full/YxBLvr/',
                    github: 'https://github.com/tony-molumby/FCC-LeaderBoard',
                    description: `
                    Leaderboard of FCC users based on points. 
                `,
                    img: leaderboard
                }
            ]
        }
    }

    createDisplay = (project, i) => {
        return (
            <ProjectCard
                name={project.name}
                url={project.url}
                github={project.github}
                description={project.description} 
                img={project.img} 
                key={"project" + i} 
                id={"project" + i} 
                />
        )
    }

    render(){
        let {projects} = this.state;
        let cards = projects.map(this.createDisplay);
        return(
            <div>
                {cards}
            </div>
        )
    }
}

export default Projects;