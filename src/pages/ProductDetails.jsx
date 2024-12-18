import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import ParallelLayout from "../components/ParallelLayout";
import ParallelLayoutTextContent from "../components/ParallelLayoutTextContent";
import { centerAlign, colors, mediaQuery } from "../styles/CommonStyles";
import Recommendations from "../components/Recommendations";
import ProductCards from "../components/ProductCards";
import Gallery from "../components/Gallery";
import Counter from "../components/Counter";
import Button from "../components/core/Button";
import Spacer from "../components/core/Spacer";
import Spinner from "../components/core/Spinner";
import {
  useAddItemMutation,
  useGetCartQuery,
  useRemoveItemMutation,
  useUpdateQuantityMutation,
} from "../data/services/CartApi";
import { useSelector } from "react-redux";
import { useGetProductByIdQuery } from "../data/services/ProductApi";

export default function ProductDetails() {
  const navigate = useNavigate();

  const { productCategory, id } = useParams();
  const { isLoading, data: product } = useGetProductByIdQuery({
    category: productCategory,
    id: id,
  });

  const [addItem] = useAddItemMutation();
  const [updateQuantity] = useUpdateQuantityMutation();
  const [removeItem] = useRemoveItemMutation();
  const { refetch } = useGetCartQuery();

  const items = useSelector((state) => state.cart.items);
  const getItemQuantity = () => {
    if (!product) {
      return 0;
    }
    return items.find((item) => item.name === product.name)?.quantity ?? 0;
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

  useEffect(() => {
    setQuantity(getItemQuantity());
  }, [items, product]);

  const getFeatures = () => {
    return (
      <div css={styles.features}>
        <h3>FEATURES</h3>
        <p css={styles.aboutText}>{product.features}</p>
      </div>
    );
  };

  const getBox = () => {
    return (
      <div css={styles.box}>
        <h3>IN THE BOX</h3>
        <ul>
          {product.inTheBox.map((i) => (
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
      id: product.id,
      name: product.name,
      amount: product.amount,
      currSymbol: product.currencySymbol,
      imgUrl: product.imgUrls.mobile,
      quantity,
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

  const goBack = () => {
    navigate(-1);
  };

  const getContent = () => {
    return (
      <div>
        <Spacer value="5rem" />
        <Button
          variant="ghost"
          onClick={() => goBack()}
          css={styles.backButton}
        >
          Go Back
        </Button>
        <Spacer value="3rem" />
        {product && Object.keys(product).length > 0 && (
          <>
            <ParallelLayout
              isImgLeft={true}
              isTabletVertical={true}
              content={
                <ParallelLayoutTextContent
                  title={<h2>{product.title}</h2>}
                  tag={product.tag}
                  description={product.description}
                  isTabletVertical={true}
                  children={
                    <div css={styles.children}>
                      <Spacer value="2rem" />
                      <h6>
                        {product.currencySymbol}{" "}
                        {product.amount.toLocaleString()}
                      </h6>
                      <Spacer value="3rem" />
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
            ></ParallelLayout>
            <Spacer value="7rem" />
            <div css={styles.about}>
              {getFeatures()}
              {getBox()}
            </div>
            <Spacer value="7rem" />
            <Gallery imgs={product.gallery} />
            <Recommendations products={product.recommendations} />
            <Spacer value="5rem" />
          </>
        )}
        {isLoading && (
          <div css={centerAlign}>
            <Spinner />
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
  children: css({
    width: "100%",
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
  backButton: css({
    opacity: "50%",
    "&:hover": {
      opacity: "100%",
      color: "var(--color-primary)",
    },
  }),
};
