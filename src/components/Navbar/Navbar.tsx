import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import nbalogo from '../../images/nbalogo.jpg';
import { AuthCheck } from 'reactfire';

const useStyles = makeStyles({
    logo: {
        content: `url(${nbalogo})`,
        madWidth: '15%',
        height: '30px',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
    },
    row: {
        display: 'flex', 
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#db9833',
        zIndex: 1,
        borderBottom: '1px black',
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
        alignItems: 'flex-end',
    },
    padding: {
        padding: '5px',
    },
    space: {
        justifyContent: 'space-between'
    },
    ul: {
        listStyleType: 'none',
    },
    width50: {
        width: '50%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingLeft: '5px',
        paddingRight: '5px',
    }
})

export const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.padding} ${classes.space}`}>
            <div className={`${classes.navlogo}`}>
                <Link to='/' className={`${classes.logo} ${classes.padding}`}/>
            </div>
            <div className={`${classes.width50}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.space} ${classes.psides}`}>
                    <Suspense fallback ={'loading...'}>
                        <AuthCheck fallback ={
                            <li>
                                <Button>
                                    <Link to='/signin' className={`${classes.navbarItem} ${classes.psides}`}>Sign In</Link>
                                </Button>
                            </li>
                        }>
                            <li>
                                <Button>
                                    <Link to='/Player_Info' className={`${classes.navbarItem} ${classes.psides}`}>Player Info</Link>
                                </Button>
                            </li>
                        </AuthCheck>
                    </Suspense>
                </ul>
            </div>
        </div>
    )
}