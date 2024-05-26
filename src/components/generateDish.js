import { useState, useContext } from "react";
import MenuContext from "../context/menuContext";

function GenerateDish() {
    let [dish, setDish] = useState("Poha");
    let { menu } = useContext(MenuContext);

    // menu blank case 
    if (!menu || menu.length === 0) {
        alert("add dishes to menu first")
        return;
    }

    // generating dish with the help of random number and menu array
    function generateDish() {
        let random_index = Math.floor(Math.random() * menu.length);
        setDish(menu[random_index]);
    }

    return (
        <>
            {/* dish display card starts here  */}
            <div className="container text-center my-5" >
                <h4><u>Decide Breakfast</u></h4>
            </div>
            <div className="container d-flex justify-content-center my-4" >
                <div className="card text-center" style={{ width: "18rem", height: "7rem" }}>
                    <div className="card-body">
                        <h3 className="card-title m-3">{dish}</h3>
                    </div>
                </div>
            </div>
            {/* dish display card  ends here  */}
            {/* generate-dish-button starts here */}
            <div className="container d-flex justify-content-center my-4" >
                <button type="btn" className="card-link btn btn-success" onClick={generateDish} style={{width: "17rem"}}>
                    generate dish
                </button>
            </div>
             {/* generate-dish-button ends here */}
        </>
    )
}
export default GenerateDish;