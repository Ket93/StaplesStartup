import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const LocationCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://picture.liquidspace.com/Index?emptyImageUrl=https%3A%2F%2Fcontent.liquidspace.com%2FImages%2Fliquid-holder.jpg%3Fv%3Dff1a777e91&etag=skeRkZqEYMW7ldtNRq%2FX0Q%3D%3D&crop=true&aux=d8L%2B8WuhuKzJfix4sZab%2BrUH3mn%2F6scoeHwNdfZr106dzLv6gned%2B0pzxeKee2bFR1bbFe%2FWEyb8%2BhSYTbCo%2Fw%3D%3D"
        alt="Staples Studio"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="/reviews" size="small">Leave a Review</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
