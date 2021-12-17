import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import useStyles from './styles'

// import {movies$} from '../../../mock/movies'

const Movie = ({movie}) => {
    const classes = useStyles();
    // const {movieRed}=useSelector((state)=>state.movieRed)



    return (
        <Card className={classes.card} raised elevation={6}>
            <Typography variant="h3">{movie.title}</Typography>
            <Typography className={classes.title} gutterBottom variant="subtitle1" component="h2">{movie.category}</Typography>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={console.log("like")}>
                    {/* <Likes /> */}yes
                </Button>
                <Button size="small" color="secondary" onClick={() => console.log("delete")}>
                    <DeleteIcon fontSize="small" /> &nbsp; Delete
                </Button>
            </CardActions>
        </Card>

    )
}

export default Movie
