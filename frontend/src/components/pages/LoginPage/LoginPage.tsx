import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
// import Payment from "../../fragments/Payment/Payment";
import Payment from "@/components/fragments/Payment";
import React from "react";
import loginBg from "@/assets/images/bg4.jpg";
import { User } from "@/types/user.type";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Icons from "@mui/icons-material/";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/store";
import { add, counterSelector, remove } from "@/store/slices/counterSlice";

const classes: any = {
  root: { display: "flex", justifyContent: "center", alignItems: "center" },
  submitBtn: { marginTop: 4 },
  canelBtn: { marginTop: 2 },
};

const formValidateSchema = Yup.object().shape({
  // username: Yup.string().email("Invalid email address").required("Email is required").trim(),
  username: Yup.string()
    .min(4)
    .required("Username must be more than 3 letters")
    .trim(),
  password: Yup.string().required("Password is required").trim(),
});

type Props = {};

export default function LoginPage({}: Props) {
  const initialValue: User = { username: "admin", password: "1234" };
  const navigate = useNavigate();
  const counterReducer = useSelector(counterSelector);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValue,
    resolver: yupResolver(formValidateSchema),
  });

  const onSubmit = async (values: User) => {
    alert(JSON.stringify(values));
  };

  const showForm = () => {
    return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              error={Boolean(errors.username?.message)}
              helperText={errors.username?.message}
              {...field}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Email />
                  </InputAdornment>
                ),
              }}
              autoComplete="email"
              autoFocus
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              helperText={errors.password?.message}
              error={Boolean(errors.password?.message)}
              {...field}
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Password />
                  </InputAdornment>
                ),
              }}
              label="Password"
              type="password"
            />
          )}
        />

        <Button
          sx={classes.submitBtn}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Login
        </Button>

        <Button
          sx={{ marginTop: 2 }}
          onClick={() => navigate("/register")}
          type="button"
          fullWidth
          variant="outlined"
          className="border-dashed border-1 border-gray-300"
          color="primary"
        >
          Register
        </Button>

        <Box className="flex flex-row mt-[20px]">
          <Button
            onClick={() => dispatch(remove())}
            type="button"
            fullWidth
            variant="outlined"
            className="border-dashed border-1 border-gray-300"
            color="primary"
          >
            <Icons.Delete />
          </Button>

          <Button
            onClick={() => dispatch(add())}
            type="button"
            fullWidth
            variant="outlined"
            className="border-dashed border-1 border-gray-300"
            color="primary"
          >
            <Icons.Add />
          </Button>
        </Box>
      </form>
    );
  };

  return (
    <Box sx={classes.root}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Login ({counterReducer.count})
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
