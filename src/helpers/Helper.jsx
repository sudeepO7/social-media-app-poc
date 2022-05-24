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