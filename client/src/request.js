import axios from "axios"; // import axios

// Vue.prototype.$axios = axios;

const instance = axios.create({
  baseURL: "localhost:3004/",
});

// instance.login = data => request('login', data);

const request = (data) => {
  //   console.log(instance["post"]("/login", data));
  // return axios({
  //         data
  //     })
  //     .then(result => result.data)
  //     .catch(result => {
  //         console.log(result);
  //         //result.status
  //         const { status } = result.response;
  //         if (status === UNAUTHORIZED) return onUnauthorized();
  //         return Error(result);
  //     });
};

module.exports = request;
