import {FaRegQuestionCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function AboutIconLink(){
    return(
        <div className='about-link'>
            <Link to='/about'>
            <FaRegQuestionCircle size={30}/>
            </Link>
        </div>
    )
}
export default AboutIconLink