import axios from 'axios';

const Api = (() => {
  const newUser = (name, email, phone, subscribe) =>
    new Promise((resolve) => {
      axios
        .post('http://localhost:3000/users', {
          newUser: {
            name,
            email,
            phone,
            subscribe,
          },
        })
        .then((response) => {
          resolve(response);
        });
    });

  return {
    newUser,
  };
})();

export default Api;
