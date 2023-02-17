import {BsBoxArrowInUpRight} from 'react-icons/bs'
import {BsSuitHeart} from 'react-icons/bs'

export default function Portfolio() {
    return (
        <div className="portfoilio row pb-5">
            <span className="col-12 text-center highlight-text">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</span>
            <h2 className="title text-center">My Portfolio</h2>
            <div className="row px-0 mx-0 justify-content-between mt-4">
                <div className="col-4 contain-item">
                    <div className="item p-4">
                        <div className="thumbnail">
                            <a href=""><img src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg"/></a>
                        </div>
                        <div className="row justify-content-between py-2">
                            <div className="type highlight-text col">DEVELOPMENT</div>
                            <div className="like col text-end"><BsSuitHeart /> <span className="align-middle">600</span></div>
                        </div>
                        <h4 className="title"><a href="#">The services provide for design <BsBoxArrowInUpRight /></a></h4>
                    </div>
                </div>
                <div className="col-4 contain-item">
                    <div className="item p-4">
                        <div className="thumbnail">
                            <a href=""><img src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg"/></a>
                        </div>
                        <div className="row justify-content-between py-2">
                            <div className="type highlight-text col">DEVELOPMENT</div>
                            <div className="like col text-end"><BsSuitHeart /> <span className="align-middle">600</span></div>
                        </div>
                        <h4 className="title"><a href="#">The services provide for design <BsBoxArrowInUpRight /></a></h4>
                    </div>
                </div>
                <div className="col-4 contain-item">
                    <div className="item p-4">
                        <div className="thumbnail">
                            <a href=""><img src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg"/></a>
                        </div>
                        <div className="row justify-content-between py-2">
                            <div className="type highlight-text col">DEVELOPMENT</div>
                            <div className="like col text-end"><BsSuitHeart /> <span className="align-middle">600</span></div>
                        </div>
                        <h4 className="title"><a href="#">The services provide for design <BsBoxArrowInUpRight /></a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}