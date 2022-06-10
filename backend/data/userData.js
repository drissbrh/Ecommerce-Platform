import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("998877", 10),
    isAdmin: true,
  },
  {
    name: "Jasmine Curry",
    email: "jasmine@gmail.com",
    password: bcrypt.hashSync("998877", 10),
    isAdmin: false,
  },
  {
    name: "Klay Thompson",
    email: "klay@gmail.com",
    password: bcrypt.hashSync("998877", 10),
    isAdmin: false,
  },
];

export default users;
