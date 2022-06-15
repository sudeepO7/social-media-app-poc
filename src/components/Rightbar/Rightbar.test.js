import React from 'react';
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Rightbar from './Rightbar';
import { User, Users } from "../../dummyData"
import axios from "axios";

jest.mock('axios');

describe('Rightbar component', () => {
    test('Check online friends', async () => {
        axios.get.mockResolvedValue({ data: {
            friends: [...Users]
        }});
        render(
            <BrowserRouter>
                <Rightbar user={User} />
            </BrowserRouter>
        );
        const following = await waitFor(() => screen.getByText(`${Users[1].username}`));
        expect(following).toBeDefined();
    })
    test('Check Follow and Unfollow button', async () => {
        axios.get.mockResolvedValue({ data: {
            friends: [...Users]
        }});
        axios.put.mockResolvedValue({ data: {
            success: true
        }});
        render(
            <BrowserRouter>
                <Rightbar user={User} />
            </BrowserRouter>
        );
        const followButton = screen.getByText(/Follow/);
        fireEvent.click(followButton);
        const unfollowButton = await waitFor(() => screen.getByText(/Follow/));
        expect(unfollowButton).toBeDefined();
    })
});