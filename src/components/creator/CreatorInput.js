import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, Typography, Stack, Divider, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { locations } from "../../constants";

export const CreatorInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  //   useEffect(() => {
  //     console.log("title", title);
  //     console.log("description", description);
  //     console.log("location", location);
  //   });

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleSubmit = (event) => {
    if (description === "" || title === "" || location === "") {
      console.log("error");
      return;
    }

    console.log("STORE in DB!", location, title, description);
    setDescription("");
    setTitle("");
    setLocation("");
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "inline-block", textAlign: "left" }}>
        <Card sx={{ width: 700 }}>
          <CardContent>
            <Stack direction="column" spacing={5}>
              <Box>
                <Typography variant="subtitle1" sx={{ marginBottom: "15px" }}>
                  Location
                </Typography>
                <TextField
                  sx={{ width: "40%" }}
                  id="outlined-select-location"
                  select
                  label="Select"
                  value={location}
                  onChange={handleLocationChange}
                  helperText="Please select your location"
                >
                  {locations.map((option, i) => (
                    <MenuItem key={i} value={option.id}>
                      {option.location}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Divider />

              <Box>
                <Typography variant="subtitle1">Project Title</Typography>
                <TextField
                  sx={{ width: "100%" }}
                  id="standard-basic"
                  label="Enter Title"
                  variant="standard"
                  onChange={handleTitleChange}
                  value={title}
                />
              </Box>
              <Divider />
              <Box>
                <Typography variant="subtitle1">Project Description</Typography>
                <TextField
                  sx={{ width: "100%" }}
                  id="standard-basic"
                  label="Enter Description"
                  variant="standard"
                  onChange={handleDescriptionChange}
                  value={description}
                />
              </Box>
              <Divider />
            </Stack>
          </CardContent>

          <CardActions>
            <Button
              size="medium"
              variant="contained"
              sx={{ margin: "10px" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};
