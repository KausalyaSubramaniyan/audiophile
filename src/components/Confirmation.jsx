import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { subTitle } from "../styles/CommonStyles";
import Button from "./Button";
import Item from "./Item";
import Spacer from "./Spacer";
import Divider from "./Divider";
import ItemWithQuantity from "./ItemWithQuantity";

export default function Confirmation() {
  const [displayAll, setDisplayAll] = useState(false);
  const cartInfo = useSelector((state) => state.cart);
  const items = cartInfo.items;
  const bill = cartInfo.bill;

  const getItemsCard = () => {
    let itemsToDisplay = items;

    if (!displayAll && items.length > 0) {
      itemsToDisplay = items.slice(0, 1);
    }

    const itemsList = itemsToDisplay.map((item) => (
      <ItemWithQuantity item={item} key={item.id} />
    ));

    return (
      <>
        {itemsList}
        {items.length > 0 && (
          <>
            <Divider customCss={styles.lineContainer} />
            {!displayAll && (
              <p
                css={styles.toggleText}
                onClick={() => setDisplayAll(!displayAll)}
              >
                and {items.length - 1} other item(s)
              </p>
            )}
            {displayAll && (
              <p
                css={styles.toggleText}
                onClick={() => setDisplayAll(!displayAll)}
              >
                View less
              </p>
            )}
          </>
        )}
      </>
    );
  };

  const getSummaryCard = () => {
    return (
      <div css={styles.summaryCard}>
        <div css={styles.items}>{getItemsCard()}</div>
        <div
          css={displayAll ? [styles.total, styles.totalAtBottom] : styles.total}
        >
          <p css={styles.totalText}>GRAND TOTAL</p>
          <p css={styles.totalAmount}>{bill.grandTotal}</p>
        </div>
      </div>
    );
  };

  return (
    <div css={styles.container}>
      <img alt="success" src="/images/checkout/icon-order-confirmation.svg" />
      <h3>
        THANK YOU <br />
        FOR YOUR ORDER
      </h3>
      <p css={styles.emailText}>
        You will receive an email confirmation shortly.
      </p>
      <Spacer value="3rem" />
      {getSummaryCard()}
      <Spacer value="3rem" />
      <Button size="stretch">BACK TO HOME</Button>
    </div>
  );
}

const styles = {
  container: css({
    minHeight: "37rem",
    width: "30rem",
    padding: "3rem",
  }),
  emailText: css({
    opacity: "50%",
  }),
  summaryCard: css({
    display: "flex",
    width: "100%",
  }),
  items: css({
    width: "60%",
    backgroundColor: "var(--color-grey-200)",
    borderTopLeftRadius: "var(--radius-md)",
    borderBottomLeftRadius: "var(--radius-md)",
    padding: "var(--spacing-1-5) var(--spacing-1-5) 0rem var(--spacing-1-5)",
    boxSizing: "border-box",
  }),
  toggleText: css([
    subTitle,
    {
      textAlign: "center",
      "&:hover": {
        cursor: "pointer",
      },
    },
  ]),
  total: css({
    backgroundColor: "var(--color-secondary)",
    width: "40%",
    color: "var(--color-white-1000)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingLeft: "var(--spacing-2)",
    borderTopRightRadius: "var(--radius-md)",
    borderBottomRightRadius: "var(--radius-md)",
  }),
  totalAtBottom: css({
    display: "flex",
    paddingBottom: "var(--spacing-2-5)",
    justifyContent: "flex-end",
  }),
  totalText: css({
    opacity: "50%",
    margin: "0rem 0rem var(--spacing-1) 0rem",
  }),
  totalAmount: css({
    fontSize: "18px",
    margin: "0",
  }),
  lineContainer: css({
    backgroundColor: "var(--color-secondary)",
    opacity: "8%",
  }),
};
