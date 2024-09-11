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
      },

    readAllUser: async (req, res) => {
      },
  
    updateUser: async (req, res) => {
      },
  
    deleteUser: async (req, res) => {
      }
  }