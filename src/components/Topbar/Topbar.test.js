import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import Topbar from './Topbar';

describe('Topbar component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Topbar />
            </BrowserRouter>
        );
    })
    test('Check Homepage link is visible', () => {
        const homepageLink = screen.getByText(`Homepage`);
        expect(homepageLink).toHaveTextContent(`Homepage`)
    })
    test('Check Timeline link is visible', () => {
        const timelineLink = screen.getByText(`Timeline`);
        expect(timelineLink).toHaveTextContent(`Timeline`)
    })
});