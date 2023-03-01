const axios = require('axios');

const { USERS_URL, DEMANDS_URL } = process.env;

const APIUsers = axios.create({
  baseURL: `http://${USERS_URL}/`,
});

const APIDemands = axios.create({
  baseURL: `http://${DEMANDS_URL}/`,
});

module.exports = {
  APIUsers,
  APIDemands,
};
