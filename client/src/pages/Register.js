import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    // handle input change
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }));
    };
    //if email already exists then we should show toast message so code for that is below


    //form handle
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/user/register", {  //{data} is destructured from the response of the api
                username: inputs.name,
                email: inputs.email,
                password: inputs.password,
            });
            if (data.success) {
                toast.success("User Registered Successfully");
                navigate("/login");
            }
            else {
                toast.error(data.message);

            }
        } catch (error) {
            console.log(error);
            toast.error('email already exists')
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box  //Box is a container component which is used to wrap the content and it is used to apply styles to the content
                    maxWidth={450}
                    display="flex"
                    flexDirection={"column"}
                    alignItems="center"
                    margin="auto"
                    marginTop={6}
                    boxShadow="10px 10px 20px 20px #ccc"
                    padding={3}  //padding means the space between the content and the border 
                    borderRadius={6}
                >
                    <Typography
                        variant="h4"
                        sx={{ textTransform: "uppercase" }}
                        padding={3}
                        textAlign="center"
                    >
                        Register
                    </Typography>
                    <TextField
                        placeholder="name"
                        value={inputs.name}
                        onChange={handleChange}  //this handleChange function is used to handle the change in the input field
                        name="name"
                        margin="normal"
                        type={"text"}
                        required
                    />
                    <TextField
                        placeholder="email"
                        value={inputs.email}
                        name="email"
                        margin="normal"
                        type={"email"}
                        required
                        onChange={handleChange}
                    />
                    <TextField
                        placeholder="password"
                        value={inputs.password}
                        name="password"
                        margin="normal"
                        type={"password"}
                        required
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        sx={{ borderRadius: 3, marginTop: 3 }}
                        variant="contained"
                        color="secondary"
                    >
                        Submit
                    </Button>
                    <Button onClick={() => navigate("/login")}
                        sx={{ borderRadius: 3, marginTop: 3 }}
                    >
                        Already Registerd ? Please Login
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default Register;


