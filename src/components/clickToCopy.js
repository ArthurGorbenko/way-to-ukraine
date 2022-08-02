import * as React from "react"
import { usePopper } from "react-popper"
import useMediaQuery from "../hooks/useMediaQuery"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ClickToCopy = ({
  children,
  showPopper,
  setShowPopper,
  popperIds,
  setPopperIds,
}) => {
  const isMobile = useMediaQuery("(max-width: 576px)")
  const { t } = useTranslation()
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
        className="border border-white py-2 px-4 rounded-full cursor-pointer break-words inline-block"
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
          style={styles.popper}
          className="py-2 px-4 rounder-full sm:bg-transparent sm:text-white bg-white text-black"
          {...attributes.popper}
        >
          {t("copied")}
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  )
}

export default ClickToCopy
