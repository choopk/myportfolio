import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../image/avatar.gif';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={avatar}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Programmer and electronics engineer</h1>

                            <hr />
                            <p>HTML/CSS | Javascript | React | React Native | Express | C/C++ |</p>
                            <div className="social-links">
                                {/* Github*/}
                                <a href="https://github.com/choopk" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;