import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ClickToCopy from "../components/clickToCopy"
import * as styles from "./styles.module.css"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

const IndexPage = props => {
  const { t } = useTranslation()
  const [showPopper, setShowPopper] = React.useState(false)
  const [popperIds, setPopperIds] = React.useState([])

  return (
    <Layout>
      <Seo title="Way to Ukraine" />
      <p>{t("intro")}</p>
      <p>{t("explanation")}</p>
      <p>{t("aim")}</p>
      <p>{t("help")}</p>
      <p>
        <i>{t("mention")}</i>
      </p>
      <hr className={styles.line} />
      <ul style={{ marginLeft: 0 }}>
        <li className={styles.listItem}>
          <p className={styles.listItemName}>PrivatBank UAH</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            4149499373566536
          </ClickToCopy>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemName}>PrivatBank USD</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            4149499373530177
          </ClickToCopy>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemName}>PrivatBank EUR</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            4149499373566106
          </ClickToCopy>
        </li>
        <hr className={styles.line} />
        <li className={styles.listItem}>
          <p className={styles.listItemName}>IBAN (EUR):</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            UA603052990262096400933162129
          </ClickToCopy>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemName}>IBAN (USD):</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            UA833052990262076400932972013
          </ClickToCopy>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemName}>Name of the bank: </p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            JSC CB PRIVATBANK, 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
          </ClickToCopy>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemName}>SWIFT CODE/BIC: </p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            PBANUA2X
          </ClickToCopy>
        </li>
        <hr className={styles.line} />
        <li className={styles.listItem}>
          <p className={styles.listItemName}>PayPal: </p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            melnykov_sergiy@ukr.net
          </ClickToCopy>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemName}>Crypto BTC:</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            1PgLvcGNwerzKwtDSdvvgPLCgXDYfy8YZW
          </ClickToCopy>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemName}>Crypto ETH(ERC20):</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            0x6f69c7fc26f885934d48d0285fb8c1a992e4a2da
          </ClickToCopy>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemName}>Crypto USDT(TRC20):</p>
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
    </Layout>
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

export default IndexPage
