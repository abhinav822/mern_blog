
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from '@mui/joy/CircularProgress';

import BlogCard from "../components/BlogCard";
const UserBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    //get user blogs
    const getUserBlogs = async () => {
        try {
            const id = localStorage.getItem("userId");
            const { data } = await axios.get(`/api/v1/blog/user-blog/${id}`);
            if (data?.success) {
                setBlogs(data?.userBlog.blogs);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserBlogs()
    }, []);
    console.log(blogs);
    return (
        <div style={{
         
            


        }}>
            {loading ? (
                <CircularProgress color='primary' size='lg' position="center"/> //to dispaly loading spinner in center of page i have to use flexbox and justify content and align items so i ahve to write
            ) : (
                blogs && blogs.length > 0 ? (
                    blogs.map((blog,index) => (
                        <BlogCard key={index}
                            id={blog._id}
                            isUser={true}
                            title={blog.title}
                            description={blog.description}
                            image={blog.image}
                            username={ blog?.user?.username}//why username is not showing in blogcard so to show username i have to pass username as props in blogcard
                            time={blog.createdAt}
                        />
                    ))
                ) : (
                    <h1>You Havent Created a blog</h1>
                )
            )}
        </div>
    );
}

export default UserBlogs;



