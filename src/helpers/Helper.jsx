// Add public url before any media url
export const mUrl = path => `${process.env.REACT_APP_PUBLIC_FOLDER}${path}`;

// Get relationship status corresponding to the code
export const getRelationshipStatus = code => {
    switch (code) {
        case 1:
            return 'Single';
        case 2:
            return 'In relationship'
        case 3:
            return 'Complicated'
        default:
            return 'Single';
    }
};

// Default error message
export const defaultError = `Something went wrong. Please try again later.`;

// Get liked users text
export const likedUsers = (count, isLiked) => {
    if (count === 0)
        return ``
    else if (isLiked && count > 1)
        return `You and ${count-1} other like this`
    else if (isLiked && count === 1)
        return `You like this`
    else
        return `${count} people like this`
};