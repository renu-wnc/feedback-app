import PropTypes from 'prop-types'

function Button({children, type, version, isdisabled}) {
  return (
    <button type={type} disabled={isdisabled} className={`btn btn-${version}`}> {children} </button>
  )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isdisabled: 'false'
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    isdisabled: PropTypes.bool
}

export default Button