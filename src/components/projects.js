import React, {Component} from 'react';

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
                    img: '../pictures/find12steps.png'
                },
                {
                    name: 'Game of Life',
                    url: 'http://codepen.io/',
                    github: 'http://www.github.com/tony-molumby/',
                    description: `
                        The game of life info from github.
                    `,
                    img: ''
                },
                {
                    name: 'JQuery Memory Game',
                    url: 'http://www.codepen.io/',
                    github: 'http://www.github.com/tony-molumby/',
                    description: `
                    Memory info from github.
                `,
                img: ''
                },
                {
                    name: 'FCC LeaderBoard',
                    url: 'http://www.codepen.io/',
                    github: 'http://www.github.com/tony-molumby/',
                    description: `
                    FCC Info from github.
                `,
                    img: ''
                }
            ]
        }
    }

    createDisplay = (project) => {
        return (
            <div>
                <img src={project.img} />
                <h4>{project.description}</h4>
            </div>
        )
    }

    render(){
        return(
            <div>
            {/* PlaceHolder */}
            </div>
        )
    }
}

export default Projects;