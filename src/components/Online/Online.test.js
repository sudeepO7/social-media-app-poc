import React from 'react';
import { render } from "@testing-library/react";
import Online from './Online';
import { User } from "../../dummyData"

describe('Online component', () => {
    test("Check user's username is visible", () => {
        const { container } = render(<Online user={User} />);
        const usernameContainer = container.getElementsByClassName(`rightbarUsername`);
        expect(usernameContainer[0]).toHaveTextContent(`${User.username}`)
    })
});