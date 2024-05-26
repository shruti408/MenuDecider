import { useState, useContext, useEffect } from "react";
import MenuContext from "../context/menuContext";
import Menu from "./menu";

function AddDish() {
    let [dish, setDish] = useState("");
    let { menu, setMenu } = useContext(MenuContext);

    // adding menu to local-storage
    useEffect(() => {
        localStorage.setItem("Menu", JSON.stringify(menu));
    })

    // adding dish to menu 
    function handleAddDish(e) {
        e.preventDefault();

        // Dish input empty case 
        if (dish === "") {
            return;
        }

        // menu null case 
        if (!menu) {
            const copyMenu = [dish]
            setMenu(copyMenu);
            setDish("");
            return;
        }

        // checking if dish in already present in the menu 
        for (var j = 0; j < menu.length; j++) {
            if (menu[j] === dish) {
                setDish("");
                alert("already present, add another Dish");
                return;
            }
        }

        //finally adding dish to menu with duplicate array help
        const copyMenu = [...menu, dish];
        setMenu(copyMenu);
        setDish("");
    }

    return (
        <>
            {/* add dish form starts here  */}
                <div className="container d-flex justify-content-center my-4" >
                    <form onSubmit={handleAddDish} style={{ width: "30.5rem" }}>
                        <div className="input-group">
                            <label htmlFor="exampleInputEmail1" className="form-label"></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="type Dish here"
                                id="addDish"
                                aria-describedby="addDish"
                                onChange={(e) => setDish(e.target.value)}
                                value={dish}
                            />
                            <button type="submit" className="btn btn-dark">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
                {/* add dish form ends here  */}
                {/* menu starts here  */}
                <Menu />
                {/* menu ends here  */}
        </>
    )
}
export default AddDish;