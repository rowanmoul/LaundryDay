import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import playingStyles from "./styles";
import Me from "../../components/Me/Me";
import Opponent from "../../components/Opponent/Opponent";
import MyCard from "../../components/MyCard/MyCard";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';

class Playing extends Component {
    state = {
        card: "null",
        open: false,
        me: {name: "Marissa", avatar: "3"},
        opponentIds: [1,2,3],
        1: {name: "Bob", avatar: "2", selected: true, cards: 12, points: 8},
        2: {name: "Joanna", avatar: "5", selected: false, cards: 5, points: 2},
        3: {name: "Sally", avatar: "4", selected: false, cards: 8, points: 7},
        cards: [ {id: 1, name: "sock"}, {id: 2, name: "mitten"}, {id: 3, name: "boot"}]
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    handleOpen = () => {
        this.setState({ open: true });
    };

    selectedHandler = (prop) => {
        this.state.opponentIds.forEach((key) => {
            this.setState({[key]: {...this.state[key], selected: false}});
        });
        this.setState({[prop]: {...this.state[prop], selected: true}});
    }

    render() {
        const { classes } = this.props;
        let dummyCards = [ {id: 1, name: "sock"}, {id: 2, name: "mitten"}, {id: 3, name: "boot"}];
        let menuItems = dummyCards.map((card) => {
            return <MenuItem key={card.id} value={card.id}>{card.name}</MenuItem>;
        });

        let opponents = this.state.opponentIds.map((opponent) => {
            return ( 
                <Opponent
                    key={opponent} 
                    clicked={() => this.selectedHandler(opponent)}
                    name={this.state[opponent].name} 
                    avatar={this.state[opponent].avatar} 
                    selected={this.state[opponent].selected}
                    cards={this.state[opponent].cards}
                    points={this.state[opponent].points}
            />);
        });

        let select = (
        <div className={classes.select}>
            <Typography className={classes.question} variant="headline">
                Do you have a:
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="controlled-open-select">Card</InputLabel>
                <Select
                    open={this.state.open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={this.state.card}
                    onChange={this.handleChange}
                    inputProps={{
                    name: 'card',
                    id: 'controlled-open-select',
                    }}
                >
                {menuItems}
                </Select>
            </FormControl>
            <Typography className={classes.question} variant="title">
                ?
            </Typography>
            <Button className={classes.button}>Ask</Button>
        </div>
        );

        let myCards = this.state.cards.map((item) => {
            return <MyCard key={item.id} card={item.name} />;
        });

        return (
            <div className={classes.playing}>
                <Typography className={classes.title} variant="title">Laundry Day</Typography>
                <Paper className={classes.paper}>
                <div className={classes.opponents}>
                    {opponents}
                </div>
                {select}
                <div className={classes.cards}>
                    {myCards}
                </div>
                <Me name={this.state.me.name} avatar={this.state.me.avatar}/>
                </Paper>
            </div>
        );
    }
}


export default withStyles(playingStyles, { withTheme: true })(Playing);
