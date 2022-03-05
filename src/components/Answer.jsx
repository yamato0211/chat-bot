import React from "react";
import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    root: {
        borderColor: '#FFB549',
        color: '#FFB549',
        fontWeight: 600,
        marginBottom: '8px',
        width: '100%',
        "&:hover": {
            backgroundColor: '#FFB549',
            color: 'black'
        }
    }
})

const Answer = (props) => {
    const classes = useStyles();
    return (
        <Stack spacing={2} direction="row">
            <Button
                variant="outlined"
                className={classes.root}
                onClick={() => props.select(props.content, props.nextId)}
            >{props.content}</Button>
        </Stack>
    )
}

export default Answer