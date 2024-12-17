import { css } from "@emotion/react";
import Button from "../components/Button";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import {
  colors,
  subTitle,
  inputStyles,
  centerAlign,
  mediaQuery,
} from "../styles/CommonStyles";
import Footer from "../components/Footer";
import { useState } from "react";
import Overlay from "../components/Overlay";
import Confirmation from "../components/Confirmation";
import Spacer from "../components/Spacer";
import RadioButton from "../components/RadioButton";
import { paymentsData } from "../data/mock/mock";
import { inputCriteria } from "../data/constant";
import ItemWithQuantity from "../components/ItemWithQuantity";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

export default function Checkout() {
  const [isVisible, setIsVisible] = useState(false);
  const { items, bill, fetched } = useSelector((state) => state.cart);

  // const [payments, setPayments] = useState([]);
  const [inputData, setInputData] = useState({
    name: { value: "", error: "", type: "input" },
    email: { value: "", error: "", type: "input" },
    phoneNum: { value: "", error: "", type: "input" },
    address: { value: "", error: "", type: "input" },
    zipCode: { value: "", error: "", type: "input" },
    city: { value: "", error: "", type: "input" },
    country: { value: "", error: "", type: "input" },
    payment: { value: "eMoney", error: "", type: "radio" },
    ePin: { value: "", error: "", type: "input" },
    eNum: { value: "", error: "", type: "input" },
  });

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

  function handleOnChange(event) {
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
      <div css={styles.form}>
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
                handleOnChange(event);
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

  const getItems = () => {
    return (
      <>
        {items.map((item) => (
          <ItemWithQuantity item={item} key={item.name} />
        ))}
      </>
    );
  };

  const getBills = () => {
    return (
      <>
        <div css={styles.billRow}>
          <p css={styles.billText}>TOTAL</p>
          <p css={styles.billValue}>${bill.total.toLocaleString()}</p>
        </div>
        <div css={styles.billRow}>
          <p css={styles.billText}>SHIPPING</p>
          <p css={styles.billValue}>${bill.shipping.toLocaleString()}</p>
        </div>
        <div css={styles.billRow}>
          <p css={styles.billText}>VAT(INCLUDED)</p>
          <p css={styles.billValue}>${bill.vat.toLocaleString()}</p>
        </div>
        <Spacer value="1rem" />
        <div css={styles.billRow}>
          <p css={styles.billText}>GRAND TOTAL</p>
          <p css={[styles.billValue, styles.grandTotal]}>
            ${bill.grandTotal.toLocaleString()}
          </p>
        </div>
      </>
    );
  };

  const isValid = () => {
    const isErrorFree = Object.keys(inputData).every(
      (field) => inputData[field].error === ""
    );

    const isAllDataFilled = Object.keys(inputData).every(
      (field) =>
        (inputData[field].type === "input" && inputData[field].value !== "") ||
      inputData[field].type !== "input"
    );
    return isErrorFree && isAllDataFilled;
  };

  const getSummary = () => {
    return (
      <div css={styles.summaryContainer}>
        <div css={styles.summary}>
          <h6>SUMMARY</h6>
          <Spacer value="2rem" />
          <div css={styles.items}>{getItems()}</div>
          <Spacer value="1rem" />
          <div>{getBills()}</div>
          <Spacer value="2rem" />
          <Button
            size="stretch"
            onClick={() => {
              setIsVisible(isValid());
            }}
          >
            CONTINUE & PAY
          </Button>
          <Overlay
            open={isVisible}
            onClick={() => setIsVisible(!isVisible)}
            placement="top-center"
          >
            <Confirmation items={items} bill={bill} />
          </Overlay>
        </div>
      </div>
    );
  };

  if (fetched) {
    if (items.length > 0) {
      return (
        <div css={styles.container}>
          <NavBar />
          <div css={styles.checkout}>
            {getForm()}
            {getSummary()}
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <>
          <NavBar />
          <div css={styles.emptyCart}>
            <img
              alt="Empty Cart"
              src="/images/cart/empty-cart.png"
              css={styles.emptyCartImg}
            />
            <h6>No items to checkout. Your cart is empty</h6>
            <p css={subTitle}>
              Looks like you have not added anything to your cart. Go ahead &
              explore top categories.
            </p>
          </div>
        </>
      );
    }
  } else {
    return (
      <div css={styles.spinnerContainer}>
        <Spinner />
      </div>
    );
  }
}

const styles = {
  container: css({
    backgroundColor: "#F2F2F2",
  }),
  checkout: css({
    margin: "8rem var(--side-spacing)",
    display: "flex",
    justifyContent: "space-between",
    gap: "1.5rem",
    [mediaQuery["lg"]]: {
      flexWrap: "wrap",
    },
  }),
  form: css({
    maxWidth: "60.5%",
    padding: "2rem 3rem 3rem 3rem",
    backgroundColor: colors.white,
    borderRadius: "var(--radius-md)",
    h3: {
      marginTop: "18px",
    },
    [mediaQuery["lg"]]: {
      width: "100%",
      maxWidth: "100%",
    },
  }),
  summaryContainer: css({
    minWidth: "21rem",
    [mediaQuery["lg"]]: {
      width: "100%",
      minWidth: "100%",
    },
  }),
  summary: css({
    backgroundColor: colors.white,
    padding: "2rem",
    borderRadius: "var(--radius-md)",
    maxHeight: "35rem",
  }),
  items: css({
    overflowY: "auto",
    maxHeight: "16rem",
  }),
  section: css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "1.5rem",
  }),
  sectionTitle: css([
    subTitle,
    {
      color: "var(--color-primary)",
      opacity: "100%",
    },
  ]),
  billRow: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  billText: css({
    margin: "8px 0px 0px 0px",
    opacity: "50%",
  }),
  billValue: css([
    subTitle,
    {
      fontSize: "17px",
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
  grandTotal: css({
    color: "var(--color-primary)",
  }),
  spinnerContainer: css([
    centerAlign,
    {
      marginTop: "8rem",
      width: "100%",
    },
  ]),
  emptyCart: css({
    padding: "var(--spacing-2-5)",
    flexDirection: "column",
    boxSizing: "border-box",
    textAlign: "center",
  }),
  emptyCartImg: css({
    height: "auto",
    width: "25%",
  }),
};
