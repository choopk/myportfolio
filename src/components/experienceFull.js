import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class ExperienceFull extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear}- {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
                    <ul className="content">
                        <li>Involved in Alexa Voice Service for Smart Office (Demo)</li>
                        <p />
                        <li>Develop a Smart Office Dashboard utilizing NodeRed.</li>
                        <p />
                        <li>Develop an app for Smart Office using ReactNative and Firebase</li>
                        <p />
                        <li>Integrate hardware and software solutions. For example, setting up and integrating company partner's hardware with company's own software solution. </li>
                        <p />
                        <li>Wrote software for company’s in house developed Infrared controller for their building management system using Arduino IDE.</li>
                        <p />
                        <li>Wrote software for company’s in house developed controller to query Modbus devices for their energy management system using Ardiono IDE.</li>
                    </ul>

                </Cell>

            </Grid>
        )
    }
}

export default ExperienceFull;