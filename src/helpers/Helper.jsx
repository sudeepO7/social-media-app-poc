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

// Get profile picture url
export const dpUrl = profilePicture => profilePicture ? mUrl(profilePicture) : mUrl('person/noAvatar.png');

// Store in local storage
export const setStorage = (key, value) => {
    if (value && typeof value === 'object')
        sessionStorage.setItem(key, JSON.stringify(value));
};

// Get from local storage
export const getStorage = (key) => {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

// Remove from local storage
export const removeStorage = (key) => {
    sessionStorage.removeItem(key);
};

// Contant keys
export const KEYS = {
    CURRENT_USER: 'currentUser'
}