import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import video from "../../assets/media/video.mp4";

import img_cloud1 from "../../assets/images/cloud1.png";
import img_cloud2 from "../../assets/images/cloud2.png";
import img_cloud3 from "../../assets/images/cloud3.png";

const VideoBG = () => {
  gsap.registerPlugin(ScrollTrigger);
  const videoBGRef = useRef(null);
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const cloud3Ref = useRef(null);

  // 存储timeline
  const animateT1 = useRef<gsap.core.Timeline>();

  // 云的移动
  const cloudMove = useCallback(() => {
    animateT1.current?.to(cloud2Ref.current, { y: -300 });
  }, []);

  // 创建timeline scrollTrigger
  const animateCloud = useCallback(() => {
    animateT1.current = gsap.timeline({
      scrollTrigger: {
        trigger: videoBGRef.current,
        // markers: true,
        scrub: 1,
        start: "center center",
        end: "bottom 200",
      },
    });
  }, []);

  useEffect(() => {
    animateCloud();
    cloudMove();
  }, [animateCloud, cloudMove]);

  return (
    <div className="w-screen h-screen block relative" ref={videoBGRef}>
      {/* 大于640的时候展示 sm:block */}
      <video
        autoPlay
        muted
        loop
        className="sm:w-full sm:h-full sm:object-fill transform-gpu hidden sm:block"
      >
        <source src={video} />
      </video>

      <img
        src={img_cloud1}
        ref={cloud1Ref}
        className="w-screen h-screen absolute left-0 bottom-0 hidden sm:block"
      />
      <img
        src={img_cloud2}
        ref={cloud2Ref}
        className="w-screen h-screen absolute left-0 bottom-0 hidden sm:block"
      />
      <img
        src={img_cloud3}
        ref={cloud3Ref}
        className="w-screen h-screen absolute left-0 bottom-0 hidden sm:block"
      />
    </div>
  );
};

export default VideoBG;
