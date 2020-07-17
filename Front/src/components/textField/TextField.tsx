import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        margin: '0 auto'
    },
    input: {
        marginLeft: theme.spacing(1),
        textAlign: "inherit",
        flex: 1
    },
    iconButton: {
        padding: 10,
    }
}));

interface props {
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


// @ts-ignore
export default function TextField(props) {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon/>
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="...חיפוש משימה"
                inputProps={{'aria-label': 'search google maps', "className": "alignRight"}}
                onChange={(e) => props.handler(e.target.value)}
            />
        </Paper>
    );
}