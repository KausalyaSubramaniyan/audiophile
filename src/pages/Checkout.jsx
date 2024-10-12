import { css } from "@emotion/react";
import Input from "../components/Input";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import { colors, subTitle, spacing } from "../styles/CommonStyles";
import Footer from "../components/Footer";

export default function Checkout() {
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

  const getSummary = () => {
    return <div css={styles.summary}></div>;
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
  }),
  checkout: css({
    width: "64%",
    padding: "3rem",
    backgroundColor: colors.white,
  }),
  summary: css({
    width: "23%",
    backgroundColor: colors.white,
  }),
  section: css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: "1rem",
    marginBottom: "3rem",
  }),
};
