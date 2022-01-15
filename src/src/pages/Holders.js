import React from 'react';
// import videojs from "video.js";
// import "videojs-contrib-hls";
// import "videojs-contrib-quality-levels";
// import "videojs-hls-quality-selector";
// import "video.js/dist/video-js.min.css";

const Holders = () => {
    return (
        <div>
          
  <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
    <source src="https://cdn.livepeer.com/hls/4801nmx0s5njy2k0/index.m3u8" type="video/mp4" />
    <source src="https://cdn.livepeer.com/hls/4801nmx0s5njy2k0/index.m3u8" type="video/webm" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://cdn.livepeer.com/hls/4801nmx0s5njy2k0/index.m3u8" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>

  <script src="https://vjs.zencdn.net/7.17.0/video.min.js"></script>

            
        </div>
    )
}

export default Holders;

