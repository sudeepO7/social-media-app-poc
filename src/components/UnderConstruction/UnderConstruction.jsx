import { useNavigate } from "react-router-dom";
import "./underConstruction.scss"

export default function UnderConstruction() {
    const navigate = useNavigate();
    return (
        <div className="underConstructionWrapper">
            <button className="underConstructionBack" onClick={() => navigate(-1)}>Back</button>
            <img src="assets/page-under-construction.png" className="underConstructionImg" />
        </div>
    );
}
