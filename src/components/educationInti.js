import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    subjects: {
        color: 'white',
        fontSize: 17
    },
    grades: {
        color: 'white',
        fontSize: 14
    },
}



class EducationInti extends Component {

    state = {
        dense: false,
        secondary: true,
    };

    render() {
        const { dense, secondary } = this.state;
        return (
            <Grid>
                <Cell col={4}>
                    <p style={{ fontSize: '24px' }}>{this.props.startYear}- {this.props.endYear}</p>   <img src={`${this.props.schoolLogo}`} alt="logo" width="200" height="140" />
                </Cell>

                <Cell col={8}>
                    <div>
                        <List dense={dense}>

                            <h4 style={{ marginTop: '0px' }}>{this.props.degreeTaken}</h4>
                            <h5>Subjects taken:</h5>

                            <ul>
                                <li>
                                    <ListItemText
                                        classes={{ primary: this.props.classes.subjects, secondary: this.props.classes.grades }}
                                        primary="Chemistry"
                                        secondary={secondary ? 'Grades:[82/100]' : null}
                                    />
                                </li>
                                <p></p>
                                <li> <ListItemText
                                    classes={{ primary: this.props.classes.subjects, secondary: this.props.classes.grades }}
                                    primary="Mathematics"
                                    secondary={secondary ? 'Grades:[80/100]' : null}
                                />
                                </li>
                                <p></p>
                                <li>
                                    <ListItemText
                                        classes={{ primary: this.props.classes.subjects, secondary: this.props.classes.grades }}
                                        primary="English"
                                        secondary={secondary ? 'Grades:[73/100]' : null}

                                    />
                                </li>
                                <p></p>
                                <li>
                                    <ListItemText
                                        classes={{ primary: this.props.classes.subjects, secondary: this.props.classes.grades }}
                                        primary="Physics"
                                        secondary={secondary ? 'Grades:[84/100]' : null}
                                    />
                                </li>
                                <p></p>
                                <li>

                                    <ListItemText
                                        classes={{ primary: this.props.classes.subjects, secondary: this.props.classes.grades }}
                                        primary="Information Technology"
                                        secondary={secondary ? 'Grades:[79/100]' : null}

                                    />
                                </li>
                                <p></p>
                                <li>
                                    <ListItemText
                                        classes={{ primary: this.props.classes.subjects, secondary: this.props.classes.grades }}
                                        primary="Mathematics Extension1"
                                        secondary={secondary ? 'Grades:[37/50]' : null}
                                    />
                                </li>
                            </ul>











                        </List>
                    </div>
                </Cell>

            </Grid>
        )
    }
}

export default withStyles(styles)(EducationInti);

