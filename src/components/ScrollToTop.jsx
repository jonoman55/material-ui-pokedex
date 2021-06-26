import React, { useState, useEffect } from 'react';
import { makeStyles, Box, IconButton } from '@material-ui/core';
import { ExpandLess } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    toTop: {
        height: '24px',
        width: '24px',
        bottom: '3.55rem',
        right: '0.225rem',
        position: 'fixed',
        marginBottom: '0.55rem',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            transition: '0.2s',
            backgroundColor: theme.palette.secondary.light,
            '& .MuiSvgIcon-root': {
                color: theme.palette.primary.main,
            },
        },
    },
}));

export default function ScrollToTop({ showBelow }) {
    const classes = useStyles();
    const [show, setShow] = useState(showBelow ? false : true);

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll);
            return () => window.removeEventListener(`scroll`, handleScroll);
        };
    });

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true);
        } else {
            if (show) setShow(false);
        }
    };

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` });
    };

    return (
        <Box component='div'>
            {show &&
                <IconButton className={classes.toTop} onClick={handleClick}>
                    <ExpandLess />
                </IconButton>
            }
        </Box>
    );
}