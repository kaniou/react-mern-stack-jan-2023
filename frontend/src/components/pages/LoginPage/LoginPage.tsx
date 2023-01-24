import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
// import Payment from "../../fragments/Payment/Payment";
import Payment from "@/components/fragments/Payment";
import React from "react";
import loginBg from "@/assets/images/bg4.jpg";

const classes: any = {
  root: { display: "flex", justifyContent: "center", alignItems: "center" },
  submitBtn: { marginTop: 4 },
  canelBtn: { marginTop: 2 },
};

type Props = {};

export default function LoginPage({}: Props) {
  const showForm = () => {
    return (
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Username"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          autoComplete="email"
          autoFocus
        />
      </form>
    );
  };

  return (
    <Box sx={classes.root}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Login
          </Typography>

          {showForm()}
        </CardContent>
      </Card>
      <style>
        {`
          body {
            min-height: 100vh;
            position: relative;
            margin: 0;
            background-size: cover;
            background-image: url(${loginBg});
            text-align: center;
          }
        `}
      </style>
    </Box>
  );
}
