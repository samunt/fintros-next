import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        alignContent: "center",
    },
    item: {
        flex: "1 0 auto",
        margin: "6px",
    },
    fontSlide: {
        fontSize: "2rem",
    },
    buttonWidth: {
        width: "20em",
        height: "6em",
    },
    leftButton: {
        marginRight: "29%",
    },
    MuiButtonLabel: {
        fontSize: "30px",
    }
};

const marks = [
    {
        value: 0,
        label: 'Family',
    },
    {
        value: 33,
        label: 'Basics',
    },
    {
        value: 66,
        label: 'Finances',
    },
    {
        value: 100,
        label: 'Recommendation',
    },
];



class FormComponent extends Component {
    constructor(props) {
        super(props)
        this.valueLabelFormat = this.valueLabelFormat.bind(this)
        this.valuetext = this.valuetext.bind(this)
    }
    valuetext(value) {
        return `${value}°C`;
    }
    valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }
    render() {
        const {classes} = this.props;
        return (
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Slider
                                defaultValue={0}
                                valueLabelFormat={this.valueLabelFormat}
                                getAriaValueText={this.valuetext}
                                aria-labelledby="discrete-slider-restrict"
                                step={null}
                                valueLabelDisplay="auto"
                                marks={marks}
                                className={classes.fontSlide}
                            />
                            <br/><br/>
                            <Typography variant="h2" gutterBottom style={{textAlign: "center"}}>
                                Do you have a spouse or partner?
                            </Typography>
                            <div className="button-container">
                                <Button variant="outlined" size="large" color="primary" className={`${classes.buttonWidth} ${classes.leftButton}`}>
                                    Yes
                                </Button>
                                <Button variant="outlined" size="large" color="primary" className={classes.buttonWidth}>
                                    No
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
        )
    }
}
export default withStyles(styles)(FormComponent);
