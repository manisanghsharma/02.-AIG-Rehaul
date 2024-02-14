import { Link } from "react-router-dom"
import {BsArrowLeft} from "react-icons/bs"

const BackBtn = () => {
  return (
    <div className="absolute left-5 top-[90px] text-4xl">
        <Link to={'/'}>
            <BsArrowLeft className="hover:scale-110 transition-all"/>
        </Link>
    </div>
  )
}
export default BackBtn