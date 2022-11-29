import { Link } from "react-router-dom";
import "./ButtonPrimary.css";

export default function ButtonPrimary({url,text}){
    return  <Link className="ButtonPrimary" to={url}>{text}</Link>
}