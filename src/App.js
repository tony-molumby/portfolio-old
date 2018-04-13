import React, { Component } from 'react';

//Custom Components//
import Headshot from './components/headshot';
import Social from './components/social';
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
        scrollY: 0
  }
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
    let {windowWidth, scrollY} = this.state;

    return (
      <div id="wrapper" >
        <div id="app">
          <Headshot id="headshot" />
          <Social id="social" />
          <Title id="title" />
          <Bio id="bio" />
          <Projects id="projects"/>
          <Skills id="skills" />
          <Contact id="contact" />
          <Footer id="footer" />
        </div>
      </div>
    );
  }
}

export default App;
