import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from './avatar.gif';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={avatar}
                            alt="avatar"
                            className="avatar"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;