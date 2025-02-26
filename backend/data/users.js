import bcrypt from "bcryptjs";

const users = [
  {
    username: "adminZ",
    email: "admin@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    username: "muppetJohn123",
    email: "john@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    username: "bambiMommy",
    email: "jane@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
