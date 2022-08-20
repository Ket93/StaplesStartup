// import React from 'react';
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
// import Button from '@mui/material/Button';
// // import { useForm } from "react-hook-form";
// import saveData from "./some_other_file"; // uhhhh idk whatever function that gets the massive comment

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless',
//   1.5: 'Poor',
//   2: 'Poor',
//   2.5: 'Ok',
//   3: 'Ok',
//   3.5: 'Good',
//   4: 'Good',
//   4.5: 'Excellent',
//   5: 'Excellent',
// };

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }

// export const HoverRating = () => {
//   const [value, setValue] = React.useState(2);
//   const [hover, setHover] = React.useState(-1);
// //   const { register, handleSubmit } = useForm();

//   return (
//     <Box
//       sx={{
//         width: 200,
//         display: 'flex',
//         alignItems: 'center',
//       }}
//     >
//       <Rating
//         name="hover-feedback"
//         value={value}
//         precision={0.5}
//         getLabelText={getLabelText}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//       />
	  
//       {value !== null && (
//         <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//       )}
// 	  <form onSubmit={handleSubmit(data => saveData(data))}>
// 		<h1>Leave a review on this product!</h1>
// 		<label>Name</label>
// 		<input name="name" ref={register} />
// 		<label>Review</label>
// 		<input name="review" ref={register} />
// 		<input type="submit" />
//    	  </form>
// 	  <Button href="/fair-goer" size="small">i dont want to review anymore</Button>
//     </Box>
//   );
// }
