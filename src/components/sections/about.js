import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'MySQL', 'MongoDB', 'PostgreSQL'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              {/* Hello! My name is Yui and I enjoy creating things that live on the internet. My
              interest in web development started back in 2012 when I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot */}
              {/* about HTML &amp; CSS! */}
              Hello! My name is Yui. My interest in software engineering started back in 2019 when I
              was working as a network sales engineer. I was interested in how the application
              laywer works as well as the job as a network engineer. I learned coding by myself
              through textbooks, videos and tutorials which I really enjoyed! After self-teaching, I
              joined a immersive coding bootcamp called Hack Reactor and learned a full-stack
              development for 9 month.
            </p>

            <p>
              {/* Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://us.mullenlowe.com/">an advertising agency</a>,{' '}
              <a href="https://starry.com/">a start-up</a>,{' '}
              <a href="https://www.apple.com/">a huge corporation</a>, and{' '}
              <a href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. My
              main focus these days is building accessible, inclusive products and digital
              experiences at <a href="https://upstatement.com/">Upstatement</a> for a variety of
              clients. */}
              In my previous company, I was mainly responsible for setting up network switches,
              routers and servers to my clients. I also worked on troubleshooting networks issues.
            </p>

            <p>
              Here are personal projects that I worked on to showcase my skills!
              <li href="https://github.com/Yui1002/Hack-Music">Hack Music</li>{' '}
              <li href="https://github.com/Yui1002/LessonManager">Lesson Manager</li>{' '}
              {/* I also recently{' '}
              that covers everything you need to build a web app with the Spotify API using Node
              &amp; React. */}
            </p>

            <p>Here are technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
