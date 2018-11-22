module.exports = {
  local: {
    endpoints: {
      login: {
        url: '/api/auth/login',
        method: 'post',
        propertyName: 'token',
      },
      logout: {
        url: '/api/auth/logout',
        method: 'post',
      },
      user: {
        url: '/api/auth/user',
        method: 'get',
        propertyName: 'user',
      },
    },
  },
};
