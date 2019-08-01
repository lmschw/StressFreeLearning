import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing(1),
    },
  }));


 

  export default function Chips() {
        const classes = useStyles();       
        
          console.log(age4_5State)
        
        const [chipData, setChipData] = React.useState([
            {key: 0, label: '4 - 5', toshow:age4_5State.toString()},
            {key: 1, label: '6 - 8',toshow:false},
            {key: 2, label: '9 - 12',toshow:false},
            {key: 3, label: 'FULL TEST',toshow:false},
            {key: 4, label: 'WORDS ONLY',toshow:false},
            {key: 5, label: 'LETTERS ONLY',toshow:true},
            {key: 6, label: 'NUMBERS ONLY',toshow:true},
        ]);

      



        const handleDelete = chipToDelete => () =>{
            setChipData(chips => chips.filter(chip => chip.key !==chipToDelete.key));
        };

        return (
            
        <div className={classes.root}>
            
       

                {chipData.map(data => {
                    let chipComponent;
                    if(data.toshow != "false"){
                      chipComponent = <Chip
                        toshow={data.toshow}
                        key={data.key}
                        label={data.label}
                        onDelete={handleDelete(data)}
                      
                        className={classes.chip}
                        color="primary"
                        icon={<FaceIcon />}
                     />
                    }
                    return (
                            
                            chipComponent
                    );
                })}
        </div>
        );
    }

