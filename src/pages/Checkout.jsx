import { css } from "@emotion/react";
import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import {
  colors,
  subTitle,
  radius,
  inputStyles,
  mediaQuery,
} from "../styles/CommonStyles";
import Footer from "../components/Footer";
import Item from "../components/Item";
import { useEffect, useState } from "react";
import Overlay from "../components/Overlay";
import Confirmation from "../components/Confirmation";
import useBill from "../hooks/useBill";
import Spacer from "../components/Spacer";
import RadioButton from "../components/RadioButton";
import { paymentsData } from "../data/mock/mock";
import { inputCriteria } from "../data/constant";

// TODO - Handle no items to checkout scenario
export default function Checkout() {
  const [isVisible, setIsVisible] = useState(false);
  const { total, vat, shipping, grandTotal } = useBill(
    localStorage.getItem("products")
  );
  // const [payments, setPayments] = useState([]);
  const [inputData, setInputData] = useState({
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    phoneNum: { value: "", error: "" },
    address: { value: "", error: "" },
    zipCode: { value: "", error: "" },
    city: { value: "", error: "" },
    country: { value: "", error: "" },
    payment: { value: "eMoney", error: "" },
    ePin: { value: "", error: "" },
    eNum: { value: "", error: "" },
  });

  // useEffect(() => {
  //   setPayments(paymentsData());
  // }, []);

  const getError = (ele) => {
    const criteria = inputCriteria[ele.name];
    if (!criteria) {
      return "";
    }

    const value = ele.value;
    if ("minLength" in criteria && criteria.minLength > 0) {
      if (value.length === 0) {
        return "Required";
      } else if (value.length < criteria.minLength)
        return `Should be more than ${criteria.minLength} characters`;
    }

    if ("maxLength" in criteria && criteria.maxLength > 0) {
      if (value.length > criteria.maxLength)
        return `Should not exceed ${criteria.maxLength} characters`;
    }

    if ("len" in criteria && criteria.len > 0) {
      if (criteria.len !== value.length) {
        return `Should be of ${criteria.len} characters`;
      }
    }

    if ("pattern" in criteria && criteria.pattern) {
      if (!criteria.pattern.test(value)) {
        return `Not a valid value`;
      }
    }
  };

  function handleOnChange(event, t) {
    const error = getError(event.target);
    const data = {
      ...inputData,
      [event.target.name]: {
        value: event.target.value,
        error,
      },
    };
    setInputData(data);
  }

  const getPaymentInfo = () => {
    return inputData.payment.value === "eMoney" ? (
      <>
        <Input
          id="e-money-number"
          name="eNum"
          label="e-Money Number"
          placeholder="238521993"
          type="number"
          value={inputData.eNum.value}
          error={inputData.eNum.error}
          onChange={(event) => handleOnChange(event)}
        />
        <Input
          id="e-money-pin"
          name="ePin"
          label="e-Money PIN"
          placeholder="6891"
          type="number"
          value={inputData.ePin.value}
          error={inputData.ePin.error}
          onChange={(event) => handleOnChange(event)}
        />
      </>
    ) : (
      <div css={styles.deliveryText}>
        <img
          src="/images/checkout/icon-cash-on-delivery.svg"
          alt="Cash on Delivery"
          height="48px"
          width="48px"
        />
        <p>
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      </div>
    );
  };

  const getForm = () => {
    return (
      <div css={styles.checkout}>
        <h3>CHECKOUT</h3>
        <div>
          <p css={styles.sectionTitle}>BILLING DETAILS</p>
          <div css={styles.section}>
            <Input
              id="name"
              name="name"
              label="Name"
              placeholder="Alexei Ward"
              value={inputData.name.value}
              error={inputData.name.error}
              onChange={(event) => {
                handleOnChange(event, this);
              }}
            />
            <Input
              id="email"
              name="email"
              label="Email address"
              placeholder="alexei@mail.com"
              value={inputData.email.value}
              error={inputData.email.error}
              onChange={(event) => handleOnChange(event)}
            />
            <Input
              id="phone-number"
              name="phoneNum"
              label="Phone Number"
              placeholder="+1 202-555-0136"
              value={inputData.phoneNum.value}
              error={inputData.phoneNum.error}
              onChange={(event) => handleOnChange(event)}
              type="number"
            />
          </div>
        </div>
        <Spacer value="3rem" />
        <div>
          <p css={styles.sectionTitle}>SHIPPING INFO</p>
          <div css={styles.section}>
            <Input
              id="address"
              name="address"
              label="Address"
              placeholder="1137 Williams Avenue"
              value={inputData.address.value}
              error={inputData.address.error}
              onChange={(event) => handleOnChange(event)}
              fullWidth
            />
            <Input
              id="zip-code"
              name="zipCode"
              label="ZIP Code"
              placeholder="10001"
              type="number"
              value={inputData.zipCode.value}
              error={inputData.zipCode.error}
              onChange={(event) => handleOnChange(event)}
            />
            <Input
              id="city"
              name="city"
              label="City"
              placeholder="New York"
              value={inputData.city.value}
              error={inputData.city.error}
              onChange={(event) => handleOnChange(event)}
            />
            <Input
              id="country"
              name="country"
              label="Country"
              placeholder="United States"
              value={inputData.country.value}
              error={inputData.country.error}
              onChange={(event) => handleOnChange(event)}
            />
          </div>
        </div>
        <Spacer value="3rem" />
        <div>
          <p css={styles.sectionTitle}>PAYMENT DETAILS</p>
          <div css={styles.section}>
            <p css={inputStyles.label}>Payment Method</p>
            <RadioButton
              id="payment"
              name="payment"
              options={paymentsData()}
              checked={inputData.payment.value}
              onChange={(event) => handleOnChange(event)}
            />
            {getPaymentInfo()}
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
        <div css={styles.items}>{getItems()}</div>
        <Button
          size="stretch"
          onClick={() => {
            setIsVisible(isValid());
          }}
        >
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
    padding: "8rem var(--side-spacing)",
    display: "flex",
    justifyContent: "space-between",
  }),
  checkout: css({
    maxWidth: "57.5%",
    padding: "2rem 3rem 3rem 3rem",
    backgroundColor: colors.white,
    borderRadius: radius.md,
    h3: {
      marginTop: "18px",
    },
  }),
  summary: css({
    width: "26%",
    backgroundColor: colors.white,
    padding: "2rem",
    borderRadius: radius.md,
    maxHeight: "35rem",
  }),
  items: css({
    overflowY: "auto",
    height: "80%",
  }),
  section: css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: "1.5rem",
    // background: "red"
  }),
  sectionTitle: css([
    subTitle,
    {
      color: "var(--color-primary)",
      opacity: "100%",
    },
  ]),
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
  deliveryText: css({
    display: "flex",
    columnGap: "var(--spacing-2)",
    alignItems: "center",
    p: {
      opacity: "50%",
    },
  }),
};
