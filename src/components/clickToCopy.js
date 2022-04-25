import * as React from "react"
import { usePopper } from "react-popper"
import useMediaQuery from "../hooks/useMediaQuery"

const ClickToCopy = ({
  children,
  showPopper,
  setShowPopper,
  popperIds,
  setPopperIds,
}) => {
  const isMobile = useMediaQuery("(max-width: 576px)")
  const [referenceElement, setReferenceElement] = React.useState(null)
  const [popperElement, setPopperElement] = React.useState(null)
  const [arrowElement, setArrowElement] = React.useState(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
    placement: isMobile ? "top" : "right",
  })

  return (
    <>
      <div
        ref={setReferenceElement}
        style={{
          border: "1px solid white",
          padding: "2px 10px 7px",
          borderRadius: 50,
          display: "inline-block",
          cursor: "pointer",
          wordBreak: "break-all",
        }}
        onClick={e => {
          navigator.clipboard.writeText(e.target.innerHTML)
          popperIds.forEach(id => clearInterval(id))
          setShowPopper({})
          setShowPopper({ [children]: true })
          const id = setTimeout(() => {
            setShowPopper({ [children]: false })
          }, 1000)
          setPopperIds([...popperIds, id])
        }}
        aria-hidden="true"
      >
        {children}
      </div>
      {showPopper[children] && (
        <div
          ref={setPopperElement}
          style={{
            ...styles.popper,
            background: isMobile ? "white" : "transparent",
            color: isMobile ? "black" : "white",
            padding: "3px 7px",
            borderRadius: 50,
          }}
          {...attributes.popper}
        >
          Текст скопійовано
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  )
}

export default ClickToCopy
