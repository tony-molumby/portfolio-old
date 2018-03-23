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
        // windowWidth: window.innerWidth,
        calculations: {
          direction: 'none',
          height: 0,
          width: window.innerWidth,
          topPassed: false,
          bottomPassed: false,
          pixelsPassed: 0,
          percentagePassed: 0,
          topVisible: false,
          bottomVisible: false,
          fits: false,
          passing: false,
          onScreen: false,
          offScreen: false,
        }
    };
  }
    handleUpdate = (e, { calculations }) => this.setState({ calculations })

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
    let {calculations} = this.state;

    return (
      <div className="App">
        <Header id="header" windowWidth={calculations.width} />
        <h4>{calculations.width}</h4>
        <Title id="title" className="separator" />
        <Subtitle id="subtitle" />
        <Banner id="banner" windowWidth={calculations.width} className="separator" />
        <ProjectTitle id="project-title" className="separator" />
        <Projects id="projects" />
        <Bio id="bio" className="separator" />
        <Skills id="skills" className="separator" />
        <Contact id="contact" className="" />
        <Social id="social" className="separator" />
        <Visibility onUpdate={this.handleUpdate} className="App" fireOnMount>
          <Footer id="footer" className="separator" />
        </Visibility>
      </div>
    );
  }
}

export default App;
