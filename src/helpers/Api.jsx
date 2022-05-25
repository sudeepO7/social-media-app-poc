export const getTimeline = userId => `/posts/timeline/${userId}`;
export const getProfile = username => `/posts/profile/${username}`;
export const getUser = userId => `/users/${userId}`;
export const userLogin = () => `/auth/login`;