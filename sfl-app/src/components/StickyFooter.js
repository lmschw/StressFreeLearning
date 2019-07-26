import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { blue, red } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import Media from 'react-media';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function HomeTypo() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link color="inherit" href="/">
       Home
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  icon: {
    margin: theme.spacing(2),
  },

  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },

  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },

  footer: {
    display: 'flex',
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '',
    width:"100%",
  },
}));



function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


function AllTestIcon(props){
  return (
    <SvgIcon {...props}>
        <path d="M6 6v-4c0-1.1 0.9-2 2-2h10c1.105 0 2 0.895 2 2v0 10c0 1.105-0.895 2-2 2v0h-4v4c0 1.105-0.895 2-2 2v0h-10c-1.105 0-2-0.895-2-2v0-10c0-1.1 0.9-2 2-2h4zM8 6h4c1.105 0 2 0.895 2 2v0 4h4v-10h-10v4zM2 8v10h10v-10h-10z"/>
    </SvgIcon>
  )
}

function ProfileIcon(props){
  return (
    <SvgIcon {...props}>
        <path d="M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
         </SvgIcon>
  )
}

export default function StickyFooter() {
  const classes = useStyles();

function FormRow() {
    return (
      <React.Fragment>

        <Grid item xs={4}>
           <Link color="inherit" href="/">
               <Paper className={classes.paper}>
                 <HomeIcon className={classes.icon} color="primary" />
                  <Typography variant="body2" color="textSecondary">HOME 
                        </Typography>
  
                  </Paper>   
           </Link>
        </Grid>
    
        <Grid item xs={4}>
           <Link color="inherit" href="/">
               <Paper className={classes.paper}>
                 <AllTestIcon className={classes.icon} color="primary" />
                  <Typography variant="body2" color="textSecondary">ALL TESTS 
                        </Typography>
  
                  </Paper>   
           </Link>
        </Grid>

        <Grid item xs={4}>
           <Link color="inherit" href="/">
               <Paper className={classes.paper}>
                 <ProfileIcon className={classes.icon} color="primary" />
                  <Typography variant="body2" color="textSecondary">PROFILE 
                        </Typography>
  
                  </Paper>   
           </Link>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>






      <CssBaseline />
      <footer className={classes.footer}>
       <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
      </footer>
    </div>
  );
}