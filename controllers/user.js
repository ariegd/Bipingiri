module.exports = {
    createUser: async (req, res) => {
        try {
            const { name, address, country } = req.body;
            const [{ insertId }] = await connection.promise().query(
              `INSERT INTO users (name, address, country) 
                  VALUES (?, ?,?)`,
              [name, address, country]
            );
            res.status(202).json({
              message: "User Created",
            });
          } catch (err) {
            res.status(500).json({
              message: err,
            });
          }
      },
  
    readUser: async (req, res) => {
        try {
            const {id} = req.params
            const data = await connection.promise().query(
              `SELECT *  from users where id = ?`,[id]
            );
            res.status(200).json({
              user: data[0][0],
            });
          } catch (err) {
            res.status(500).json({
              message: err,
            });
          }
      },

    readAllUser: async (req, res) => {
        try {
            const data = await connection.promise().query(
              `SELECT *  from users;`
            );
            res.status(202).json({
              users: data[0],
            });
          } catch (err) {
            res.status(500).json({
              message: err,
            });
          }
      },
  
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, address, country } = req.body;
            const update = await connection
              .promise()
              .query(
                `UPDATE users set name = ?, address = ?, country = ? where id = ?`,
                [ name, address, country,id]
              );
            res.status(200).json({
              message: "updated",
            });
          } catch (err) {
            res.status(500).json({
              message: err,
            });
          }
      },
  
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const update = await connection
              .promise()
              .query(
                `DELETE FROM  users where id = ?`,
                [id]
              );
            res.status(200).json({
              message: "deleted",
            });
          } catch (err) {
            res.status(500).json({
              message: err,
            });
          }
      }
  }