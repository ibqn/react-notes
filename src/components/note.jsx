import PropTypes from 'prop-types'
import { useMemo, useState } from 'react'
import styled from 'styled-components'
import useWindowSize from 'hooks/use-window-size'
import { motion } from 'framer-motion'

const randomBetween = (a, b) => a + Math.ceil(Math.random() * (b - a))

const noteSize = 150

const NoteStyles = styled(motion.div)`
  position: absolute;
  height: ${noteSize}px;
  width: ${noteSize}px;

  background-color: #ffe74c;

  padding: 5px;
  cursor: grab;

  overflow: hidden;
`

const Note = ({ note, boardRef }) => {
  const { width, height } = useWindowSize()
  const [editing, setEditing] = useState(false)

  const positions = useMemo(
    () => ({
      top: `${randomBetween(0, height - noteSize)}px`,
      right: `${randomBetween(0, width - noteSize)}px`,
    }),
    [height, width]
  )

  return (
    <NoteStyles
      drag
      style={{
        ...positions,
        opacity: 0.9,
        boxShadow: '5px 5px 15px #222',
      }}
      dragConstraints={boardRef}
      whileHover={{ opacity: 1 }}
      whileTap={{
        opacity: 1,
        scale: 1.05,
        boxShadow: '0px 5px 8px #222',
      }}
      whileDrag={{ scale: 1.1, boxShadow: '0px 10px 16px #222' }}
      transition={{ duration: 0.6 }}
    >
      note {note.note}
    </NoteStyles>
  )
}

Note.propTypes = {
  note: PropTypes.exact({
    id: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    boardRef: PropTypes.oneOfType([
      PropTypes.func, // for legacy refs
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
  }),
}

export default Note
