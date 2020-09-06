import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '80%',
    backgroundColor: theme.palette.background.paper,
    marginLeft: '150px'
  },
  inline: {
    display: 'inline',
  },
}));

const CommentsDetails = (props) => {
    const classes = useStyles();
    const {id, name, email, body} = props.comment;
    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Picture" src={`https://picsum.photos/200/300?random=${id}`} />
                </ListItemAvatar>
                <ListItemText
                variant="body2"
                primary={name}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary">{email}
                        </Typography>
                        — "{body}"
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
};

export default CommentsDetails;