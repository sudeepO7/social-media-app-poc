export const getUser = userId => `/users/${userId}`;
export const userLogin = () => `/auth/login`;
export const userRegister = () => `/auth/register`;
export const getTimeline = userId => `/posts/timeline/${userId}`;
export const getProfile = username => `/posts/profile/${username}`;
export const createPost = () => `/posts`;
export const likePost = postId => `/posts/${postId}/like`;