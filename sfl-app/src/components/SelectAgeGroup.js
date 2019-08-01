import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
   
  }));


  export default function CenteredGrid() {
    const classes = useStyles();

    var clickStatusOn4_5 = {
        isclicked:"false"
    }
    
    var clickStatusOn6_8 = {
        isclicked:"false"
    }
    
    var clickStatusOn9_12 = {
        isclicked:"false"
    }

   function handleSelectionChangeOn4_5(event) {
    clickStatusOn4_5.isclicked = "true";
        /**user is only allowed on selection */
        if(clickStatusOn4_5.isclicked === "true"){
            
            clickStatusOn6_8.isclicked = "false";
            clickStatusOn9_12.isclicked = "false";

        }
        console.log(clickStatusOn4_5.isclicked);
        console.log(clickStatusOn6_8.isclicked);
        console.log(clickStatusOn9_12.isclicked);
       
    }
    function handleSelectionChangeOn6_8(event) {
        clickStatusOn6_8.isclicked = "true";
          /**user is only allowed on selection */
          if(clickStatusOn6_8.isclicked === "true"){
            clickStatusOn4_5.isclicked = "false";
            clickStatusOn9_12.isclicked = "false";
        }
        console.log(clickStatusOn6_8.isclicked);
        console.log(clickStatusOn4_5.isclicked);
        console.log(clickStatusOn9_12.isclicked);
    }

    function handleSelectionChangeOn9_12(event) {
        clickStatusOn9_12.isclicked = "true";
         /**user is only allowed on selection */
         if(clickStatusOn9_12.isclicked === "true"){
            clickStatusOn4_5.isclicked = "false";
            clickStatusOn6_8.isclicked = "false";
        }
        console.log(clickStatusOn9_12.isclicked);
        console.log(clickStatusOn6_8.isclicked);
        console.log(clickStatusOn4_5.isclicked);

    }

    
    return (
        <div className={classes.root}>
                
  
        </div>
    );
  }

