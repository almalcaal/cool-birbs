// _id will be added via mongodb

const posts = [
  {
    _id: 1,
    title: "Look at this cool bird!",
    image: "/images/image.jpg",
    body: "Herpa derpa it's a birda :)",
    author: 1,
    createdAt: "February 25, 2025",
    updatedAt: "February 25, 2025",
    votes: {
      upvotes: 10,
      downvotes: 2,
    },
    commentsCount: 92,
  },
  {
    _id: 2,
    title: "This bird is neato",
    image: "/images/image.jpg",
    body: "Wow birds are awesome! :)",
    author: 2,
    createdAt: "February 25, 2025",
    updatedAt: "February 25, 2025",
    votes: {
      upvotes: 10,
      downvotes: 2,
    },
    commentsCount: 92,
  },
  {
    _id: 3,
    title: "Bird is eating some food...",
    image: "/images/image.jpg",
    body: "I fought this bird like a winner! :)",
    author: 3,
    createdAt: "February 25, 2025",
    updatedAt: "February 25, 2025",
    votes: {
      upvotes: 10,
      downvotes: 2,
    },
    commentsCount: 92,
  },
];

export default posts;
