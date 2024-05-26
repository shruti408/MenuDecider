import { useContext } from "react";
import MenuContext from "../context/menuContext";
import DeleteDish from "./deleteDish";

function Menu() {
    const { menu } = useContext(MenuContext);

    // menu blank case 
    if (!menu) {
        return;
    }

    return (
        <>
            <div className="container d-flex justify-content-center mt-3">
                 {/* Menu card starts here  */}
                <div className="card" style={{ width: "31rem" }}>
                    <div class="card-body">
                        {/* menu card heading starts here  */}
                        <h5 className="card-title text-center">Menu</h5>
                        {/* menu card heading ends here */}
                        {/* menu list starts here  */}
                        <ul className="list-group list-group-flush">
                            {
                                menu.map((dish, i) => {
                                    return (
                                        // Menu list item starts here 
                                        <li className="list-group-item" key={i}>
                                            <div className="row">
                                                {/* todo title starts here  */}
                                                <span className="col-2">{i+1} .</span>
                                                <span className="col-8">{menu[i]}</span>
                                                {/* todo title ends here  */}
                                                {/* todo delete button starts here  */}
                                                <span className="col-1">
                                                    <DeleteDish dish_index={i} />
                                                </span>
                                                {/* todo delete button ends here  */}
                                            </div>
                                        </li>
                                        // Menu list item ends here 
                                    );
                                })
                            }
                        </ul>
                        {/* menu list end  here */}
                    </div>
                </div>
                 {/* Menu card ends here  */}
            </div>
        </>
    );
}


export default Menu;
