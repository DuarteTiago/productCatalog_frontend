import { Button, Card, CardBody, CardGroup, CardTitle } from "reactstrap";
import styles from "./styles.module.scss";
import { ProductType } from "@/src/services/productService";

import Link from "next/link";

interface props {
  product: ProductType;
}

const NewCard = ({ product }: props) => {
  return (
    <>
      <div>
        <CardGroup className={styles.cards}>
          <Card className={styles.card}>
            <Link href={`/product/${product.id}`}>
              <div>
                <img
                  src={`${process.env.NEXT_PUBLIC_BASEURL}/${product.productImage}`}
                  alt={product.name}
                  className={styles.imgCard}
                />
              </div>
            </Link>
            <CardBody>
              <CardTitle className={styles.cardTitle}>{product.name}</CardTitle>

              <p className={styles.cardPrice}>R$ {product.productPrice}</p>

              <div className={styles.interations}>
                <Link
                  href={`https://api.whatsapp.com/send?phone=5548984589424&text=Olá! Gostaria de saber mais sobre o produto (${product.name}) de código: ${product.productCode}`}
                >
                  <Button className={styles.cardBtn}>Comprar</Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default NewCard;
