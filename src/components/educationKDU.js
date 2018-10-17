import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}


class EducationKdu extends Component {

    state = {
        dense: false,
        secondary: true,
    };

    render() {
        const { dense, secondary } = this.state;
        return (
            <Grid>
                <Cell col={4}>
                    <p style={{ fontSize: '24px' }}>{this.props.startYear}- {this.props.endYear}</p> <img src={`${this.props.schoolLogo}`} alt="logo" />
                </Cell>
                <Cell col={8}>

                    <h4 style={{ marginTop: '0px' }}>{this.props.degreeTaken}</h4>
                
                    <h5>Core Strengths:</h5>
                    <ul className="content">
                        <li>C and C++ language</li>
                        <li>Circuit Theory</li>
                        <li>Principles of microcontroller systems</li>
                    </ul>
                    


                </Cell>


            </Grid>
        )
    }
}

export default EducationKdu;