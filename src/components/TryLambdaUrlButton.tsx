import React from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import logger from "../logger";

export default function TryLambdaUrlButton() {
  const tryLambdaUrl = async () => {
    const url =
      "https://m4pmbtqjq6dzoothvxej2rpmae0uazws.lambda-url.ap-northeast-1.on.aws/";
    try {
      const response = await axios
        .get(url, {
          statuscode: "200"
        })
        .then((res: AxiosResponse<any>) => res.data);
      /*
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          "statuscode": "200"
        }),
      });
      */
      console.log("success", response);
      logger.info("TryLambdaUrlButton:response", JSON.stringify(response));
    } catch (error) {
      console.log("error", error);
      logger.info("TryLambdaUrlButton:catch", JSON.stringify(error));
    }
  };

  const onclick = () => {
    logger.info("TryLambdaUrlButton", "onClick");
    tryLambdaUrl();
  };

  return (
    <>
      <button onClick={onclick}>Lambda関数Urlテスト</button>
    </>
  );
}
