import React from "react";

function Map() {
  return (
    <div className="mb-[500px] items-center flex justify-center">
      <div className="relative w-full max-w-[600px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1728328330346!6m8!1m7!1sMV2zdXAE2XR_-DnXz4rNwQ!2m2!1d7.905793833786434!2d81.55853659348827!3f93.4087!4f-9.301419999999993!5f1.354873173660512"
          className="absolute top-0 left-0 w-full h-[400px]"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
