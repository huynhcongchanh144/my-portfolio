import {FiFacebook, FiInstagram, FiLinkedin, FiGithub} from 'react-icons/fi'
import {IoLogoVue, IoLogoReact, IoLogoLaravel} from 'react-icons/io5'
import {GrMysql} from 'react-icons/gr'
import banner from '../assets/images/banner.png'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className="row banner py-5">
            <div className="col-lg-6 col-12 d-block d-lg-none">
                <div className="thumbnail">
                    <div className="inner text-center">
                        <Image src={banner} className="img-fluid" alt="thumbnail"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 pt-5 pt-lg-0">
                <span>WELCOME TO MY WORLD</span>
                <h1 className="title py-3 py-lg-0">Hi, I’m <span className="highlight-text">Chanh Huynh</span> <br /> a Web Developer.</h1>
                <p>
                    I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
                </p>

                <div className="row mx-0 justify-content-between">
                    <div className="social col-lg-4 col-12 px-0">
                        <span>FIND WITH ME</span>
                        <ul className="list-unstyled list-group list-group-horizontal justify-content-around">
                            <li className="facebook">
                                <a href="#"><FiFacebook size="1.5em"/></a>
                            </li>
                            <li className="instagram">
                                <a href="#"><FiInstagram size="1.5em"/></a>
                            </li>
                            <li className="linkedin">
                                <a href="#"><FiLinkedin size="1.5em"/></a>
                            </li>
                            <li className="github">
                                <a href="#"><FiGithub size="1.5em"/></a>
                            </li>
                        </ul>
                    </div>
                    <div className="skills col-lg-4 col-12 px-0 pt-3 pt-lg-0">
                        <span>BEST SKILL ON</span>
                        <ul className="list-unstyled list-group list-group-horizontal justify-content-around">
                            <li className="facebook">
                                <IoLogoVue fill="#42b883" size="1.5em"/>
                            </li>
                            <li className="instagram">
                                <IoLogoReact fill="#61DBFB" size="1.5em"/>
                            </li>
                            <li className="linkedin">
                                <IoLogoLaravel fill="#FF291B" size="1.5em"/>
                            </li>
                            <li className="github">
                                <GrMysql fill="#00618A" size="1.5em"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 d-none d-lg-block">
                <div className="thumbnail">
                    <div className="inner text-center">
                        <Image src={banner} width={400} alt="thumbnail"/>
                    </div>
                </div>
            </div>
        </div>
    )
}