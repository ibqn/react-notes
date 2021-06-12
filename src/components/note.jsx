import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'
import useWindowSize from '../hooks/use-window-size'

const randomBetween = (a, b) => a + Math.ceil(Math.random() * (b - a))

const NoteStyles = styled.div`
  position: absolute;
  height: 150px;
  width: 150px;
  /* background-color: #eeb902; */
  background-color: #ffe74c;
  margin: 2px 0;
  cursor: grab;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
`

const Note = ({ note }) => {
  const { width, height } = useWindowSize()
  const [editing, setEditing] = useState(false)
  const positions = {
    top: `${randomBetween(0, height - 150)}px`,
    right: `${randomBetween(0, width - 150)}px`,
  }
  return <NoteStyles style={positions}>note {note.note}</NoteStyles>
}

Note.propTypes = {
  note: PropTypes.exact({
    id: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
  }),
}

export default Note
