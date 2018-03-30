import React, { Component } from 'react';
import {Visibility} from 'semantic-ui-react';

//Custom Components//
import Header from './components/header';
import Title from './components/title';
import Subtitle from './components/subtitle';
import Banner from './components/banner';
import ProjectTitle from './components/projectTitle';
import Projects from './components/projects';
import Bio from './components/bio';
import Skills from './components/skills';
import Contact from './components/contact';
import Social from './components/social';
import Footer from './components/footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        windowWidth: window.innerWidth,
        scrollY: 0
    };
  }
    handleUpdate = (e, { calculations }) => this.setState({ calculations })

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
      <div className="App">
        <Header id="header" windowWidth={windowWidth} />
        <Title id="title" className="separator" />
        <Subtitle id="subtitle" />
        <Banner id="banner" windowWidth={windowWidth} />
        <ProjectTitle id="project-title" className="separator" />
        <Projects id="projects" />
        <Bio id="bio" className="separator" />
        <Skills id="skills" className="separator" />
        <Contact id="contact" className="" />
        <Social id="social" className="separator" />
        <Footer id="footer" className="separator" />
      </div>
    );
  }
}

export default App;
