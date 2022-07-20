import * as React from "react"
import ClickToCopy from "../components/clickToCopy"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

const Credentials = () => {
  const { t } = useTranslation()
  const [showPopper, setShowPopper] = React.useState(false)
  const [popperIds, setPopperIds] = React.useState([])

  return (
    <div>
      <p>
        <i>{t("mention")}</i>
      </p>
      <hr className="bg-white mb-3" />
      <ul style={{ marginLeft: 0 }}>
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">Monobank UAH</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            5375411417441693
          </ClickToCopy>
        </li>
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">Monobank USD</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            4441114480845278
          </ClickToCopy>
        </li>
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">Monobank EUR</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            4441114491222640
          </ClickToCopy>
        </li>
        <hr className="bg-white mb-3" />
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">IBAN (EUR):</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            UA233220010000026209329776082
          </ClickToCopy>
        </li>
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">IBAN (USD):</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            UA393220010000026208329784655
          </ClickToCopy>
        </li>
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">Name of reciever</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            MELNYKOV SERHII, 01001, Ukraine,city Kyiv,street Dzhona
            Makkeina,building 7,flat 330
          </ClickToCopy>
        </li>
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">Name of the bank: </p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            JSK UNIVERSAL BANK
          </ClickToCopy>
        </li>
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">SWIFT CODE/BIC: </p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            UNJSUAUKXXX
          </ClickToCopy>
        </li>
        <hr className="bg-white mb-3" />
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">PayPal: </p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            melnykov_sergiy@ukr.net
          </ClickToCopy>
        </li>
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">Crypto BTC:</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            1PgLvcGNwerzKwtDSdvvgPLCgXDYfy8YZW
          </ClickToCopy>
        </li>
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">Crypto ETH(ERC20):</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            0x6f69c7fc26f885934d48d0285fb8c1a992e4a2da
          </ClickToCopy>
        </li>
        <li className="flex items-center flex-wrap">
          <p className="mr-3 mb-0">Crypto USDT(TRC20):</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            TW8nrwBuTWogBZN9kzChJ3fjg6FFmC5qaC
          </ClickToCopy>
        </li>
      </ul>
    </div>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default Credentials
