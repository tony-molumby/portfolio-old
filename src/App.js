import React, { Component } from 'react';
import AOS from 'aos';

//Custom Components//
import Banner from './components/banner';
import Headshot from './components/headshot';
import Social from './components/social';
import NameHeading from './components/nameHeading';
import Subheadings from './components/subheadings';
import Title from './components/title';
import Bio from './components/bio';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        windowWidth: window.innerWidth,
        scrollY: 0,
        duration: 1200
  }
}
  componentWillMount(){
    AOS.init();
  }

    handleResize = (e) => {
      this.setState({
          windowWidth: window.innerWidth
      });
    }

    handleScroll = (e) => {
      this.setState({
        scrollY: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      });
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('scroll', this.handleScroll);
    }


  render() {
    let {windowWidth, scrollY, duration} = this.state;

    return (
      <div id="wrapper" >
        <div id="app">
          <Banner id="banner" duration={duration} windowWidth={windowWidth} />
          <Headshot id="headshot" duration={duration} />
          <Social id="social" duration={duration}/>
          <NameHeading id="name-heading" duration={duration} />
          <Subheadings id="subheadings" duration={duration} />
          <Bio id="bio" duration={duration} />
          <Projects id="projects" duration={duration}/>
          <Skills id="skills" duration={duration} />
          <Contact id="contact" duration={duration} />
          <Footer id="footer" duration={duration} />
        </div>
      </div>
    );
  }
}

export default App;
