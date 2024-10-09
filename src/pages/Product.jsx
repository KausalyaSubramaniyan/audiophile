import { useEffect, useState } from "react";
import { productData } from "../data/constants";

import Layout from "../components/Layout";
import ProductCards from "../components/ProductCards";
import ProductHeroSection from "../components/ProductHeroSection";
import SideBySideLayout from "../components/SideBySideLayout";
import SideBySideLayoutTextContent from "../components/SideBySideLayoutTextContent";
import { colors } from "../styles/CommonStyles";

export default function Product({ name }) {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    setProducts(productData(name));
  };

  useEffect(() => {
    getProducts();
  }, [window.location.pathname]);

  // TODO - See whether product should be sent instead of individual props
  const getContent = () => {
    return products.map((product) => (
      <SideBySideLayout
        isImgLeft={product.id % 2 === 0 ? false : true}
        key={product.id}
        content={
          <SideBySideLayoutTextContent
            title={<h2>{product.title}</h2>}
            product={product}
            buttonInfo={{
              text: "SEE PRODUCT",
              color: colors.white,
              bgColor: colors.orange,
              productUrl: `/product/${name.toLowerCase()}/${product.id}`,
            }}
          />
        }
        imgurl={product.imgUrl}
        imgDimension={{ height: "560px", width: "538px" }}
      />
    ));
  };

  return (
    <>
      <Layout
        heroSection={<ProductHeroSection product={name} />}
        content={
          <>
            {getContent()}
            <ProductCards />
          </>
        }
      />
    </>
  );
}
