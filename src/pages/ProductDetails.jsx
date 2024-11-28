import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import SideBySideLayout from "../components/SideBySideLayout";
import SideBySideLayoutTextContent from "../components/SideBySideLayoutTextContent";
import { colors, mediaQuery } from "../styles/CommonStyles";
import { productDetailsData } from "../data/mock/mock";
import Recommendations from "../components/Recommendations";
import ProductCards from "../components/ProductCards";
import Gallery from "../components/Gallery";
import Counter from "../components/Counter";
import Button from "../components/Button";
import Spacer from "../components/Spacer";
import {
  useAddItemMutation,
  useGetCartQuery,
  useRemoveItemMutation,
  useUpdateQuantityMutation,
} from "../data/services/CartApi";
import { useSelector } from "react-redux";

export default function ProductDetails() {
  // TODO - Will lose state on page refresh
  const { product } = useLocation().state;
  const [productInfo, setProductInfo] = useState({});

  const [addItem] = useAddItemMutation();
  const [updateQuantity] = useUpdateQuantityMutation();
  const [removeItem] = useRemoveItemMutation();

  const { refetch } = useGetCartQuery();

  const items = useSelector((state) => state.cart.items);
  const getItemCount = () => {
    return items.find((item) => item.name === productInfo.name)?.quantity ?? 0;
  };
  const [count, setCount] = useState(getItemCount());
  const [action, setAction] = useState("");

  const increment = () => {
    const itemCountInCart = getItemCount();
    if (itemCountInCart === 0) {
      setAction("ADD");
    } else {
      setAction("UPDATE");
    }
    setCount(count + 1);
  };

  const decrement = () => {
    const itemCountInCart = getItemCount();
    if (itemCountInCart - 1 === 0) {
      setAction("DELETE");
    } else {
      setAction("UPDATE");
    }
    setCount(count - 1);
  };

  const getProductInfo = () => {
    setProductInfo(productDetailsData(product.id));
  };

  useEffect(() => {
    getProductInfo();
  }, [product]);

  // TODO - See if productInfo is needed after consolidating product
  // and productInfo in single call
  useEffect(() => {
    setCount(getItemCount());
  }, [items, productInfo]);

  const getFeatures = () => {
    return (
      <div css={styles.features}>
        <h3>FEATURES</h3>
        <p css={styles.aboutText}>{productInfo.features}</p>
      </div>
    );
  };

  const getBox = () => {
    return (
      <div css={styles.box}>
        <h3>IN THE BOX</h3>
        <ul>
          {productInfo.inTheBox.map((i) => (
            <ol key={i.item}>
              <span css={styles.textHighlight}>{i.quantity}</span>
              <span css={styles.aboutText}>{i.item}</span>
            </ol>
          ))}
        </ul>
      </div>
    );
  };

  const addToCart = async () => {
    const payload = {
      id: productInfo.id,
      name: productInfo.name,
      amount: productInfo.amount,
      currSymbol: productInfo.currencySymbol,
      quantity: count,
      imgUrl: product.imgUrls.mobile,
    };
    if (action === "ADD") {
      await addItem(payload);
    } else if (action === "UPDATE") {
      await updateQuantity(payload);
    } else if (action === "DELETE") {
      await removeItem(payload);
    }
    refetch();
  };

  const getContent = () => {
    return (
      <div>
        <Spacer value="5rem" />
        <p>Go Back</p>
        <Spacer value="3rem" />
        <SideBySideLayout
          isImgLeft={true}
          content={
            <SideBySideLayoutTextContent
              title={<h2>{product.title}</h2>}
              tag={product.tag}
              description={product.description}
              children={
                <div css={styles.productSummary}>
                  {productInfo && Object.keys(productInfo).length > 0 && (
                    <>
                      <Spacer value="2rem" />
                      <h6>
                        {productInfo.currencySymbol} {productInfo.amount}
                      </h6>
                      <Spacer value="3rem" />
                    </>
                  )}
                  <div css={styles.btnContainer}>
                    <div css={styles.counterContainer}>
                      <Counter
                        count={count}
                        increment={increment}
                        decrement={decrement}
                      />
                    </div>

                    <Button onClick={() => addToCart()}>ADD TO CART</Button>
                  </div>
                </div>
              }
            />
          }
          imgUrls={product.imgUrls}
          imgDimension={{ height: "560px", width: "538px" }}
        ></SideBySideLayout>
        {productInfo && Object.keys(productInfo).length > 0 && (
          <div>
            <Spacer value="7rem" />
            <div css={styles.about}>
              {getFeatures()}
              {getBox()}
            </div>
            <Spacer value="7rem" />
            <Gallery imgs={productInfo.gallery} />
            <Recommendations products={productInfo.recommendations} />
            <Spacer value="5rem" />
          </div>
        )}
        <ProductCards />
      </div>
    );
  };

  return (
    <>
      <Layout heroSection={<NavBar />} content={getContent()} />
    </>
  );
}

const styles = {
  counter: css({
    display: "flex",
    width: "140px",
    height: "50px",
    background: colors.grey,
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: "1rem",
    button: {
      border: "none",
      color: colors.black,
      opacity: "25%",
      "&:hover": {
        cursor: "pointer",
      },
    },
  }),
  productSummary: css({
    width: "100%",
    textAlign: "left",
  }),
  counterContainer: css({
    width: "8rem",
  }),
  btnContainer: css({
    display: "flex",
    columnGap: "1rem",
    height: "3.25rem",
  }),
  about: css({
    display: "flex",
    justifyContent: "space-between",
    [mediaQuery[1]]: {
      display: "flex",
      flexDirection: "column",
      // flexWrap: "wrap",
    },
  }),
  features: css({
    display: "flex",
    width: "55%",
    flexDirection: "column",
    [mediaQuery[1]]: {
      width: "100%",
    },
  }),
  aboutText: css({
    opacity: "50%",
    whiteSpace: "pre-line",
  }),
  box: css({
    display: "flex",
    width: "35%",
    flexDirection: "column",
    ul: { padding: "0" },
    ol: { padding: "0rem 0rem 0.2rem 0rem" },
    [mediaQuery[1]]: {
      width: "100%",
      flexDirection: "row",
      columnGap: "25%",
    },
    [mediaQuery[0]]: {
      width: "100%",
      flexDirection: "column",
    },
  }),
  textHighlight: css({
    color: colors.orange,
    marginRight: "2rem",
  }),
};
