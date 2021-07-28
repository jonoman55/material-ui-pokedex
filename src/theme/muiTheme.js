// Theme color palettes - https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=ECEFF1&secondary.color=212121
export const light = {
    palette: {
        type: 'light',
        primary: {
            main: '#eceff1',
            light: '#ffffff',
            dark: '#babdbe',
            contrastText: '#000000',
            pokeRed: '#FF0000',
        },
        secondary: {
            main: '#212121',
            light: '#484848',
            dark: '#000000',
            contrastText: '#ffffff',
            pokeRed: '#FF0000',
        },
        warning: {
            main: '#ffc800',
            light: '#ffd600',
            dark: '#ffab00',
        },
        black: {
            main: '#000',
            light: '#323643',
        },
        background: {
            default: '#fff',
            paper: '#fafafa',
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
    },
};

export const dark = {
    palette: {
        type: 'dark',
        primary: {
            main: '#212121',
            light: '#484848',
            dark: '#000000',
            contrastText: '#fff',
            pokeRed: '#FF0000',
        },
        secondary: {
            main: '#eceff1',
            light: '#ffffff',
            dark: '#babdbe',
            contrastText: '#000',
            pokeRed: '#FF0000',
        },
        warning: {
            main: '#ffc800',
            light: '#ffd600',
            dark: '#ffab00',
        },
        black: {
            main: '#000',
            light: '#323643',
        },
        background: {
            default: '#fff',
            paper: '#fafafa',
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
            },
        },
        props: {
            MuiCardActionArea: {
                disableRipple: true,
            },
            MuiButtonGroup: {
                disableRipple: true,
            }
        }
    },
};