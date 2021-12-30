const axios = require("axios").default;


export const getRedditUrl = async (uuid) => {
  const url = `${getLinkURL}?uuid=${uuid}`;
  const response = await axios.get(url);
  return response.data;
};
export const getUserByIdAPI = async (id) => {
  const response = await axios.post(getUserAPIUrl, {
    type: "id",
    id,
  });
  return response.data;
};

export const textDownloadLink = async (id) => {
  const payload = {
    phoneNumber: id,
  };
  const response = await axios.post(
    textUserApiURL,
    JSON.stringify(payload)
  );
  return response.data;
};

export const addToWaitlistAPI = async (id, referredBy, type = "phone") => {
  let payload;
  if (type === "phone") {
    payload = {
      phoneNumber: id,
      referredBy,
      type,
    };
  } else {
    payload = {
      email: id,
      referredBy,
      type,
    };
  }

  const response = await axios.post(
    addToWaitlistApiURL,
    JSON.stringify(payload)
  );
  return response.data;
};

export const checkPhone = async (phoneNumber) => {
  const payload = {
    phoneNumber,
    type: "phone",
  };
  const response = await axios.post(getUserAPIUrl, JSON.stringify(payload));
  return response.data;
};

export const checkEmail = async (email) => {
  const payload = {
    email,
    type: "email",
  };
  const response = await axios.post(getUserAPIUrl, JSON.stringify(payload));
  return response.data;
};
