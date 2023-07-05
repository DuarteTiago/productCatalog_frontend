import React, { FormEvent, useState } from "react";

import { Button, Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderNoAuth = () => {
  const router = useRouter();
  const [searchName, setSearchName] = useState("");
  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`searchNoAuth?name=${searchName}`);
    setSearchName("");
  };
  const handleSearchClick = async () => {
    router.push(`searchNoAuth?name=${searchName}`);
    setSearchName("");
  };

  return (
    <>
      <div className={styles.ctaSection}>
        <Container className={styles.nav}>
          <div className=" d-flex align-items-center">
            <Form onSubmit={handleSearch}>
              <Input
                name="searsh"
                placeholder="Pesquisar"
                className={styles.input}
                onChange={(event) => {
                  setSearchName(event.currentTarget.value.toLowerCase());
                }}
              />
            </Form>
            <img
              src="/iconSearch.png"
              alt="lupaHeader"
              className={styles.searchImg}
              onClick={handleSearchClick}
            />
          </div>
          <div>
            <Link href="/">
              <img
                src="/logoGrasi&Mary2.png"
                alt="logoCta"
                className={styles.imgLogoNav}
              />
            </Link>
          </div>

          <div>
            <Link href="/login">
              <Button className={styles.navBtn} outline>
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button className={styles.navBtn} outline>
                Cadastrar
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};
export default HeaderNoAuth;
