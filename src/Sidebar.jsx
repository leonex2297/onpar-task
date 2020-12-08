import React, { useState } from 'react'
import { Container, Paper, Box, Typography, List, ListItem, ListItemText, ListItemIcon, Collapse, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(5),
    },
    sidebar: {
        position: "fixed",
        left: 0,
        top: 0,
        width: "18%",
        height: "100%",
        borderRadius: 0,
    },
    nestedList: {
        paddingLeft: theme.spacing(10),
    }
}));

function Sidebar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Container className={classes.root}>
                <Paper component={Box} className={classes.sidebar}>
                    <List disablePadding>
                        <ListItem >
                            <ListItemText primary={<Typography variant="h5" >CloudesBuzz </Typography>} />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button onClick={() => setOpen(!open)}>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Super Admin" />
                            <ListItemIcon>
                                <ArrowDropDownIcon />
                            </ListItemIcon>
                        </ListItem>
                        <Collapse in={open}>
                            <List disablePadding>
                                <ListItem className={classes.nestedList} button>
                                    <ListItemText>Item 1</ListItemText>
                                </ListItem>
                                <ListItem className={classes.nestedList} button>
                                    <ListItemText>Item 2</ListItemText>
                                </ListItem>
                                <ListItem className={classes.nestedList} button>
                                    <ListItemText>Item 3</ListItemText>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button>
                            <ListItemText primary="Manage Clients" />
                        </ListItem>
                    </List>
                </Paper>
            </Container>

        </div>
    )
}

export default Sidebar
