import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton } from 'react-mdl';
import Gallery from 'react-photo-gallery';
import ReactPlayer from 'react-player'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(PHOTO_SET_APP, PHOTO_SET_IR_BLASTER, PHOTO_SET_POWER_METER) {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <Grid>
                        <Cell col={6}>
                            <div>
                                <Gallery photos={PHOTO_SET_APP} />
                            </div>
                        </Cell>

                        <Cell col={6}>
                            <div className="smart-home">
                                This is a react native project which allows the user to check energy statistics, office activity, office temperature, control lighting and air conditioning.
                                Some of the tools used in this project.
                                <ul className="smart-home-content">
                                    <li>create-react-native-app cli</li>
                                    <li>react-navigation</li>
                                    <li>react native firebase</li>
                                    <li>axios</li>
                                    <li>express server</li>
                                </ul>

                            </div>
                        </Cell>
                    </Grid>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <Grid>
                    <Cell col={6}>
                        <div className="ir-blaster">
                            <Gallery photos={PHOTO_SET_IR_BLASTER} />
                        </div>
                    </Cell>

                    <Cell col={6}>
                        <div className="smart-home">
                            This is a Arduino project where the esp8266 acts as the heart of the ir controller module. The sample code for this project can be
                            found through the icon link in the home page. It functions as follows:
                             <ul className="smart-home-content">
                                <li>read current through CT clamps do determine Air conditioner is running or not</li>
                                <li>turn AC on/off through an IR blaster. Commands are issued using mqtt pub/sub messages</li>
                                <li>react native firebase</li>
                                <li>has a soft ap to spawn a config page to configure wifi credentials and mqtt broker settings</li>
                            </ul>

                        </div>
                    </Cell>
                </Grid>

            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <Grid>
                        <Cell col={6}>
                            <div>
                                <ReactPlayer url='https://youtu.be/7W5SgI9_f5g' playing playsinline />
                            </div>
                        </Cell>

                        <Cell col={6}>
                            <div className="smart-home-content">
                                This is voice service control using Alexa to turn on/off lights and air conditioning units. Some of the tools used in this project
                                <ul className="smart-home-content">
                                    <li>node-red acting as an end pointfor alex voice services and running application logic </li>
                                    <li>IR controller</li>
                                </ul>
                            </div>
                        </Cell>
                    </Grid>

                </div>

            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="smart-home-content">
                    <Gallery photos={PHOTO_SET_POWER_METER} />
                    <p/>
                    
                    This is an Arduino project which uses esp32 as the main controller to query 
                    data from the power meters using modbus RTU protocol.   
                    Some of the tools used in this project. The code for this project  can be found through the icon link in the home page:

                      <ul className="smart-home-content">
                                <li>esp32</li>
                                <li>5v max485 TTL module</li>
                                <li>Thingsboard as the IoT platform to display the analytics and run the application logic</li>
                              
                     </ul>
                </div>
            )

        }
    }

    render() {
        const PHOTO_SET_APP = [
            {
                src: 'https://i.imgur.com/1XZb4hQ.png',
                width: 50,
                height: 100
            },
            {
                src: 'https://i.imgur.com/FDw5Eez.png',
                width: 50,
                height: 100
            },
            {
                src: 'https://i.imgur.com/XLaC95w.png',
                width: 50,
                height: 100
            },
            {
                src: 'https://i.imgur.com/SOzplkh.png',
                width: 50,
                height: 100
            },
            {
                src: 'https://i.imgur.com/xZBy5Pl.png',
                width: 50,
                height: 100
            },
            {
                src: 'https://i.imgur.com/qexLPpB.png',
                width: 50,
                height: 100
            }
        ];

        const PHOTO_SET_IR_BLASTER = [
            {
                src: 'https://i.imgur.com/uqAduSA.jpg',
                width: 140,
                height: 200
            },
        ];

        const PHOTO_SET_POWER_METER = [
            {
                src: 'https://i.imgur.com/h2SUyVh.jpg',
                width: 300,
                height: 200
            },
            {
                src: 'https://i.imgur.com/VElCcoP.jpg',
                width: 300,
                height: 200
            }

        ];

        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Smart Home App</Tab>
                    <Tab>IR blaster controller</Tab>
                    <Tab>Alexa Voice control</Tab>
                    <Tab>Esp32 to rs485 power meter controller</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories(PHOTO_SET_APP, PHOTO_SET_IR_BLASTER, PHOTO_SET_POWER_METER)}</div>
                        </Cell>
                    </Grid>


                </section>
            </div>
        )

    }
}

export default Projects;