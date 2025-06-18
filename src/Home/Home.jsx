import React, { useRef } from 'react';
import Navbar from '../AllComponent/Navbar';
import Banner from '../AllComponent/Banner';
import AboutMe from '../AllComponent/AboutMe';
import Skill from '../AllComponent/Skill';
import Education from '../AllComponent/Education';
import Projects from '../AllComponent/Projects';
import Contact from '../AllComponent/Contact';
import Footer from '../AllComponent/Footer';

const Home = () => {
  const sectionRefs = {
    aboutMe: useRef(null),
    skill: useRef(null),
    education: useRef(null),
    contact:useRef(null),
    project:useRef(null),
  };

  const handleScroll = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="container mx-auto">
      <Navbar
        onScrollToEducation={() => handleScroll('education')}
        onScrollToSkill={() => handleScroll('skill')}
        onScrollToAboutMe={() => handleScroll('aboutMe')}
        onScrollToContact={() => handleScroll('contact')}
        onScrollToProject={() => handleScroll('project')}
      />
      <Banner />
      <AboutMe ref={sectionRefs.aboutMe} />
      <Skill ref={sectionRefs.skill} />
      <Education ref={sectionRefs.education} />
      <Projects ref={sectionRefs.project}></Projects>
      <Contact ref={sectionRefs.contact}></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
