import React, { Component } from 'react';

//Custom Components//
import Banner from './components/banner';
import Headshot from './components/headshot';
import Social from './components/social';
import NameHeading from './components/nameHeading';
import Subheadings from './components/subheadings';
import Bio from './components/bio';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import AOS from 'aos';

AOS.init();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        windowWidth: window.innerWidth,
        duration: 1200
  }
}

    handleResize = (e) => {
      this.setState({
          windowWidth: window.innerWidth
      });
    }

    componentWillMount(){
  
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      window.addEventListener('load', AOS.refresh);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('load', AOS.refresh);
    }


  render() {
    let {windowWidth, duration} = this.state;

    return (
        <div id="app">
          <Banner id="banner" duration={duration} windowWidth={windowWidth} />
          <Headshot id="headshot" duration={duration} />
          <Social id="social" duration={duration}/>
          <NameHeading id="name-heading" duration={duration} />
          <Subheadings id="subheadings" duration={duration} />
          <Bio id="bio" duration={duration} />
          {/* <Projects id="projects" duration={duration}/>
          <Skills id="skills" duration={duration} /> */}
          <Contact id="contact" duration={duration} />
          <Footer id="footer" duration={duration} />
        </div>
    );
  }
}

export default App;
