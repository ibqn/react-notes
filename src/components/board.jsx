import PropTypes from 'prop-types'

const Board = ({ count }) => {
  return <div>board {count}</div>
}

Board.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Board
