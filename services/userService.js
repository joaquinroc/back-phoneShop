let users = [{ name: "Pedro", age: 24, ella: "quien" }];

const userService = {
  createUser: async (user) => {
    user.id = users.length + 1;
    users.push(user);
    return user;
  },

  getAllUsers: async () => {
    return users;
  },

  getUrserById: async (id) => {
    return users.find((u) => u.id === id);
  },

  updateUser: async (id, updatedData) => {
    const user = users.find((u) => u.id === id);
    if (user) {
      Object.assign(user, updatedData);
      return user;
    }
    return null;
  },

  deleteUser: async (id) => {
    const initialLength = users.length;
    users = users.filter((u) => u.id !== id);
    return users.length < initialLength;
  },
};

module.exports = userService;
