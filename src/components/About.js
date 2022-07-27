import Card from './Card'
import {Link, NavLink} from 'react-router-dom'
function About(){
    return(
        <Card>
    <div className='about'>
        <h1>About This Project</h1>
        <p> This is a react project to leave a feedback for reviewing</p>
        <p> Version: 1.0.0</p>
        <Link to='/'>Back to Home</Link>
    </div>
   
   
        </Card>
    )
}
export default About