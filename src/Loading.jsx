import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => {
  return (
    <Puff
      height="80"
      width="80"
      radisu={1}
      color="#4fa94d"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loading;
