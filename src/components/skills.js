import React, {Component} from 'react';
import SkillsGraph from './skillsGraph';

class Skills extends Component {
    render(){
        return(
            <div id={this.props.className} className={"container " + this.props.className}>
                <h2>My Coding Skills</h2>
                <h3 id="skills-text">
                    I love learning new skills, and want to continue 
                    to improve my web, and mobile dev skills.  
                    This graph represents my current comfort level 
                    with each language / framework.
                </h3>
                <SkillsGraph id="skills-graph" />
            </div>
        )
    }
}

export default Skills;