"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        profession: "Admin LMS",
        role: "admin",
        email: "krenauproject@gmail.com",
        password: await bcrypt.hash("12345678", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "John Smith",
        profession: "Frontend Developer",
        role: "student",
        email: "smith@gmail.com",
        password: await bcrypt.hash("12345678", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
