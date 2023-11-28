import React, { useState, useEffect } from "react";
import { productsData } from "@/assets/data/productsData";

const Products: React.FunctionComponent<{}> = () => {
  const [initialProductsType, setInitialProductsType] = useState<any>(
    "Saving And Investment"
  );
  const [initialProductsData, setInitialProductsData] = useState<any>();

  const getProductsData = (type: any) => {
    const productData: any = productsData.filter(
      (item: any, index: number) => item.productType === type
    );
    setInitialProductsData(productData);
  };

  useEffect(() => {
    getProductsData(initialProductsType);
  }, []);

  return (
    <>
      {initialProductsData &&
        initialProductsData.map((item: any, index: number) => {
          return (
            <div key={index}>
              <p>{item.heroDesc}</p>
            </div>
          );
        })}
    </>
  );
};

export default Products;
