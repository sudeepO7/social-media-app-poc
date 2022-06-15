import React from 'react';
import { format } from "timeago.js"
import { render, fireEvent, waitFor } from "@testing-library/react";
import { likedUsers } from "../../helpers/Helper";
import { BrowserRouter } from 'react-router-dom';
import Post from './Post';
import { Posts } from "../../dummyData"
import axios from "axios";

jest.mock('axios');

describe('Post component', () => {
    test("Check user's fullname on top of post", () => {
        const { container } = render(
            <BrowserRouter>
                <Post post={Posts[0]} />
            </BrowserRouter>
        );
        const usernameContainer = container.getElementsByClassName(`postUsername`);
        expect(usernameContainer[0]).toHaveTextContent(`${Posts[0].firstName} ${Posts[0].lastName}`);
    })
    test("Check post uploaded date", () => {
        const { getByText } = render(
            <BrowserRouter>
                <Post post={Posts[0]} />
            </BrowserRouter>
        );
        const uploadedDateText = getByText(`${format(Posts[0].createdAt)}`);
        expect(uploadedDateText).toBeDefined();
    })
    test("Check post description", () => {
        const { container } = render(
            <BrowserRouter>
                <Post post={Posts[0]} />
            </BrowserRouter>
        );
        const postDescContainer = container.getElementsByClassName(`postText`);
        expect(postDescContainer[0]).toHaveTextContent(`${Posts[0].desc}`);
    })
    test("Check post liked text", () => {
        const { getByText } = render(
            <BrowserRouter>
                <Post post={Posts[0]} />
            </BrowserRouter>
        );
        const likeCountText = getByText(`${likedUsers(Posts[0].likes.length, false)}`);
        expect(likeCountText).toBeDefined();
    })
    test("Check post comment count", () => {
        const { getByText } = render(
            <BrowserRouter>
                <Post post={Posts[0]} />
            </BrowserRouter>
        );
        const commentCountText = getByText(`${Posts[0].comment} comments`);
        expect(commentCountText).toBeDefined();
    })
    test("Like post and check post liked text", async () => {
        axios.put.mockResolvedValue({ data: {
            success: true
        } });
        const { container } = render(
            <BrowserRouter>
                <Post post={Posts[0]} />
            </BrowserRouter>
        );
        const likeButton = container.getElementsByClassName(`likeIcon`);
        fireEvent.click(likeButton[0]);
        const likeCountText = waitFor(() => getByText(`${likedUsers(Posts[0].likes.length, true)}`));
        expect(likeCountText).toBeDefined();
    })
});