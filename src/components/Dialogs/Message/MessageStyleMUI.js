import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.background.paper,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    fab: {

        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    snackbar: {
        [theme.breakpoints.down('xs')]: {
            bottom: 90,
        },
    },
}));

export default useStyles;