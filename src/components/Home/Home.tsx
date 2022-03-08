import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Navbar } from '../../components';
import backgroundimg from '../../images/backgroundimg.jpg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    background: {
        backgroundImage: `url(${backgroundimg})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPostions: 'center',
        position: 'absolute',
        zIndex: -1,
        opacity: '.5',
    },
    mainText: {
        display: 'flex',
        textAlign: 'center',
        position: 'relative',
        fontSize: '40px',
        top:'40%',
        color:'white',
        textDecoration: 'none',
        zIndex: 1,
    },
    textBackground: {
        display: 'flex',
        backgroundColor: '#db9833',
        marginTop: '10%',
        marginLeft: '35%',
        marginRight: '38.5%',
        padding:'5px',
        borderRadius: '5px'
    }
})

export const Home = () => {

    const classes = useStyles();

    return (
        <>
            <Navbar />
                <div className={`${classes.background}`}>
                    <div className={`${classes.textBackground}`}>
                        <Button>
                            <Link to={'/Player_Info'} className={`${classes.mainText}`}>Player Information</Link>
                        </Button>
                    </div>
                </div>
        </>
    )
}
