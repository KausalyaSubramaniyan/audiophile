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
  const [productAdditionalInfo, setProductAdditionalInfo] = useState({});

  const [addItem] = useAddItemMutation();
  const [updateQuantity] = useUpdateQuantityMutation();
  const [removeItem] = useRemoveItemMutation();
  const { refetch } = useGetCartQuery();

  const items = useSelector((state) => state.cart.items);
  const getItemQuantity = () => {
    return items.find((item) => item.name === productAdditionalInfo.name)?.quantity ?? 0;
  };
  const [quantity, setQuantity] = useState(getItemQuantity());
  const [action, setAction] = useState("");

  const increment = () => {
    const itemQuantityInCart = getItemQuantity();
    if (itemQuantityInCart === 0) {
      setAction("ADD");
    } else {
      setAction("UPDATE");
    }
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    const itemQuantityInCart = getItemQuantity();
    if (itemQuantityInCart - 1 === 0) {
      setAction("DELETE");
    } else {
      setAction("UPDATE");
    }
    setQuantity(quantity - 1);
  };

  const getProductAdditionalInfo = () => {
    setProductAdditionalInfo(productDetailsData(product.id));
  };

  useEffect(() => {
    getProductAdditionalInfo();
  }, [product]);

  useEffect(() => {
    setQuantity(getItemQuantity());
  }, [items, productAdditionalInfo]);

  const getFeatures = () => {
    return (
      <div css={styles.features}>
        <h3>FEATURES</h3>
        <p css={styles.aboutText}>{productAdditionalInfo.features}</p>
      </div>
    );
  };

  const getBox = () => {
    return (
      <div css={styles.box}>
        <h3>IN THE BOX</h3>
        <ul>
          {productAdditionalInfo.inTheBox.map((i) => (
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
      id: productAdditionalInfo.id,
      name: productAdditionalInfo.name,
      amount: productAdditionalInfo.amount,
      currSymbol: productAdditionalInfo.currencySymbol,
      quantity: quantity,
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
                  {productAdditionalInfo && Object.keys(productAdditionalInfo).length > 0 && (
                    <>
                      <Spacer value="2rem" />
                      <h6>
                        {productAdditionalInfo.currencySymbol} {productAdditionalInfo.amount.toLocaleString()}
                      </h6>
                      <Spacer value="3rem" />
                    </>
                  )}
                  <div css={styles.btnContainer}>
                    <div css={styles.counterContainer}>
                      <Counter
                        count={quantity}
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
        {productAdditionalInfo && Object.keys(productAdditionalInfo).length > 0 && (
          <div>
            <Spacer value="7rem" />
            <div css={styles.about}>
              {getFeatures()}
              {getBox()}
            </div>
            <Spacer value="7rem" />
            <Gallery imgs={productAdditionalInfo.gallery} />
            <Recommendations products={productAdditionalInfo.recommendations} />
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
    [mediaQuery["md"]]: {
      display: "flex",
      flexDirection: "column",
      // flexWrap: "wrap",
    },
  }),
  features: css({
    display: "flex",
    width: "55%",
    flexDirection: "column",
    [mediaQuery["md"]]: {
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
    [mediaQuery["md"]]: {
      width: "100%",
      flexDirection: "row",
      columnGap: "25%",
    },
    [mediaQuery["sm"]]: {
      width: "100%",
      flexDirection: "column",
    },
  }),
  textHighlight: css({
    color: colors.orange,
    marginRight: "2rem",
  }),
};
