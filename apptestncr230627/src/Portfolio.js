import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const Portfolio = () =>{
    return(
        <>
            <header id="hd" className="fixed-top">
                <div className="d-flex justify-content-between align-item-center container">
                    <h1 id="imgs"><a href=""><img src='../img/logo.jpg'/></a></h1>
                    <ul id="gnb" className="d-flex">
                        <li><a href="#about">나의 소개</a></li>
                        <li><a href="#review">나의 작업</a></li>
                        <li><a href="#contact">나의 연락처</a></li>
                    </ul>
                    <ul id="sns" className="d-flex">
                        <li><a href="https://github.com/xoxo2812/apptest_NCR_230627"><i className="bi bi-github"></i></a></li>
                        <li><a href="https://www.notion.so/6-2-3b13fd44b46244439676e6bd8b37a96d?pvs=4"><i className="bi bi-bookmarks-fill"></i></a></li>
                    </ul>
                </div>
            </header>
            <div id="slide" className="vh-100 bg-primary-subtle">
            <main className="ExampleComponent">
                <div className="main-wrap">
                    <Swiper
                        style={{
                        width: "335px",
                        height: "170px",
                        backgroundColor: "#FFF5F1",
                        borderRadius: "12px",
                        }}
                        spaceBetween={8}
                        initialSlide={1}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{ delay: 2000 }}>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>
            </main>
            </div>
            <div id="about" className="vh-100 bg-light"></div>
            <div id="review" className="vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </div>
            <div id="contact" className="vh-100 bg-light"></div>

            
        </>
    )
}

export default Portfolio;