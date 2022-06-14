import React from 'react';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Feed from './Feed';
import { Posts } from "../../dummyData"

describe('Feed component', () => {
    test('Check post count', () => {
        const { container } = render(
            <BrowserRouter>
                <Feed posts={Posts} />
            </BrowserRouter>
        );
        const postComponents = container.getElementsByClassName(`post`);
        expect(postComponents.length).toBe(Posts.length);
    })
    test('Check share component exist', () => {
        const { container } = render(
            <BrowserRouter>
                <Feed posts={Posts} />
            </BrowserRouter>
        );
        const shareComponents = container.getElementsByClassName(`share`);
        expect(shareComponents.length).toBe(1);
    })
});