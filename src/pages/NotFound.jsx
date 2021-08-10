import { makeStyles, Box, Button, Link, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(2),
    },
    btn: {
        color: theme.palette.primary.contrastText,
        margin: theme.spacing(2),
    },
}));

export default function NotFound() {
    const classes = useStyles();
    return (
        <Box className={classes.root} component='div'>
            <Typography variant='h4'>404 - Page Not Found</Typography>
            <Link href='/'>
                <Button className={classes.btn} variant='outlined'>Go Back</Button>
            </Link>
        </Box>
    );
};