import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductHeroSection from "../components/ProductHeroSection";

import response from "../data/heaphones.json";
import SideBySideLayout from "../components/SideBySideLayout";
import SideBySideLayoutTextContent from "../components/SideBySideLayoutTextContent";
import { colors } from "../styles/CommonStyles";

export default function Headphones() {
  const [heaphones, setHeadphones] = useState([]);

  const getHeadphones = () => {
    return response;
  };

  useEffect(() => {
    setHeadphones(getHeadphones());
  }, []);

  const getContent = () => {
    if (heaphones.length === 0) {
      // TODO - Replace with loader
      return <div></div>;
    }

    return response.map((heaphone) => (
      <SideBySideLayout
        isImgLeft={heaphone.id % 2 === 0 ? false : true}
        id={heaphone.id}
        content={
          <SideBySideLayoutTextContent
            tag={heaphone.tag}
            title={<h2>{heaphone.title}</h2>}
            description={heaphone.description}
            buttonInfo={{
              text: "SEE PRODUCT",
              color: colors.white,
              bgColor: colors.orange,
            }}
          />
        }
        imgurl={heaphone.imgUrl}
        imgDimension={{ height: "560px", width: "538px" }}
      />
    ));
  };

  return (
    <>
      <Layout
        heroSection={ProductHeroSection}
        content={getContent()}
        product="HEADPHONES"
      />
    </>
  );
}
