// export const url = "http://localhost:8800/api";
export const url = "https://pink-wild-millipede.cyclic.app/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
