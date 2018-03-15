import React, { Component } from 'react';

//CSS
import './App.css';

//Custom Components//
import Header from './components/header';
import Title from './components/title';
import Subtitle from './components/subtitle';
import Banner from './components/banner';
import ProjectTitle from './components/projectTitle';
import Projects from './components/projects';
import Bio from './components/bio';
import SkillsTitle from './components/skillsTitle';
import SkillsGraph from './components/skillsGraph';
import Contact from './components/contact';
import Social from './components/social';
import Footer from './components/footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        windowWidth: window.innerWidth
    };
  }

    handleResize = (e) => {
      this.setState({
          windowWidth: window.innerWidth
      });
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }

  render() {

    return (
      <div className="App">
        <Header id="header" />
        <Title id="title" />
        <Subtitle id="subtitle"/>
        <Banner id="banner" windowWidth={this.state.windowWidth} />
        <ProjectTitle id="project-title" />
        <Projects id="projects"/>
        <Bio />
        <SkillsTitle />
        <SkillsGraph />
        <Contact />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
