import React, { Fragment } from "react";
import { withStyles } from "material-ui/styles";
import gameStyles from "./styles";
import Divider from "material-ui/Divider";
import Typography from "material-ui/Typography";

const game = props => {
    let { classes } = props;
    return (
        <Fragment>
        <div className={classes.game}>
            <div>
                <Typography variant="title">{props.name}</Typography>
            </div>
            <div>
            {props.num}/4 players
            </div>
        </div>
        <Divider />
        </Fragment>
    );
};

export default withStyles(gameStyles, { withTheme: true })(game);
