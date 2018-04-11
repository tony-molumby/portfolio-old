import React, {Component} from 'react';
import SkillsGraph from './skillsGraph';

class Skills extends Component {
    render(){
        return(
            <div id={this.props.className} className={"contain " + this.props.className}>
                <div id="skills-title" className="auto-width">
                    <h2>Skills</h2>
                    <div className="hr"></div>
                </div>
                <h3 id="skills-text">
                    I love learning new skills, and want to continue 
                    to improve my web, and mobile dev skills.  
                    Below represents my current comfort level 
                    with each language / framework.
                </h3>
                <SkillsGraph id="skills-graph" id="skills-graph" />
            </div>
        )
    }
}

export default Skills;