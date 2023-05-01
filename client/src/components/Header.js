import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
const Header = () => {
    // global state
    let isLogin = useSelector((state) => state.isLogin); //here we are using the useSelector hook to get the state of the slice from the global state
    
    isLogin = isLogin || localStorage.getItem("userId");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //state
    const [value, setValue] = useState();

    //logout
    const handleLogout = () => {
        try {
            dispatch(authActions.logout());
            toast.success("Logout Successfully");
            navigate("/login");
            localStorage.clear();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    background:
                        "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
                }}
            >
                <Toolbar>
                    <Typography variant="h4">My Blog APP</Typography>
                    {isLogin && (
                        <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
                            <Tabs textColor="inherit" value={value}
                                onChange={(e, val) => setValue(val)}
                            >
                                <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
                                <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
                                <Tab label="Create Blog" LinkComponent={Link} to="/create-blog"/>
                            </Tabs>
                        </Box>
                    )}
                    <Box display={"flex"} marginLeft="auto">
                        {!isLogin && (
                            <>
                                <Button variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="warning"   LinkComponent={Link}
                                    to="/login"
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{ margin: 1, borderRadius: 9 }} color="warning"
                                    LinkComponent={Link}
                                    to="/register"
                                >
                                    Register
                                </Button>
                            </>
                        )}
                        {isLogin && (
                            <Button onClick={handleLogout} sx={{ margin: 1,borderRadius:10 }} variant="contained" color="warning">
                                Logout
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
//to show name of the user in the header we have to use the useSelector hook to get the state of the slice from the global state and then we can use it in the header so code for that is:

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { authActions } from "../redux/store";
// import toast from "react-hot-toast";
// const Header = () => {
//     // global state
//     let isLogin = useSelector((state) => state.isLogin); //here we are using the useSelector hook to get the state of the slice from the global state
//
//     isLogin = isLogin || localStorage.getItem("userId");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     //state
//     const [value, setValue] = useState();
//
//     //logout
//     const handleLogout = () => {
//         try {
//             dispatch(authActions.logout());
//             toast.success("Logout Successfully");
//             navigate("/login");
//             localStorage.clear();
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     return (
//         <>
//             <AppBar
//                 position="sticky"
//                 sx={{
//                     background:
//                         "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
//                 }}
//             >
//                 <Toolbar>
//                     <Typography variant="h4">My Blog APP</Typography>
//                     {isLogin && (
//                         <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
//                             <Tabs textColor="inherit" value={value}
//                                 onChange={(e, val) => setValue(val)}
//                             >
//                                 <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
//                                 <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
//                                 <Tab label="Create Blog" LinkComponent={Link} to="/create-blog"/>
//                             </Tabs>
//                         </Box>
//                     )}
//                     <Box display={"flex"} marginLeft="auto">
//                         {!isLogin && (
//                             <>
//                                 <Button variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="warning"   LinkComponent={Link}
//                                     to="/login"
//                                 >
//                                     Login
//                                 </Button>
//                                 <Button
//                                     variant="contained"
//                                     sx={{ margin: 1, borderRadius: 9 }} color="warning"
//                                     LinkComponent={Link}
//                                     to="/register"
//                                 >
//                                     Register
//                                 </Button>

//                             </>
//                         )}
//                         {isLogin && (
//                             <Button onClick={handleLogout} sx={{ margin: 1,borderRadius:10 }} variant="contained" color="warning">
//                                 Logout
//                             </Button>
//                         )}
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//         </>
//     );
// };





