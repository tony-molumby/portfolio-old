import React, {Component} from 'react';


class Bio extends Component {
    
    render() {
        return (
            <div 
                id={this.props.id} 
                    data-aos="fade-up" 
                    data-aos-duration={this.props.duration}
                >
                <p>
                    I'm an Innovator who builds digital products, and I enjoy working with organizations 
                    which value positive company culture.
                </p>
                <p>
                    Helping others through the use of technology is my driving force. I started as an ICU 
                    nurse in a level-1 trauma center, and have since been working with tech startups.  
                    My first roles were in professional and client services for a Real-Time Location Systems 
                    company, Awarepoint.  During my time as the Director of Professional Services I played a 
                    major role in creating new installation processes which reduced deployment time, and 
                    increased the accuracy of our technology.
                </p>
                <p>
                    From there I joined the team at RightCare Solutions to help improve patient care transitions 
                    from an acute to post-acute setting. Our proprietary algorithm screened millions of patients, 
                    and is still being used today. I was the 5th employee, and seeing a need for a dedicated product 
                    management role, I transitioned from client services to product management and strategy. In December 
                    of 2015 RightCare was acquired by naviHealth.
                </p>
                <p>
                    Since my time at RightCare and naviHealth I have been working as a consultant and developer for 
                    small business clients in Central America.  I have helped improve operational efficiencies at 2 
                    resort/hotels in Bocas Del Toro, Panama and created my own web projects to give back to the community 
                    in the San Francisco Bay Area.
                </p>
                <p>
                    I am currently looking for new opportunities.  If I sound like a good fit for your organization please 
                    contact me.
                </p>
            </div>
        )
    }
} 

export default Bio;