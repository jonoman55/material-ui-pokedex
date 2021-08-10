import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'space-between',
        justifyContent: 'center',
        borderColor: theme.palette.primary.dark,
        borderRadius: '1rem',
        border: 'solid',
        borderWidth: '2px',
        backgroundColor: theme.palette.primary.dark,
        '& .MuiCardContent-root': {
            paddingTop: '8px',
            paddingBottom: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        '& .MuiCardActions-spacing > :not(:first-child)': {
            marginLeft: '24px',
        },
        '& .MuiButton-root': {
            transition: 'none',
        },
    },
    content: {
        '& .MuiCardActionArea-focusHighlight': {
            backgroundColor: 'inherit',
        },
    },
    header: {
        '& .MuiCardHeader-avatar': {
            marginLeft: '-8px',
        },
    },
    avatar: {
        display: 'flex',
        marginRight: '0px',
        position: 'static',
        width: '50px',
        height: '50px',
        paddingRight: '0px',
        borderRadius: '1rem',
        borderWidth: '1px',
        border: 'solid',
        borderColor: theme.palette.primary.dark,
        backgroundColor: theme.palette.background.default,
        '& .MuiAvatar-img': {
            display: 'flex',
            color: 'transparent',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            textAlign: 'center',
            textIndent: '10000px'
        },
    },
    image: {
        height: '350px',
        maxHeight: '350px',
        width: '100%',
        minWidth: 'auto',
        objectFit: 'contain',
        cursor: 'default',
        borderColor: theme.palette.primary.dark,
        borderRadius: '2rem',
        border: 'solid',
        borderWidth: '1px',
        backgroundColor: theme.palette.background.default,
    },
    title: {
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        paddingBottom: '10px',
        color: theme.palette.primary.contrastText,
        '& .MuiTypography-displayBlock': {
            display: 'flex',
            textAlign: 'center',
            fontSize: '1.25rem',
            fontWeight: 700,
            flexDirection: 'column',
            textTransform: 'uppercase'
        },
        '& .MuiTypography-colorTextSecondary': {
            color: theme.palette.primary.light,
            fontSize: '1rem',
            marginRight: '10px'
        },
        '& .MuiCardHeader-content': {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px'
        },
        '& .MuiCardHeader-action': {
            alignSelf: 'baseline',
            marginTop: '-2.5px',
            marginRight: '-12px',
            height: '30px',
            width: '30px',
        },
    },
    text: {
        display: 'flex',
        padding: theme.spacing(1),
        margin: theme.spacing(2),
        fontSize: '1rem',
        fontWeight: 500,
        minHeight: '5.5rem', // fixes card height issue
        color: theme.palette.primary.contrastText,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignContent: 'center',
    },
    info: {
        display: 'flex',
        width: 'max-content',
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.primary.pokeRed,
            color: theme.palette.primary.contrastText,
            transition: '0.1s',
            borderRadius: '1.5rem',
            textDecoration: 'none',
        },
        '& .MuiButton-label': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(0.5),
        }
    },
    types: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    starContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
    star: {
        color: theme.palette.warning.main,
    },
    divider: {
        margin: '15px',
        backgroundColor: theme.palette.primary.contrastText,
    },
}));