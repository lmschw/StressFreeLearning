import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    
  }));


  export default function CenteredGrid() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
        
          
        </div>
    );
  }