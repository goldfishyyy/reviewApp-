// a component strickly style a review container
// destruct content that was wrapped by Car {children}
import PropTypes from 'prop-types'
function Card({children, reverse}){

    return(
        <div className={`card ${reverse && 'reverse'}`}>
            {/* display content that is wrapped by <Card> */}
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false
}
Card.propTypes = {
    reverse: PropTypes.bool,
    children: PropTypes.node.isRequired
}
export default Card