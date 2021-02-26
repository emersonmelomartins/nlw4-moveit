import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css';

import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div className="">
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div className="">

        </div>
      </section>
    </div>
  );
}
