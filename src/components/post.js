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

import p9v1 from "../images/p9v1.mp4"

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
}

const Post = ({ body, images }) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col border-b mb-4">
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
      {body === "posts.8.body" && (
        <video controls width="540" className="mb-4">
          <source src={p9v1} />
        </video>
      )}
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
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Post
