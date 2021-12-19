import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardActions, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import useStyles from './styles'
import { LIKE, DISLIKE, UNLIKE, UNDISLIKE,DELETE } from '../../../constants/actionTypes';

// import {movies$} from '../../../mock/movies'

const Movie = ({ movie }) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [toggleLike, setToggleLike] = useState(false)
    const [toggleDislike, setToggleDislike] = useState(false)

    const handleLike = () => {
        if (toggleDislike) {
            dispatch({ type: LIKE, payload: movie })
            dispatch({ type: UNDISLIKE, payload: movie })
            setToggleLike(prevToggleLike => !prevToggleLike)
            setToggleDislike(prevToggleDislike => !prevToggleDislike)


        } else {
            dispatch({ type: LIKE, payload: movie })
            setToggleLike(prevToggleLike => !prevToggleLike)
        }
    }

    const handleDislike = () => {

        if (toggleLike) {
            dispatch({ type: DISLIKE, payload: movie })
            dispatch({ type: UNLIKE, payload: movie })
            setToggleDislike(prevToggleDislike => !prevToggleDislike)
            setToggleLike(prevToggleLike => !prevToggleLike)

        } else {
            dispatch({ type: DISLIKE, payload: movie })
            setToggleDislike(prevToggleDislike => !prevToggleDislike)
        }

    }
    const handleSupress = () => {
        dispatch({ type: DELETE, payload: movie })

    }

    useEffect(() => {
        console.log(toggleLike)
    }, [toggleLike])

    return (
        <Card className={classes.card} raised elevation={6}>
            <Typography variant="h3">{movie.title}</Typography>
            <Typography className={classes.title} gutterBottom variant="subtitle1" component="h2">{movie.category}</Typography>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={handleLike} disabled={toggleLike}>
                    <ThumbUpAltIcon fontSize="small" />&nbsp;{movie.likes}
                </Button>
                <Button size="small" color="primary" onClick={handleDislike} disabled={toggleDislike}>
                    <ThumbDownIcon fontSize="small" />&nbsp;{movie.dislikes}

                </Button>
                <Button size="small" color="secondary" onClick={handleSupress}>
                    <DeleteIcon fontSize="small" /> &nbsp;  
                </Button>
            </CardActions>
        </Card>

    )
}

export default Movie
