import {FaArrowRight} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'

export default function Features() {
    return (
        <div className="features row pb-5">
            <span className="highlight-text col-12">FEATURES</span>
            <h2 className="title col-12">What I Do</h2>
            <div className="row mx-0 justify-content-between px-0">
                <div className="col-4 contain-feature">
                    <div className="feature p-5">
                        <div className="icon mb-3"><FiMenu size="2rem" /></div>
                        <div className="content">
                            <div className="title mb-2">Business Stratagy</div>
                            <div className="short-desc mb-3">
                                I throw myself down among the tall grass by the stream as I lie close to the earth.
                            </div>
                            <a href="#" className="read-more"><FaArrowRight size="1.5rem"/></a>
                        </div>
                    </div>
                    <a href="#" className="feature-link"></a>
                </div>
                <div className="col-4 contain-feature">
                    <div className="feature p-5">
                        <div className="icon mb-3"><FiMenu size="2rem" /></div>
                        <div className="content">
                            <div className="title mb-2">Business Stratagy</div>
                            <div className="short-desc mb-3">
                                I throw myself down among the tall grass by the stream as I lie close to the earth.
                            </div>
                            <a href="#" className="read-more"><FaArrowRight size="1.5rem"/></a>
                        </div>
                    </div>
                    <a href="#" className="feature-link"></a>
                </div>
                <div className="col-4 contain-feature">
                    <div className="feature p-5">
                        <div className="icon mb-3"><FiMenu size="2rem" /></div>
                        <div className="content">
                            <div className="title mb-2">Business Stratagy</div>
                            <div className="short-desc mb-3">
                                I throw myself down among the tall grass by the stream as I lie close to the earth.
                            </div>
                            <a href="#" className="read-more"><FaArrowRight size="1.5rem"/></a>
                        </div>
                    </div>
                    <a href="#" className="feature-link"></a>
                </div>
            </div>
        </div>
    )
}