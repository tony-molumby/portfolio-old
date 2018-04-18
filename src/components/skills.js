import React, {Component} from 'react';
import SkillsGraph from './skillsGraph';

class Skills extends Component {
    render(){
        return(
            <div id={this.props.id} className={"container " + this.props.className}>
                <h2 data-aos="fade-up" 
                    data-aos-duration={this.props.duration}>
                    My Coding Skills
                </h2>
                <hr data-aos="fade-up" 
                    data-aos-duration={this.props.duration}/>
                <h3 id="skills-text" 
                    data-aos="fade-up" 
                    data-aos-duration={this.props.duration}>
                    Aside from my experience in product management, I am also versed in a variety of
                    web languages and frameworks.  This graph represents my current comfort level in each
                    of the technologies listed below.
                </h3>
                <SkillsGraph id="skills-graph" duration={this.props.duration} />
            </div>
        )
    }
}

export default Skills;