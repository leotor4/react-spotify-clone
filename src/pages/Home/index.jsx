import React from 'react'
import styles from "./styles.module.scss"
import mainImg from "../../assets/img1.png"
import {MainButton} from '../../components/MainButton'
import { SecondaryButton } from '../../components/SecondaryButton/index';

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1>3 meses de Premium por R$ 0,00.</h1>
        <p>Começa hoje a ouvir música sem anúncios e offline grátis até 19 de dezembro de 2021. Cancela quando quiseres.</p>
        <section className={styles.buttonSection}>
          <MainButton title="GANHE 3 MESES GRÁTIS" />
          <SecondaryButton title="VER PLANOS" />
        </section>
        <div>
          <small>Após esse período, uma taxa de assinatura mensal será cobrada. Disponível apenas para usuários que nunca assinaram o Premium. A oferta não inclui os planos Família e Duo. Sujeito a Termos e Condições. Oferta válida até 28 de setembro de 2021.</small>
        </div>
      </div>
      <img src={mainImg} alt="" />
    </div>
  )
}
