import { FaHouseDamage } from "react-icons/fa";

import { FaHouseChimney } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"


function Test(){
    return(
        <div>
            <FaHouseDamage />
            <h1 className="text-danger bg-success ">this is a test component</h1>

            Lorem ipsum dolor sit.

            <FaHouseChimney size={20} color="green" />



        </div>
    )

}

export default Test
