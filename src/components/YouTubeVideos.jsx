import React, { useEffect, useState } from "react";
import "../commonresource/css/bootstrap.css";
import "./YouTube.css";
export default function YouTubeVideos() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyA2CtF30r_MhFNmSGg5Lj93m6z0AeniCSA"
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items))
      .catch(() => console.log("Error: unable to fetch"));
  }, []);
  //console.log(videos);
  return (
    <>
      <section>
        <h1 className="text-center font-weight-bold m-3">Latest Videos</h1>
        <div className="container">
          <div className="row">
            {videos?.map((singleVideo, i) => {
              let videoId = singleVideo.id.videoId;
              let videoLink = `https://www.youtube.com/watch?v=${videoId}`;
              return (
                <div className="col-12 col-md-6 col-lg-4 p-4" key={i}>
                  <a href={videoLink}>
                    <img
                      src={singleVideo.snippet.thumbnails.high.url}
                      alt="thumbnails"
                      className="img-fluid"
                    />
                  </a>
                  <a href={videoLink} className="video-title text-center">
                    <h5 className="font-weight-bold">
                      {singleVideo.snippet.title}
                    </h5>
                  </a>
                  <div className="video-description text-center">
                    {singleVideo.snippet.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
