import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import logo from './assets/Logo.png'
import logoTextOne from './assets/Logo-text.png'
import carousel1 from './assets/Group10.png'
import carousel2 from './assets/Group8.png'
import carousel3 from './assets/Group10.png'
import carousel4 from './assets/Group8.png'
import footerLogo from './assets/FooterLogo.png'
import MountainsTabs from './tabs'
import MountainsAccordion from './accordion'

export default function Home() {
  const links = [
    {
      text: '01. HISTORY',
      link: '/#history'
    },
    {
      text: '02. TEAM',
      link: '/#team'
    },
  ]

  const imageList = [carousel1, carousel2, carousel3, carousel4]

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.top}>
          <header>
            <Image src={logo} alt='' width={50} height={50} />
            <nav>
              {links.map((item, index) => (
                <Link href={item.link} key={index}>{item.text}</Link>
              ))}
            </nav>
          </header>
          <div className={styles.container}>
            <h1>LOSANGELES</h1>
            <p>MOUNTAINS</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <Image src={logoTextOne} alt='' width={200} height={50} />
          <nav>
            {links.map((item, index) => (
              <Link href={item.link} key={index}>{item.text}</Link>
            ))}
          </nav>
        </div>
      </div>
      <div className={styles.history} id='history'>
        <div className={styles.text}>
          <div>
            <h2>01.</h2>
            <p>HISTORY</p>
          </div>
          <p className={styles.statement}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque amet aspernatur,
            officia nobis dolore. Amet blanditiis atque nihil, beatae quisquam perferendis reprehenderit
            accusamus consectetur quidem at? Culpa maxime corporis adipisci exercitationem ad ipsa ipsam.
            Maxime, totam minima! Tenetur culpa architecto eveniet temporibus, rerum suscipit vero atque.
          </p>
        </div>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselWeb}>
            {imageList.map((item, index) => (
              <Image src={item} alt={`carousel${index + 1}`} width={230} height={150} key={index} />
            ))}
          </div>
          <MountainsAccordion />
        </div>
      </div>
      <div className={styles.team} id='team'>
        <div className={styles.heading}>
          <div>
            <h2>02.</h2>
            <p>CLIMB</p>
          </div>
          <p className={styles.statement}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, cupiditate? Laborum placeat,
            rem corrupti exercitationem distinctio temporibus quibusdam voluptates quos doloribus doloremque.
          </p>
        </div>
        <MountainsTabs />
      </div>
      <footer>
        <Image src={footerLogo} alt='footer logo' width={200} height={50} />
        <p>COPYRIGHT 2016. ALL ROGHTS RESERVED.</p>
      </footer>
    </main>
  )
}
