'use client'
import {FiCheck} from 'react-icons/fi'
import React from 'react'

export default function Pricing() {

    const [service, setService] = React.useState('standard')

    function changeService(service) {
        setService(service)
    }

    return (
        <div className="row mx-0 py-5 pricing justify-content-between">
            <div className="col-lg-4 col-12 px-0">
                <div className="pricing-title">
                    <span className="highlight-text text-center d-block">PRICING</span>
                    <h2 className="title d-inline">My Pricing</h2>
                </div>
            </div>

            <div className="col-lg-8 col-12 px-0">
                <div className="row mx-0 services">
                    <button className={`btn col-12 col-lg-4 ${service == 'static' ? 'active' : ''}`} onClick={() => changeService('static')}>Static</button>
                    <button className={`btn col-12 col-lg-4 recommended ${service == 'standard' ? 'active' : ''}`} onClick={() => changeService('standard')}>Standard</button>
                    <button className={`btn col-12 col-lg-4 ${service == 'premium' ? 'active' : ''}`} onClick={() => changeService('premium')}>Premium</button>
                </div>
                <div className="row mx-0 service-content mt-4">
                    <div className={`service-item col-12 ${service=='static' ? 'active' : ''}`}>
                        <div className="row mx-0 justify-content-between align-items-center">
                            <div className="title-service col-lg-10 col-12 ">
                                <h2>Make Your Single Page</h2>
                                <span>Elementor</span>
                            </div>
                            <div className="price col-lg-2 col-12 py-4 py-lg-0">
                                $30.00
                            </div>
                        </div>
                        <div className="service-body my-4 row mx-0">
                            <div className={`col-12`}>
                                <p className="px-0">Making this the first true generator on the Internet. It uses a dictionary & plugin Development.</p>
                                <div className="row mx-0 justify-content-between">
                                    <div className="col-lg-4 col-12 px-0">
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 px-0">
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="service-footer row mx-0">
                            <div className="order col-12">
                                <button><span>ORDER NOW</span> <i className="bi bi-arrow-right-short"></i></button>
                            </div>
                            <div className="support col-12">
                                <span className='d-block d-lg-inline text-start'><i className="bi bi-clock"></i> 2 Days Delivery</span>
                                <span className='d-block d-lg-inline text-start'><i className="bi bi-activity"></i> Unlimited Revission</span>
                            </div>
                        </div>
                    </div>

                    <div className={`service-item col-12 ${service=='standard' ? 'active' : ''}`}>
                        <div className="row mx-0 justify-content-between align-items-center">
                            <div className="title-service col-lg-10 col-12 ">
                                <h2>Design Make this Page</h2>
                                <span>Elementor</span>
                            </div>
                            <div className="price col-lg-2 col-12 py-4 py-lg-0">
                                $50.00
                            </div>
                        </div>
                        <div className="service-body my-4 row mx-0">
                            <div className={`col-12`}>
                                <p className="px-0">Making this the first true generator on the Internet. It uses a dictionary & plugin Development.</p>
                                <div className="row mx-0 justify-content-between">
                                    <div className="col-lg-4 col-12 px-0">
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 px-0">
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="service-footer row mx-0">
                            <div className="order col-12">
                                <button><span>ORDER NOW</span> <i className="bi bi-arrow-right-short"></i></button>
                            </div>
                            <div className="support col-12">
                                <span className='d-block d-lg-inline text-start'><i className="bi bi-clock"></i> 2 Days Delivery</span>
                                <span className='d-block d-lg-inline text-start'><i className="bi bi-activity"></i> Unlimited Revission</span>
                            </div>
                        </div>
                    </div>

                    <div className={`service-item col-12 ${service=='premium' ? 'active' : ''}`}>
                        <div className="row mx-0 justify-content-between align-items-center">
                            <div className="title-service col-lg-10 col-12 ">
                                <h2>Customize Your Single Page</h2>
                                <span>Elementor</span>
                            </div>
                            <div className="price col-lg-2 col-12 py-4 py-lg-0">
                                $90.00
                            </div>
                        </div>
                        <div className="service-body my-4 row mx-0">
                            <div className={`col-12`}>
                                <p className="px-0">Making this the first true generator on the Internet. It uses a dictionary & plugin Development.</p>
                                <div className="row mx-0 justify-content-between">
                                    <div className="col-lg-4 col-12 px-0">
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 px-0">
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                        <div className="item">
                                            <FiCheck size="1.7rem"/> <span>Design Customization</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="service-footer row mx-0">
                            <div className="order col-12">
                                <button><span>ORDER NOW</span> <i className="bi bi-arrow-right-short"></i></button>
                            </div>
                            <div className="support col-12">
                                <span className='d-block d-lg-inline text-start'><i className="bi bi-clock"></i> 2 Days Delivery</span>
                                <span className='d-block d-lg-inline text-start'><i className="bi bi-activity"></i> Unlimited Revission</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}