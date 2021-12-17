import React from 'react'
import {  AppBar } from '@material-ui/core'
import movie from '../../images/movie.png'
import movie1 from '../../images/movie1.png'
import useStyles from './styles'

import { Link } from "react-router-dom"


const Header = () => {
    const classes=useStyles()
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div  className={classes.brandContainer}>
                <img className={classes.image} src={movie1} alt="icon" height="80" />
                {" "}
                <img className={classes.image} src={movie} alt="icon" height="80" />
            </div>
            

        </AppBar>
        
    )
}

export default Header
