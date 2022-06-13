export const getUser = userId => `/users/${userId}`;
export const userLogin = () => `/auth/login`;
export const userRegister = () => `/auth/register`;
export const getTimeline = userId => `/posts/timeline/${userId}`;
export const getFriends = userId => `/users/friends/${userId}`;
export const getProfile = username => `/posts/profile/${username}`;
export const createPost = () => `/posts`;
export const likePost = postId => `/posts/${postId}/like`;
export const uploadFile = () => `/upload`;
export const followUser = userId => `/users/${userId}/follow`;
export const unfollowUser = userId => `/users/${userId}/unfollow`;