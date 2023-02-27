import Image from "next/image"
import contact from '../assets/images/contact1.png'
import {FiFacebook, FiInstagram, FiLinkedin, FiGithub, FiArrowRight} from 'react-icons/fi'

export default function Contact() {
    return (
        <div className="row mx-0 contact justify-content-center py-5">
            <span className="highlight-text text-center">CONTACT</span>
            <h2 className="title text-center">Contact With Me</h2>
            <div className="col-12 px-0 py-5">
                <div className="row mx-0">
                    <div className="col-lg-4 col-12">
                        <div className="thumbnail">
                            <Image src={contact} alt="thumb"/>
                        </div>
                        <div className="title-area">
                            <h4>Chanh Huynh</h4>
                            <span>Chief Operating Officer</span>
                        </div>
                        <div className="description">
                            <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                            <div className="phone">
                                Phone: <a href="#">+84348187578</a>
                            </div>
                            <div className="phone">
                                Email: <a href="#">huynhcongchanh144@gmail.com</a>
                            </div>
                        </div>
                        <div className="social">
                            <span>FIND WITH ME</span>
                            <div className="icons">
                                <a href="#"><FiFacebook size="1.5em"/></a>
                                <a href="#"><FiInstagram size="1.5em"/></a>
                                <a href="#"><FiLinkedin size="1.5em"/></a>
                                <a href="#"><FiGithub size="1.5em"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-12">
                        <form action="">
                            <div className="row mx-0 mb-3">
                                <div className="form-group col">
                                    <label htmlFor="name">YOUR NAME</label>
                                    <input required type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="phone">PHONE NUMBER</label>
                                    <input required type="text" className="form-control" id="phone" />
                                </div>
                            </div>
                            <div className="row mx-0 mb-3">
                                <div className="form-group col">
                                    <label htmlFor="email">EMAIL</label>
                                    <input required type="email" className="form-control" id="email" />
                                </div>
                            </div>
                            <div className="row mx-0 mb-3">
                                <div className="form-group col">
                                    <label htmlFor="subject">SUBJECT</label>
                                    <input required type="text" className="form-control" id="subject" />
                                </div>
                            </div>
                            <div className="row mx-0 mb-3">
                                <div className="form-group">
                                    <label htmlFor="message">YOUR MESSAGE</label>
                                    <textarea required className="form-control" id="message" rows="10" cols="5"></textarea>
                                </div>
                            </div>

                            <div className="row mx-0">
                                <div className="col-12">
                                    <button className="submit w-100"><span>SEND MESSAGE <FiArrowRight size="1.2rem"/></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}