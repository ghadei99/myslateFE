import Header from "./Header.jsx";
import Pencil from "./PencilForMobile.jsx";
import ScrollComponent from "./InfinityScrolling.jsx";
import LeftOptions from "./LeftOptions.jsx";

const Homepage = () => {

    return (
        <div>
            {/* <Header /> */}
            <Pencil />
            <LeftOptions />
            <ScrollComponent />
        </div>
    )
}


export default Homepage;