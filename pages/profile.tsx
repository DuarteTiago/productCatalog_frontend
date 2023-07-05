import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/src/components/profile/user";
import HeaderAuth from "@/src/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/src/components/common/footer";
import { useEffect, useState } from "react";
import PasswordForm from "@/src/components/profile/password";
import { useRouter } from "next/router";
import PageSpinner from "@/src/components/common/spinner";

const UserInfo = () => {
  const [form, setForm] = useState("userForm");
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("G&M-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <PageSpinner />;
  }
  return (
    <>
      <Head>
        <title>G&M - Meus dados</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderAuth />
        <Container className={styles.gridContainer}>
          <p className={styles.title}>Minha Conta</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>
              <Button
                className={styles.renderForm}
                onClick={() => {
                  setForm("userForm");
                }}
              >
                DADOS PESSOAIS
              </Button>
              <Button
                className={styles.renderForm}
                onClick={() => {
                  setForm("passwordForm");
                }}
              >
                SENHA
              </Button>
            </Col>
            <Col md>
              {form === "userForm" ? <UserForm /> : <PasswordForm />}
            </Col>
          </Row>
        </Container>
        <Footer />
      </main>
    </>
  );
};
export default UserInfo;
