import React from "react";

import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <div className="loading-div mt-5 pt-5">
        <Oval
          height={150}
          width={150}
          color="#61dafb"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        <p className="loading-p">Loading...</p>
        <div className="loading-rep">
          <a
            href="https://github.com/Tsepi/react-weather-project"
            className="repository"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>
          <br />
          By Tsepi Daemane
        </div>
      </div>
    </div>
  );
}
