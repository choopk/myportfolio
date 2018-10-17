import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class ExperienceInternship extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear}- {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
                    <ul  className="content">
                        <li>Involved in Android app development for ISKL(International School Of Kuala Lumpur) data center management system</li>
                        <p />
                        <li>Learned basic networking configuration</li>
                        <p />
                        <li>Learned how to query and control modbus devices</li>
                        <p />
                        <li>designed and deployed 8 RS-485 Remote I/O Modules at Paddy Proccessing Factory(PLS marketing) to tap paddy dryer status whether it is on or off for the company's paddy drying automation system.</li>
                    </ul>

                </Cell>

            </Grid>
        )
    }
}

export default ExperienceInternship;