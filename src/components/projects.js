import React, {Component} from 'react';
import ProjectCard from './projectCard';

//pictures
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
                    github: 'http://www.github.com/tony-molumby/',
                    description: `
                        A website which aggregates 12-step program
                        meetings in San Francisco Bay Area, and 
                        allows users to search for meetings near them.
                    `,
                    img: find12steps
                },
                {
                    name: 'Game of Life',
                    url: 'http://codepen.io/',
                    github: 'http://www.github.com/tony-molumby/',
                    description: `
                        The game of life info from github.
                    `,
                    img: gameoflife
                },
                {
                    name: 'JQuery Memory Game',
                    url: 'http://www.codepen.io/',
                    github: 'http://www.github.com/tony-molumby/',
                    description: `
                    Memory info from github.
                `,
                img: memory
                },
                {
                    name: 'FCC LeaderBoard',
                    url: 'http://www.codepen.io/',
                    github: 'http://www.github.com/tony-molumby/',
                    description: `
                    FCC Info from github.
                `,
                    img: leaderboard
                }
            ]
        }
    }

    createDisplay = (project, i) => {
        return (
            <ProjectCard img={project.img} url={project.url} key={"project" + i} id={"project" + i} />
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