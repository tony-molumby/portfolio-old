import React, {Component} from 'react';


class Bio extends Component {
    
    render() {
        return (
            <div id={this.props.id} className="container">
                <p>
                    Helping others through the use of technology is my driving force.
                    I started as an ICU nurse in a level-1 trauma center, but soon realized another passion of mine,
                    technology, is a much better way to affect large numbers of people in a positive way.
                </p>
                <p>
                    With that in mind, I started working with healthcare tech startups.  
                    First as a project / client services manager for an Real-Time Location Systems company called Awarepoint.
                    Then as the Director of Professional Services leading a team of 5 project managers during more than 40
                    hospital-wide installations across many major healthcare system.
                </p>
                <p>
                    From there I joined the team at RightCare to help improve patient care transitions 
                    from an acute to post-acute setting.  Our proprietary algorithm screened millions of patients, and is still
                    being used today.  I was the 5th employee and seeing a need for a head of product role,
                    I transitioned from client services to product management and strategy.  In December of 2015 RightCare
                    was aquired by naviHealth.
                </p>
                <p>
                    Since my time at RightCare and navi I have been persuing my own interests; traveling and web development.
                    As a product manager I was always curious about the technical / development side of software development.  So
                    I made it my goal to lean web development.  In early 2017 I went on a journey through Central, South America 
                    and Europe with my family.  While traveling I spent time each day teaching myself JavaScript web development.
                    In June 2017 I earned a front-end certificaion from freecodecamp.com and have since invested over a 1000 hours learning
                    other JS related databases and frameworks. 
                </p>
                <p>
                    Most recently I created a website which aggregates 12-step program meetings for people in the San Francisco Bay Area, 
                    find12steps.com.  I have friends and family who have benefitted greatly from these meetings and I wanted to contribute
                    to something that has had such a positive influence on so many people.  With this site, users can search over 2300 
                    meetings from a variety of programs instead of having to browse to multiple sites to get the meeting information they need.
                </p>
                <p>
                    Currently I am looking for a team which values positive company culture and is invested in the success of 
                    their employees.  If that sounds like your organizaton, please contact me using the form below.
                </p>    
            </div>
        )
    }
} 

export default Bio;