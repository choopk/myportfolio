import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton } from 'react-mdl';
import avatar from '../image/AcControl.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{ mindIwidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '500px', background: 'url(https://i.imgur.com/m02TAYE.png)' }}></CardTitle>
                        <CardText>
                            werewr
                    </CardText>
                        <CardActions border>

                            {/* Github 
                     <Button colored>GitHub</Button>
                        <Button colored>Video</Button>
                    */}

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>


                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ mindIwidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://teamairship.com/wp-content/uploads/2017/10/react-native-workshop.jpg) center / cover' }}></CardTitle>
                        <CardText>
                            werewr
                    </CardText>
                        <CardActions border>

                            {/* Github 
                     <Button colored>GitHub</Button>
                        <Button colored>Video</Button>
                    */}

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>


                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ mindIwidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://teamairship.com/wp-content/uploads/2017/10/react-native-workshop.jpg) center / cover' }}></CardTitle>
                        <CardText>
                            werewr
                    </CardText>
                        <CardActions border>

                            {/* Github 
                     <Button colored>GitHub</Button>
                        <Button colored>Video</Button>
                    */}

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>


                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Angular</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is VueJS</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }



    render() {

        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Smart Home App</Tab>
                    <Tab>React</Tab>
                    <Tab>React</Tab>
                    <Tab>React</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>


                </section>
            </div>
        )
    }
}

export default Projects;