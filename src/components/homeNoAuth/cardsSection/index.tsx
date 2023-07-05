import React from "react";

import styles from "./styles.module.scss";
import { Container } from "reactstrap";
import useSWR from "swr";
import productService, { ProductType } from "@/src/services/productService";
import NewCard from "../../common/card";
import PageSpinner from "../../common/spinner";

const CardsSection = () => {
  const { data, error } = useSWR("/products", productService.getAllProducts);

  if (error) return error;
  if (!data)
    return (
      <>
        <div>
          <PageSpinner />
        </div>
      </>
    );

  return (
    <>
      <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
        <div className={styles.cards}>
          {data.data?.map((product: ProductType) => (
            <div key={product.id}>
              <NewCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CardsSection;
