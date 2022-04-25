import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ClickToCopy from "../components/clickToCopy"
import * as styles from "./styles.module.css"

const IndexPage = () => {
  const [showPopper, setShowPopper] = React.useState(false)
  const [popperIds, setPopperIds] = React.useState([])

  return (
    <Layout>
      <Seo title="WAY TO UKRAINE" />
      <p>
        Доброго вечора, ми з України! У цей нелегкий час вкрай важливо
        об`єднатися заради спільної мети - НАШОЇ ПЕРЕМОГИ!!! Кожен з нас
        намагається бути корисним для Батьківщини та робити все, що в наших
        силах, і ми з друзями не виключення. Нашими силами було організовано
        благодійний фонд, в який входить група волонтерів, які вже мали досвід в
        закупці та перевезенні автомобілів для потреб Збройних сил України.
      </p>
      <p>
        Для якісного підтримання боєздатності підрозділів Збройних сил України
        під час активних бойових дій виникає необхідність у швидкому
        транспортуванні амуніції, продуктів харчування, а також у перевезенні
        особового складу. Так як зараз ведеться активна фаза війни,
        катастрофічно не вистачає транспорту для вище зазначених цілей, тому
        виникла потреба у звичайних надійних машинах, з високою прохідністю
        бездоріжжям. Враховуючи не велику вартість відносно спеціального
        військового транспорту, можна закупити більше автомобілей та забезпечити
        ними більшу кількість бойових підрозділів.
      </p>
      <p>
        Що ми пропонуємо? Головна мета фонду доставити автомобіль підрозділам,
        які мають гостру потребу у транспорті. Тому, поспілкувавшись з
        військовими, ми маємо контакти людей, які відповідають за підрозділи, де
        ці машини необхідні.
      </p>
      <p>
        Чим Ви можете нам допомогти? Якщо у вас є можливість – то можете робити
        ваші внески. Також ми будемо вдячні за розповсюдження інформації про наш
        фонд.
      </p>
      <p>
        <i>Натисніть на номер гаманця, щоб скопіювати.</i>
      </p>
      <ul style={{ marginLeft: 0 }}>
        <li className={styles.listItem}>
          <p className={styles.listItemName}>Приватбанк UAH</p>
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
          <p className={styles.listItemName}>Приватбанк USD</p>
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
          <p className={styles.listItemName}>Приватбанк EUR</p>
          <ClickToCopy
            popperIds={popperIds}
            setPopperIds={setPopperIds}
            showPopper={showPopper}
            setShowPopper={setShowPopper}
          >
            4149499373566106
          </ClickToCopy>
        </li>
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
          <p className={styles.listItemName}>Crypto TRC20:</p>
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

export default IndexPage
