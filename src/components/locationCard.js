import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const LocationCard = (props) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="Staples Studio"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="/reviews" size="small">Leave a Review</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
