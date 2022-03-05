import React from "react";
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import { Chat } from '.'


const useStyles = makeStyles({
    "chats": {
        height: '60%',
        padding: '0',
        overflow: 'auto',
    }
})

const Chats = (props) => {
    const styles = useStyles();
    return (
        <List className={styles.chats} id={'scroll-area'}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()} />
            })}
        </List>
    )
}

export default Chats