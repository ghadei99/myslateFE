import { BsPenFill, BsPencilSquare, BsFillPencilFill } from 'react-icons/bs'
import { ImPencil2 } from 'react-icons/im'
import PostSomething from "./PostSomething.jsx"
import { useState } from "react"
import { Link } from "react-router-dom"

const Pencil = () => {

    const [postModalFlag, setPostModal] = useState(false)
    const postModalSwitch = () => {
        setPostModal(!postModalFlag)
    }

    return (
        <>
            <div>
                <div className="pencil">
                    {/* <Link >
                </Link> */}
                    <BsFillPencilFill onClick={postModalSwitch} className='pencil-icon' />
                </div>
            </div>

            <div>
                <PostSomething postModalFlag={postModalFlag} postModalSwitch={postModalSwitch} />
            </div>
        </>
    )
}

export default Pencil;
