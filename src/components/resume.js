import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../image/avatar.gif';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

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
                        <p>
                            sdfdsfdsfsdfjierjoiwerjwoeij
                            ofiwejurowerweirwer
                            woerweorwre
                    </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <h5>Address</h5>
                        <p>36, Lorong Permai 3, Taman Bukit Gambir, Gelugor, 11700 Pulau Pinang.</p>
                        <h5>Phone</h5>
                        <p>019-8501480</p>
                        <h5>Email</h5>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2012}
                            endYear={2013}
                            schoolName="Inti College"
                            schoolDescription="High"
                        />
                        <Education
                            startYear={2007}
                            endYear={2009}
                            schoolName="KDU University College"
                            degreeTaken="Higher School Certificate"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }}></hr>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2017}
                            endYear={2018}
                            jobName="First Job"
                            jobDescription="sdfssffdsfsfsdfdsf
                            sdfdsfsdfsdfsdsfd"
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