import { createMuiTheme } from '@material-ui/core';

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF0000',
            light: '#FD3F28',
            dark: '#CC0000',
        },
        secondary: {
            main: '#898c89',
            light: '#b9bcb9',
            dark: '#5c5f5c',
        },
        warning: {
            main: '#ffc800',
            light: '#ffd600',
            dark: '#ffab00',
        },
        black: {
            main: '#000',
        },
        background: {
            default: '#fff',
            paper: '#fafafa',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
    },
    text: {
        primary: '#000',
    },
    overrides: {
        MuiGrid: {
            root: {
                flexGrow: 1,
            },
            container: {
                '&$spacing-xs-2': {
                    width: '100%',
                    margin: '0px',
                },
            },
        },
        MuiSvgIcon: {
            root: {
                color: '#000',
            },
        }
    },
    props: {
        MuiCardActionArea: {
            disableRipple: true,
        },
        MuiButtonGroup: {
            disableRipple: true,
        }
    }
});

export default muiTheme;