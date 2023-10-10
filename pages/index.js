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
          <title>Template 1 Porto</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;900&display=swap" rel="stylesheet"/  >
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
        </main>
      </Layout>
    </>
  )
}
