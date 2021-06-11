import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'

const Note = ({ note }) => {
  const [editing, setEditing] = useState(false)
  return <div>note {note}</div>
}

Note.propTypes = {
  count: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
  }).isRequired,
}

export default Note
