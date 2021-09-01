import { FC } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Divider, List, makeStyles, Theme, Toolbar, Typography, AppBar } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { CssBaseline } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import TimerScreen, { Event } from './TimerScreen';
import LoginButton from './LoginButton';

const onDone = (event: Event) => {
    console.log(`name: ${event.name}`);
    console.log(`start: ${event.start}`);
    console.log(`end: ${event.end}`);
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            flexGrow: 1,
            zIndex: theme.zIndex.drawer + 1,
        },
        barRight: {
            flexGrow: 1,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            marginRight: 2 * drawerWidth,
        },
    }),
);
const Main: FC = () => {
    const appTitle = 'Pomodors';
    const classes = useStyles();
    const taskName = 'SampleTask';
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        {appTitle}
                    </Typography>
                    <div className={classes.barRight} />
                    <LoginButton />

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {['MyTask1', 'MyTask2', 'MyTask3'].map((text, index) => (
                            <ListItem button key={index}>

                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <TimerScreen name={taskName} duration={10} onDone={onDone} />
            </main>
        </div >
    )
}

export default Main;