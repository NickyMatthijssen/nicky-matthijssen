const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    // client: "mysql",
    // connection: {
    //   host: process.env.DB_HOST,
    //   port: process.env.DB_PORT,
    //   database: process.env.DB_PORT,
    //   user: process.env.DB_USER,
    //   password: process.env.DB_PASSWORD,
    // },
    useNullAsDefault: true,
  },
});
