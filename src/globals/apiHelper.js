import axios from 'axios';

const create = () => {
  // This creates an instance of axios with default configuration so that we don't need to set some headers etc. every time that axios is used.
  const instance = axios.create({
    headers: {
      'X-HD-Access-Token': localStorage.getItem('apiToken'),
    },
  });

  return instance;
};

export default create;