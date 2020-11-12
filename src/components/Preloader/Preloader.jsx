// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import CircularProgress from '@material-ui/core/CircularProgress';
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         '& > * + *': {
//             marginLeft: theme.spacing(2),
//
//
//         },
//         // position: 'absolute',
//         // margin: '0 auto',
//         // top: '50%',
//         // left: '50%'
//
//     },
// }));
//
//  function Preloader() {
//     const classes = useStyles();
//
//     return (
//         <div className={classes.root}>
//             <CircularProgress />
//
//         </div>
//     );
// }
//
// export default Preloader


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },

    },
}));

export default function Preloader() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgress />

        </div>
    );
}