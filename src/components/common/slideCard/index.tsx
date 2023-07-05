import Link from "next/link";
import styles from "./style.module.scss";
import { ProductType } from "@/src/services/productService";

interface props {
  product: ProductType;
}

const SlideCard = ({ product }: props) => {
  return (
    <>
      <Link href={`/product/${product.id}`}>
        <div className={styles.slide}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASEURL}/${product.productImage}`}
            alt={product.name}
            className={styles.slideImg}
          />
        </div>
      </Link>
    </>
  );
};

export default SlideCard;
