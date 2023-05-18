import propTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    //<div className={`card ${reverse && 'reverse'}`}>{children}</div>
    <div className='card' style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff'}}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
}

export default Card