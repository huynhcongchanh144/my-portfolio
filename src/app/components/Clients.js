"use client";
import Image from "next/image";
import client from "../assets/images/client.png";
import client1 from '../assets/images/client1.png'
import quote from "../assets/images/quote.png";
import React from "react";

export default function Clients() {
  React.useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div className="row clients pb-5 mx-0 justify-content-center">
      <span className="highlight-text text-center">WHAT CLIENTS SAY</span>
      <h2 className="title text-center">Testimonial</h2>

      <div className="col-12 px-0">
        <div
          id="carouselExampleIndicators"
          className="carousel slide mt-5"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row mx-0 p-0 p-lg-5">
                <div className="col-lg-4 col-12">
                  <div className="thumbnail">
                    <div className="avatar mb-3">
                        <Image src={client} className="w-100" alt="avatar"/>
                    </div>
                    <small className="highlight-text py-4">RAINBOW-THEMES</small>
                    <h4 className="fw-bold mt-2">Nevine Acotanza</h4>
                    <small>Chief Operating Officer</small>
                  </div>
                </div>
                <div className="col-lg-8 col-12 py-3 py-lg-0">
                    <div className="d-none d-lg-block">
                        <Image src={quote} width={130} height={130} alt="avatar"/>
                    </div>
                    <div className="comment">
                        <div className="row mx-0 justify-content-between align-items-center">
                            <div className="title-comment col-12 col-lg-10">
                                <h3>Android App Development</h3>
                                <small>via Upwork - Mar 4, 2015 - Aug 30, 2021</small>
                            </div>
                            <div className="rate col-lg-2 col-12 py-4 py-lg-0">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                        </div>
                        <div className="row mx-0 py-5">
                            <div className="col-12">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae fugit quo aspernatur dicta. Odio eaque, doloremque dolore cupiditate dicta facilis omnis? Accusantium, veritatis vitae! Architecto harum at esse explicabo dicta!
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row mx-0 p-0 p-lg-5">
                <div className="col-lg-4 col-12">
                  <div className="thumbnail">
                    <div className="avatar mb-3">
                        <Image src={client} className=" w-100" alt="avatar"/>
                    </div>
                    <small className="highlight-text py-4">RAINBOW-THEMES</small>
                    <h4 className="fw-bold mt-2">Nevine Acotanza</h4>
                    <small>Chief Operating Officer</small>
                  </div>
                </div>
                <div className="col-lg-8 col-12 py-3 py-lg-0">
                    <div className="">
                        <Image src={quote} width={130} height={130} alt="avatar"/>
                    </div>
                    <div className="comment">
                        <div className="row mx-0 justify-content-between align-items-center">
                            <div className="title-comment col-12 col-lg-10">
                                <h3>Android App Development</h3>
                                <small>via Upwork - Mar 4, 2015 - Aug 30, 2021</small>
                            </div>
                            <div className="rate col-lg-2 col-12 py-4 py-lg-0">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                        </div>
                        <div className="row mx-0 py-5">
                            <div className="col-12">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae fugit quo aspernatur dicta. Odio eaque, doloremque dolore cupiditate dicta facilis omnis? Accusantium, veritatis vitae! Architecto harum at esse explicabo dicta!
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mx-0 p-0 p-lg-5">
                <div className="col-lg-4 col-12">
                  <div className="thumbnail">
                    <div className="avatar mb-3">
                        <Image src={client} className="w-100" alt="avatar"/>
                    </div>
                    <small className="highlight-text py-4">RAINBOW-THEMES</small>
                    <h4 className="fw-bold mt-2">Nevine Acotanza</h4>
                    <small>Chief Operating Officer</small>
                  </div>
                </div>
                <div className="col-lg-8 col-12 py-3 py-lg-0">
                    <div className="">
                        <Image src={quote} width={130} height={130} alt="avatar"/>
                    </div>
                    <div className="comment">
                        <div className="row mx-0 justify-content-between align-items-center">
                            <div className="title-comment col-12 col-lg-10">
                                <h3>Android App Development</h3>
                                <small>via Upwork - Mar 4, 2015 - Aug 30, 2021</small>
                            </div>
                            <div className="rate col-lg-2 col-12 py-4 py-lg-0">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                        </div>
                        <div className="row mx-0 py-5">
                            <div className="col-12">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae fugit quo aspernatur dicta. Odio eaque, doloremque dolore cupiditate dicta facilis omnis? Accusantium, veritatis vitae! Architecto harum at esse explicabo dicta!
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev d-none d-lg-flex"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <i className="bi bi-arrow-left-short"></i>
          </button>
          <button
            className="carousel-control-next d-none d-lg-flex"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
      
      <div className="col-12 px-0 popular-client mt-4 mt-lg-0">
        <span className="highlight-text">POPULAR CLIENTS</span>
        <h2 className="title">Awesome Clients</h2>
        <div className="row mx-0">
            <div className="col-lg-3 col-12">
                <button className="task btn active">
                    <span>JavaScript</span>
                </button>
                <button className="task btn">
                    <span>Product Design</span>
                </button>
                <button className="task btn">
                    <span>Wordpress</span>
                </button>
                <button className="task btn">
                    <span>HTML to React</span>
                </button>
                <button className="task btn">
                    <span>React to Laravel</span>
                </button>
            </div>
            <div className="col-lg-9 col-12 contain-client mt-3 mt-lg-0">
                <div className="row mx-0 gy-4">
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="client-task text-center">
                            <Image src={client1} alt="avatar"/>
                            <div className="py-4">John Due</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
