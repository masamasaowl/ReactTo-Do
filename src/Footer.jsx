import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    return (
        <>
           <div className="Footer">
                <p className="poppins">Created with <FontAwesomeIcon icon={faHeart} /> & kind help of Shraddha ma'am</p>
            </div>
            
        </>
        
    );
};