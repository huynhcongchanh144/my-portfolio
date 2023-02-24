'use client'
import React from 'react'

export default function Resume() {
    const [tab, setTab] = React.useState('skill')

    function changeTab(tab) {
        setTab(tab)
    }


    return (
        <div className="row resume pb-5">
            <span className="highlight-text text-center">2+ YEARS OF EXPERIENCE</span>
            <h2 className="title text-center">My Resume</h2>
            <div className="row tabs">
                <div className={`tab col ${tab == 'edu' ? 'active' : ''}`} onClick={() => changeTab('edu')}>
                    Education
                </div>
                <div className={`tab col ${tab == 'skill' ? 'active' : ''}`} onClick={() => changeTab('skill')}>
                    Professional Skills
                </div>
                <div className={`tab col ${tab == 'exp' ? 'active' : ''}`} onClick={() => changeTab('exp')}>
                    Experience
                </div>
                <div className={`tab col ${tab == 'inter' ? 'active' : ''}`} onClick={() => changeTab('inter')}>
                    Interview
                </div>
            </div>

            <div className={`row contents-tab my-5 ${tab == 'edu' ? 'active' : 'hide'}`}>
                <div className="col-6 contents">
                    <span className="highlight-text">2007 - 2010</span>
                    <h4 className="fw-bold fs-2">Education Quality</h4>
                    <div className="contain-items mt-5">
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 contents">
                    <span className="highlight-text">2007 - 2010</span>
                    <h4 className="fw-bold fs-2">Job Experience</h4>
                    <div className="contain-items mt-5">
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`row contents-tab my-5 justify-content-between ${tab == 'skill' ? 'active' : 'hide'}`}>
                <div className="col-6 contents">
                    <span className="highlight-text">Features</span>
                    <h4 className="fw-bold fs-2">Development Skill</h4>
                    <div className={`contain-skills mt-3 ${tab == 'skill' ? 'active' : ''}`}>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>HTML</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>100%</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>CSS</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>100%</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>JAVASCRIPT</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>100%</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>VUEJS/NUXTJS</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>100%</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>LARAVEL</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>75%</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>REACTJS/NEXTJS</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>75%</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 contents">
                    <span className="highlight-text">Features</span>
                    <h4 className="fw-bold fs-2">Design Skill</h4>
                    <div className={`contain-skills mt-3 ${tab == 'skill' ? 'active' : ''}`}>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>HTML</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>100%</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>CSS</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>100%</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>JAVASCRIPT</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>100%</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>VUEJS/NUXTJS</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>100%</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>LARAVEL</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>75%</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0 skill">
                            <span className='px-0 py-3'>REACTJS/NEXTJS</span>
                            <div className="progress px-0">
                                <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <label>75%</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`row contents-tab my-5 ${tab == 'exp' ? 'active' : 'hide'}`}>
                <div className="col-6 contents">
                    <span className="highlight-text">2007 - 2010</span>
                    <h4 className="fw-bold fs-2">Education Quality</h4>
                    <div className="contain-items mt-5">
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 contents">
                    <span className="highlight-text">2007 - 2010</span>
                    <h4 className="fw-bold fs-2">Job Experience</h4>
                    <div className="contain-items mt-5">
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`row contents-tab my-5 ${tab == 'inter' ? 'active' : 'hide'}`}>
                <div className="col-6 contents">
                    <span className="highlight-text">2007 - 2010</span>
                    <h4 className="fw-bold fs-2">Company Experience</h4>
                    <div className="contain-items mt-5">
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 contents">
                    <span className="highlight-text">2007 - 2010</span>
                    <h4 className="fw-bold fs-2">Education Quality</h4>
                    <div className="contain-items mt-5">
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row mx-0 justify-content-between align-items-center">
                                <div className="title-item col-10">
                                    <h4 className="fw-bold">Personal Portfolio April Fools</h4>
                                    <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <span className="highlight-text col-2">4.30/5</span>
                            </div>
                            <div className="row mx-0 py-5">
                                <p className="col-12 desc">
                                    The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}