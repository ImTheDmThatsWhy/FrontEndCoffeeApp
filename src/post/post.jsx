import React, { useState, useEffect } from "react";
import { FaCommentSlash } from "react-icons/fa";
const newPost = async () => {
    const [newPost, setNewPost] = useState({
        title: "",
        content: "",
        displayname: "",
        comments: "",
    });

    const createPost = async () => {
        try {
            await api.post("/post/post", newPost);
            setNewUser({
                title: "",
                content: "",
                displayname: "",
                comments: "",
            });
        } catch (error) {
            if (error.response?.data)
                console.error("Error creating post:", error.response?.data);
            console.error("Error creating post:", error);
        }
    };
};
return <main></main>;
