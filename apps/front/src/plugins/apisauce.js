import { create } from 'apisauce';

export default (context, inject) => {
  const api = create({
    baseURL: process.env.API.BASE_URL,
  });

  inject('api', api);
};
