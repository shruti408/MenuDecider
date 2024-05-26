import { Link } from "react-router-dom";
import GenerateDish from "./components/generateDish";

function Homepage() {

  return (
    <>
      <div className="container">
        {/* generate-dish component starts here */}
        <GenerateDish />
         {/* generate-dish component ends here */}
        <div className="container d-flex justify-content-center my-4" >
          {/* add dish page link starts here  */}
          <Link to="/addDish" className="btn btn-dark m-2" style={{width: "8rem"}}>+ Dish</Link>
          {/* add dish page link ends here  */}
          {/* menu page link starts here  */}
          <Link to="/menu" className="btn btn-dark m-2" style={{width: "8rem"}}>Menu</Link>
          {/* menu page link starts here  */}
        </div>
      </div>
    </>

  );
}

export default Homepage;
