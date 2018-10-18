import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../image/avatar.gif';
import EducationInti from './educationInti';
import EducationKdu from './educationKDU';
import Internship from './experienceInternship';
import FullTime from './experienceFull';
import Skills from './skills';
import Inti from '../image/inti.png';
import Kdu from '../image/kdu.png';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img className="avatar-resume"
                                src={avatar}
                                alt="avatar"
                            />
                        </div>
                        <h2 style={{ paddingTop: '0.5em' }}>Choo Jian Cheng</h2>
                        <h4 style={{ color: 'grey' }}>Programmer and Engineer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p className="about-me">
                            I am an electrical and electronics engineer and also a self taught web developer. I have experience developing software for embedded systems like nrf51822, esp32, esp8266 and raspberry pi. Besides dabbling in the realm of electronics, I also have
                            a keen interest in web development with an emphasis on Frontend web development and mobile using React and React Native. In addition to that, I also have knowledge
                            building simple CRUD applications, RESTFUL APIs using Node.js and express.
                       </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <h2>Address</h2>
                        <p className="about-me">36, Lorong Permai 3, Taman Bukit Gambir, Gelugor, 11700 Pulau Pinang.</p>
                        <h2>Phone</h2>
                        <p className="about-me"> 019-8501480</p>
                        <h2>Email</h2>
                        <p className="about-me">choopk1994@gmail.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <EducationInti
                            startYear={2012}
                            endYear={2013}
                            schoolLogo={Inti}
                            degreeTaken="High School Certificate"
                        />
                        <EducationKdu
                            startYear={2013}
                            endYear={2017}
                            schoolLogo={Kdu}
                            degreeTaken="Bachelor of Engineering (Hons) in Electrical & Electronic Engineering (First Class)"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }}></hr>
                        <h2>Experience</h2>
                        <Internship
                            startYear={2016}
                            endYear={2017}
                            jobName="Internship at Tanand Technology"
                        />
                        <FullTime
                            startYear={2017}
                            endYear={2018}
                            jobName="Tanand Technology"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={70}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={40}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={40}
                        />
                        <Skills
                            skill="React"
                            progress={50}
                        />
                        <Skills
                            skill="C/C++"
                            progress={40}
                        />
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume;