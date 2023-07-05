import { ProductType } from "@/src/services/productService";
import style from "./style.module.scss";
import { Button, Container } from "reactstrap";
import SlideComponent from "../../common/slideComponent";
import Link from "next/link";

interface props {
  newestProducts: ProductType[];
}
const SlideSection = ({ newestProducts }: props) => {
  return (
    <>
      <Container className="d-flex flex-column ">
        <div className={style.sectionSlide}>
          <p className={style.sectionTitle}>Produtos recentes</p>
          <SlideComponent product={newestProducts} />
          <Link href="https://api.whatsapp.com/send?phone=5548984589424&text=Olá, gostaria de saber sobre alguns produtos.">
            <Button outline color="light" className={style.slideSectionBtn}>
              Comprar já
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default SlideSection;
