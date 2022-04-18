// import { AxiosError } from "axios";

export const getErrorMessage = (err) => {
  console.log({ err });
  const { response } = err;
  let errorText = "Something went wrong, please try again";
  if (response) {
    // const { data: { error }, } = response;
    if (response.error) {
      errorText = response.error;
    }
  }
  return errorText;
};
