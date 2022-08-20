import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { CreatorNav } from "./creator/CreatorNav";
import "./review.css"
const axios = require('axios');
// import { useForm } from "react-hook-form";
// import saveData from "./some_other_file"; // uhhhh idk whatever function that gets the massive comment

let rating = 0;
const labels = {
    0.5: 'Useless',
    1: 'Useless',
    1.5: 'Poor',
    2: 'Poor',
    2.5: 'Average',
    3: 'Average',
    3.5: 'Good',
    4: 'Good',
    4.5: 'Excellent',
    5: 'Excellent',
};

function getLabelText(value) {
    rating = value;
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function handleData() {
    let name = document.querySelector(".nameInput").value;
    let comment = document.querySelector(".reviewInput").value;
    axios.post('http://localhost:4000/rating/6300fa84a0664a69c52f660d', {
        rating: rating,
        comment: comment
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios({
    //     method: 'post',
    //     url: 'localhost:4000/rating/6300fa84a0664a69c52f660d',
    //     data: {
    //       rating: rating,
    //       comment: comment
    //     }
    //   });
}

export const HoverRating = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    //   const { register, handleSubmit } = useForm();

    return (
        <>
              <CreatorNav />
            <div className="reviewBigContainer">
                <img className="reviewImage" src="https://i.ytimg.com/vi/uuSP4bBhCAw/maxresdefault.jpg"></img>
                <Box className="reviewContainer"
                    sx={{
                        width: 300,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >

                    <form>
                        <h1 className="reviewHeading">Leave a review on this product!</h1>
                        <label>Name</label>
                        <br></br>
                        <input className="nameInput" name="name" />
                        <br></br>
                        <br></br>
                        <label>Review</label>
                        <br></br>
                        <textarea className="reviewInput" name="review" ></textarea>
                        <br></br>
                        <br></br>

                        <Rating
                            className="starsInput"
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />

                        {value !== null && (
                            <Box className="starLabel" sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}

                        <Button className="submitButton" type="button" variant="contained" onClick={handleData}>Submit Review!</Button>

                    </form>


                    <Button href="/fair-goer" size="small">i dont want to review anymore</Button>
                </Box>
            </div>
        </>
    );
}
