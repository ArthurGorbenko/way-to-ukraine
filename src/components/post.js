import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"

import p1p1 from "../images/p1p1.png"
import p1p2 from "../images/p1p2.png"
import p1p3 from "../images/p1p3.png"
import p3p1 from "../images/p3p1.png"
import p3p2 from "../images/p3p2.png"
import p3p3 from "../images/p3p3.png"
import p3p4 from "../images/p3p4.png"
import p3p5 from "../images/p3p5.png"
import p4p1 from "../images/p4p1.png"
import p5p1 from "../images/p5p1.png"
import p5p2 from "../images/p5p2.png"
import p5p3 from "../images/p5p3.png"
import p5p4 from "../images/p5p4.png"
import p5p5 from "../images/p5p5.png"
import p6p1 from "../images/p6p1.png"
import p6p2 from "../images/p6p2.png"
import p6p3 from "../images/p6p3.png"
import p6p4 from "../images/p6p4.png"
import p7p1 from "../images/p7p1.png"
import p8p1 from "../images/p8p1.png"
import p8p2 from "../images/p8p2.png"
import p10p1 from "../images/p10p1.jpeg"
import p10p2 from "../images/p10p2.jpeg"
import p10p3 from "../images/p10p3.jpeg"
import p10p4 from "../images/p10p4.jpeg"
import p10p5 from "../images/p10p5.jpeg"
import p10p6 from "../images/p10p6.jpeg"
import p11p1 from "../images/p11p1.jpeg"
import p11p2 from "../images/p11p2.jpeg"
import p11p3 from "../images/p11p3.jpeg"
import p11p4 from "../images/p11p4.jpeg"
import p11p5 from "../images/p11p5.jpeg"
import p11p6 from "../images/p11p6.jpeg"
import p11p7 from "../images/p11p7.jpeg"
import p11p8 from "../images/p11p8.jpeg"
import p11p9 from "../images/p11p9.jpeg"
import p11p10 from "../images/p11p10.jpeg"
import p11p11 from "../images/p11p11.jpeg"
import p11p12 from "../images/p11p12.jpeg"
import p11p13 from "../images/p11p13.jpeg"
import p11p14 from "../images/p11p14.jpeg"
import p11p15 from "../images/p11p15.jpeg"
import p12p1 from "../images/p12p1.jpeg"
import p12p2 from "../images/p12p2.jpeg"
import p13p1 from "../images/p13p1.jpeg"
import p13p2 from "../images/p13p2.jpeg"
import p13p3 from "../images/p13p3.jpeg"
import p13p4 from "../images/p13p4.jpeg"
import p13p5 from "../images/p13p5.jpeg"
import p13p6 from "../images/p13p6.jpeg"
import p13p7 from "../images/p13p7.jpeg"
import p14p1 from "../images/p14p1.jpeg"
import p14p2 from "../images/p14p2.jpeg"
import p14p3 from "../images/p14p3.jpeg"
import p14p4 from "../images/p14p4.jpeg"
import p14p5 from "../images/p14p5.jpeg"
import p14p6 from "../images/p14p6.jpeg"
import p14p7 from "../images/p14p7.jpeg"
import p14p8 from "../images/p14p8.jpeg"
import p14p9 from "../images/p14p9.jpeg"
import p15p1 from "../images/p15p1.jpeg"
import p15p2 from "../images/p15p2.jpeg"
import p15p3 from "../images/p15p3.jpeg"
import p15p4 from "../images/p15p4.jpeg"
import p15p5 from "../images/p15p5.jpeg"
import p16p1 from "../images/p16p1.jpeg"
import p16p2 from "../images/p16p2.jpeg"
import p16p3 from "../images/p16p3.jpeg"
import p16p4 from "../images/p16p4.jpeg"
import p16p5 from "../images/p16p5.jpeg"
import p16p6 from "../images/p16p6.jpeg"
import p16p7 from "../images/p16p7.jpeg"
import p16p8 from "../images/p16p8.jpeg"

import p9v1 from "../videos/p9v1.mp4"
import p10v1 from "../videos/p10v1.mp4"
import p11v1 from "../videos/p11v1.mp4"
import p11v2 from "../videos/p11v2.mp4"
import p13v1 from "../videos/p13v1.mp4"
import p14v1 from "../videos/p14v1.mp4"

import "swiper/css"
import "swiper/css/navigation"

const IMAGES_MAP = {
  p1p1,
  p1p2,
  p1p3,
  p3p1,
  p3p2,
  p3p3,
  p3p4,
  p3p5,
  p4p1,
  p5p1,
  p5p2,
  p5p3,
  p5p4,
  p5p5,
  p6p1,
  p6p2,
  p6p3,
  p6p4,
  p7p1,
  p8p1,
  p8p2,
  p10p1,
  p10p2,
  p10p3,
  p10p4,
  p10p5,
  p10p6,
  p11p1,
  p11p2,
  p11p3,
  p11p4,
  p11p5,
  p11p6,
  p11p7,
  p11p8,
  p11p9,
  p11p10,
  p11p11,
  p11p12,
  p11p13,
  p11p14,
  p11p15,
  p12p1,
  p12p2,
  p13p1,
  p13p2,
  p13p3,
  p13p4,
  p13p5,
  p13p6,
  p13p7,
  p14p1,
  p14p2,
  p14p3,
  p14p4,
  p14p5,
  p14p6,
  p14p7,
  p14p8,
  p14p9,
  p15p1,
  p15p2,
  p15p3,
  p15p4,
  p15p5,
  p16p1,
  p16p2,
  p16p3,
  p16p4,
  p16p5,
  p16p6,
  p16p7,
  p16p8,
}

const VIDEOS_MAP = {
  p9v1,
  p10v1,
  p11v1,
  p11v2,
  p13v1,
  p14v1,
}

const Post = ({ body, images, videos }) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col border-b mb-4 pb-5">
      <p>{t(body)}</p>
      {body === "posts.1.body" && (
        <div className="relative pb-[56.25%] pt-[25px] h-0 mb-4">
          <iframe
            src="https://www.youtube.com/embed/hmbRxrP-dPQ?start=15852"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerpolicy="origin"
            className="w-full h-full top-0 left-0 absolute"
          ></iframe>
        </div>
      )}
      {images && images.length > 0 && (
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            navigation
            modules={[Navigation]}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {!!images.length &&
              images.map(image => (
                <SwiperSlide>
                  <div className="">
                    <img
                      src={IMAGES_MAP[image]}
                      className="max-w-full w-full object-cover h-[500px]"
                      alt="Post"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}

      {videos &&
        videos.length > 0 &&
        videos.map(video => (
          <video controls width="540" className="my-4">
            <source src={VIDEOS_MAP[video]} type="video/mp4" />
          </video>
        ))}
    </div>
  )
}

export default Post
