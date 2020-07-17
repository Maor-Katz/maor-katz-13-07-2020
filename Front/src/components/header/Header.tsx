import React, {useState} from 'react';
import fire from '../../images/fireIcon.png';
import logo from '../../images/logo.png';
import {Link, useHistory} from "react-router-dom"

const Header = () => {
    const [openHeaderMobile, setOpenHeaderMobile] = useState(false);
    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        history.push('/login');
    };

    return (
        <div className="Header">
            <div className="leftHeader">
                <Link to='/'><img src={logo} alt="" className="logo"/></Link>
                <div className="phoneLetter"><span><i
                    className="far fa-envelope-open"></i></span><span>0779985041</span></div>
            </div>
            <div className="rightHeader desktop">
                <div className="rightHdrBtn arrowFire"><span><i className="fas fa-chevron-down"></i></span><span>לידים חמים</span><span><img
                    src={fire} alt=""/></span></div>
                <div className="rightHdrBtn">קבל הצעה אישית</div>
                <div className="rightHdrBtn">תגמול שותפים</div>
                <div className="rightHdrBtn">הוספת נכס</div>
                <div className="rightHdrBtn">מחשבון שטחים</div>
                <div className="rightHdrBtn">מועדפים</div>
                <div className="rightHdrBtn logout" onClick={() => {
                    logout()
                }}>התנתק
                </div>
                <div className="rightHdrBtn demoSwitchBtn"><span className="active pd13">מגורים</span><span
                    className="pd13">מסחרי</span></div>
            </div>
            <i className="fas fa-bars mobile" onClick={() => setOpenHeaderMobile(!openHeaderMobile)}></i>
            {openHeaderMobile && <div className="headerMenu">
                <div className="logout" onClick={() => {
                    logout()
                }}>התנתק
                </div>
                <div className="">קבל הצעה אישית</div>
                <div className="">תגמול שותפים</div>
                <div className="">הוספת נכס</div>
                <div className="">מחשבון שטחים</div>
                <div className="">מועדפים</div>
            </div>}
        </div>
    );
};

export default Header;