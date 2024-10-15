import { css } from "@emotion/react";
import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import { colors, subTitle, spacing, radius } from "../styles/CommonStyles";
import Footer from "../components/Footer";
import Item from "../components/Item";
import { useState } from "react";
import Overlay from "../components/Overlay";
import Confirmation from "../components/Confirmation";
import useBill from "../hooks/useBill";
import Spacer from "../components/Spacer";

// TODO - Handle no items to checkout scenario
export default function Checkout() {
  const [isVisible, setIsVisible] = useState(false);
  const { total, vat, shipping, grandTotal } = useBill(
    localStorage.getItem("products")
  );

  const getForm = () => {
    return (
      <div css={styles.checkout}>
        <h3>CHECKOUT</h3>
        <div>
          <p css={subTitle}>BILLING DETAILS</p>
          <div css={styles.section}>
            <Input id="name" label="Name" placeholder="Alexei Ward" />
            <Input
              id="email"
              label="Email address"
              placeholder="alexei@mail.com"
            />
            <Input
              id="phone-number"
              label="Phone Number"
              placeholder="+1 202-555-0136"
            />
          </div>
        </div>
        <Spacer value="3rem" />
        <div>
          <p css={subTitle}>SHIPPING INFO</p>
          <div css={styles.section}>
            <Input
              id="address"
              label="Address"
              placeholder="1137 Williams Avenue"
            />
            <Input id="zip-code" label="ZIP Code" placeholder="10001" />
            <Input id="city" label="City" placeholder="New York" />
            <Input id="country" label="Country" placeholder="United States" />
          </div>
        </div>
        <Spacer value="3rem" />
        <div>
          <p css={subTitle}>PAYMENT DETAILS</p>
          <div css={styles.section}>
            <Input
              id="e-money-number"
              label="e-Money Number"
              placeholder="238521993"
            />
            <Input id="e-money-pin" label="e-Money PIN" placeholder="6891" />
          </div>
        </div>
      </div>
    );
  };

  // TODO - Can we make this generic?
  const getItems = () => {
    const products = localStorage.getItem("products");
    if (!products) return <></>;

    const jsonProducts = JSON.parse(products);

    const items = Object.keys(jsonProducts).map((name) => (
      <Item
        key={name}
        name={name}
        amount={jsonProducts[name]["amount"]}
        currSymbol={jsonProducts[name]["currSymbol"]}
        child={<p>x{jsonProducts[name]["quantity"]}</p>}
      />
    ));

    return (
      <>
        {items}
        <div css={[styles.section, styles.billText]}>
          <p>TOTAL</p>
          <p css={styles.amount}>${total}</p>
        </div>
        <div css={[styles.section, styles.billText]}>
          <p>SHIPPING</p>
          <p css={styles.amount}>${shipping}</p>
        </div>
        <div css={[styles.section, styles.billText]}>
          <p>VAT(INCLUDED)</p>
          <p css={styles.amount}>${vat}</p>
        </div>
        <div css={[styles.section, styles.billText]}>
          <p>GRAND TOTAL</p>
          <p css={styles.amount}>${grandTotal}</p>
        </div>
      </>
    );
  };

  const getSummary = () => {
    return (
      <div css={styles.summary}>
        <h6>SUMMARY</h6>
        <Spacer value="3rem" />
        {getItems()}
        <Button size="stretch" onClick={() => setIsVisible(true)}>
          CONTINUE & PAY
        </Button>
        <Overlay open={isVisible} onClick={() => setIsVisible(!isVisible)}>
          <Confirmation />
        </Overlay>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <div css={styles.container}>
        {getForm()}
        {getSummary()}
      </div>
      <Footer />
    </>
  );
}

const styles = {
  container: css({
    backgroundColor: "#F2F2F2",
    padding: `0rem ${spacing.md}`,
    display: "flex",
    justifyContent: "space-between",
  }),
  checkout: css({
    maxWidth: "58%",
    padding: "2rem 3rem 3rem 3rem",
    backgroundColor: colors.white,
    borderRadius: radius.md,
    h3: {
      marginTop: "18px",
    },
  }),
  summary: css({
    width: "25%",
    backgroundColor: colors.white,
    padding: "2rem",
    borderRadius: radius.md,
    maxHeight: "35rem",
  }),
  section: css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: "1rem",
  }),
  billText: css({
    p: {
      margin: "8px 0px",
    },
  }),
  amount: css([
    subTitle,
    {
      fontSize: "15px",
      opacity: "100%",
      margin: "0",
    },
  ]),
};
