export const User = {
  "_id": "624c2c9287d8ad52f56938c8",
  "username": "sudeep07",
  "firstName": "Sudeep",
  "lastName": "Mukherjee",
  "email": "sudeep71195@gmail.com",
  "password": "$2b$10$pCY0h2cXHMCVPGIOBPo7uOBQHEv1UGnV8LZzTxR2hdV9DIMJysmYG",
  "profilePicture": "person/sudeep.jpg",
  "coverPicture": "post/3.jpeg",
  "followers": [
      "624c3fd16593b0cedb993725",
      "624d78456e9ebedce788111b"
  ],
  "following": [],
  "isAdmin": false,
  "createdAt": {
      "$date": {
          "$numberLong": "1649159314161"
      }
  },
  "updatedAt": {
      "$date": {
          "$numberLong": "1649250353365"
      }
  },
  "__v": {
      "$numberInt": "0"
  },
  "bio": "Love to travel. Food lover. Coding enthusiast.",
  "city": "Lucknow",
  "state": "Uttar Pradesh"
};

export const Users = [
  {
    _id:1,
    profilePicture: "person/1.jpeg",
    username: "Safak Kocaoglu",
    firstName: "Safak",
    lastName: "Kocaoglu"
  },
  {
    _id:2,
    profilePicture: "person/2.jpeg",
    username: "Janell Shrum",
    firstName: "Janell",
    lastName: "Shrum"
  },
  {
    _id:3,
    profilePicture: "person/3.jpeg",
    username: "Alex Durden",
    firstName: "Alex",
    lastName: "Durden"
  },
  {
    _id:4,
    profilePicture: "person/4.jpeg",
    username: "Dora Hawks",
    firstName: "Dora",
    lastName: "Hawks"
  },
  {
    _id:5,
    profilePicture: "person/5.jpeg",
    username: "Thomas Holden",
    firstName: "Thomas",
    lastName: "Holden"
  },
  {
    _id:6,
    profilePicture: "person/6.jpeg",
    username: "Shirley Beauchamp",
    firstName: "Shirley",
    lastName: "Beauchamp"
  },
  {
    _id:7,
    profilePicture: "person/7.jpeg",
    username: "Travis Bennett",
    firstName: "Travis",
    lastName: "Bennett"
  },
  {
    _id:8,
    profilePicture: "person/8.jpeg",
    username: "Kristen Thomas",
    firstName: "Kristen",
    lastName: "Thomas"
  },
  {
    _id:9,
    profilePicture: "person/9.jpeg",
    username: "Gary Duty",
    firstName: "Gary",
    lastName: "Duty"
  },
  {
    _id:10,
    profilePicture: "person/10.jpeg",
    username: "Safak Kocaoglu",
    firstName: "Safak",
    lastName: "Kocaoglu"
  },
];

export const Posts = [
  {
    _id: 1,
    desc: "Love For All, Hatred For None.",
    img: "post/1.jpeg",
    date: "5 mins ago",
    userId: 1,
    likes: [32, 33, 35],
    comment: 9,
    username: "sudeep07",
    profilePicture: "post/1.jpeg",
    firstName: "Sudeep",
    lastName: "Mukherjee"
  },
  {
    _id: 2,
    img: "post/2.jpeg",
    date: "15 mins ago",
    userId: 2,
    likes: [32, 33, 35, 88],
    comment: 1,
    username: "sudeep07",
    profilePicture: "post/1.jpeg",
    firstName: "Sudeep",
    lastName: "Mukherjee"
  },
  {
    _id: 3,
    desc: "Every moment is a fresh beginning.",
    img: "post/3.jpeg",
    date: "1 hour ago",
    userId: 3,
    likes: [32, 33, 35, 55, 76],
    comment: 2,
    username: "sudeep07",
    profilePicture: "post/1.jpeg",
    firstName: "Sudeep",
    lastName: "Mukherjee"
  },
  {
    _id: 4,
    img: "post/4.jpeg",
    date: "4 hours ago",
    userId: 4,
    likes: [33, 35],
    comment: 3,
    username: "sudeep07",
    profilePicture: "post/1.jpeg",
    firstName: "Sudeep",
    lastName: "Mukherjee"
  },
  {
    _id: 5,
    img: "post/5.jpeg",
    date: "5 hours ago",
    userId: 5,
    likes: [32, 33, 35],
    comment: 5,
    username: "sudeep07",
    profilePicture: "post/1.jpeg",
    firstName: "Sudeep",
    lastName: "Mukherjee"
  },
  {
    _id: 6,
    img: "post/6.jpeg",
    date: "1 day ago",
    userId: 6,
    likes: [32, 21, 35, 82],
    comment: 6,
    username: "sudeep07",
    profilePicture: "post/1.jpeg",
    firstName: "Sudeep",
    lastName: "Mukherjee"
  },
  {
    _id: 7,
    desc: "Never regret anything that made you smile.",
    img: "post/7.jpeg",
    date: "2 days ago",
    userId: 7,
    likes: [32, 41, 90, 7],
    comment: 3,
    username: "sudeep07",
    profilePicture: "post/1.jpeg",
    firstName: "Sudeep",
    lastName: "Mukherjee"
  },
  {
    _id: 8,
    img: "post/8.jpeg",
    date: "3 days ago",
    userId: 8,
    likes: [],
    comment: 1,
    username: "sudeep07",
    profilePicture: "post/1.jpeg",
    firstName: "Sudeep",
    lastName: "Mukherjee"
  },
  {
    _id: 9,
    desc: "Change the world by being yourself.",
    img: "post/9.jpeg",
    date: "5 days ago",
    userId: 9,
    likes: [32, 33, 35],
    comment: 2,
    username: "sudeep07",
    profilePicture: "post/1.jpeg",
    firstName: "Sudeep",
    lastName: "Mukherjee"
  },
  {
    _id: 10,
    img: "post/10.jpeg",
    date: "1 week ago",
    userId: 10,
    likes: [32, 33, 35, 5, 12, 45],
    comment: 12,
    username: "sudeep07",
    profilePicture: "post/1.jpeg",
    firstName: "Sudeep",
    lastName: "Mukherjee"
  },
];
