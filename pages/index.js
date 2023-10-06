import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Image from 'next/image';
import Carousel from '../components/carousel';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className={styles.intro} id='home'>
            <div className={styles['intro-section1']}>
              <div className={styles['intro-img']}>
                <Image
                  src="/images/default-profile.jpg" // Route of the image file
                  height={450} // Desired size with correct aspect ratio
                  width={450} // Desired size with correct aspect ratio
                  alt="Default Profile"
                  className={styles['profile-img']}
                />
              </div>
              <div className={styles['intro-txt']}>
                <h3>Name</h3>
                <h5>Lorem ipsum dolor sit </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis luctus nibh, non ultrices diam tempus ut. Suspendisse tempus eget nulla non efficitur. Ut bibendum augue ipsum, eget pellentesque tellus auctor non.</p>
              </div>
            </div>
            <div className={styles['intro-section2']}>
              <div className={styles['section2-item']}>
                <h3>1</h3>
                <p>Years <b>Experience</b></p>
              </div>
              <div className={styles['section2-item']}>
                <h3>2</h3>
                <p>Satisfied <b>Clients</b></p>
              </div>
              <div className={styles['section2-item']}>
                <h3>3</h3>
                <p>Completed <b>Projects</b></p>
              </div>
              <div className={styles['section2-item']}>
                <h3>4</h3>
                <p>On Going <b>Projects</b></p>
              </div>

            </div>

          </div>

          <div className={styles.portofolio}>
            <h3>Portofolio</h3>
            <Carousel/>
          </div>

          <div className={styles.experience}>
            <h3>Experience</h3>
            <div className={styles['exp-items']}>
              <div className={styles['exp-item']}>
                <Image
                  src="/images/default-image.jpg" // Route of the image file
                  height={300} // Desired size with correct aspect ratio
                  width={300} // Desired size with correct aspect ratio
                  alt="Default Image"
                  className={styles['exp-img']}
                />
                <p>Default Image</p>
              </div>
              <div className={styles['exp-item']}>
                <Image
                  src="/images/default-image.jpg" // Route of the image file
                  height={300} // Desired size with correct aspect ratio
                  width={300} // Desired size with correct aspect ratio
                  alt="Default Image"
                  className={styles['exp-img']}
                />
                <p>Default Image</p>
              </div>
              <div className={styles['exp-item']}>
                <Image
                  src="/images/default-image.jpg" // Route of the image file
                  height={300} // Desired size with correct aspect ratio
                  width={300} // Desired size with correct aspect ratio
                  alt="Default Image"
                  className={styles['exp-img']}
                />
                <p>Default Image</p>
              </div>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles["contact-txt"]}>
              <h3>Thats All About me, Feel free to say hi!</h3>
              <h4>name@mail.com</h4>
              <h4>+62 12345678</h4>
            </div>
            <div className={styles["contact-img"]}>
              <Image
                  src="/images/default-profile.jpg" // Route of the image file
                  height={450} // Desired size with correct aspect ratio
                  width={450} // Desired size with correct aspect ratio
                  alt="Default Profile"
                  className={styles['profile-img']}
                />
                <h4>www.name.com</h4>
            </div>
          </div>
          {/* <h1 className={styles.title}>
            Learn <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing <code>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div> */}
        </main>

        {/* <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
          </a>
        </footer> */}
      </Layout>
      </>
  );
}
