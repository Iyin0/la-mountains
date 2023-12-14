'use client'

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
import * as Tabs from '@radix-ui/react-tabs';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

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
          <div className={styles.carouselMobile}>
            <Accordion.Root className={styles.AccordionRoot} type="single" defaultValue="item-1" collapsible>
              <Accordion.Item className={styles.AccordionItem} value="item-1">
                <Accordion.Header className={styles.AccordionHeader}>
                  <Accordion.Trigger className={styles.AccordionTrigger}>
                    View Images
                    <ChevronDownIcon className={styles.AccordionChevron} />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={styles.AccordionContent}>
                  <div>
                    {imageList.map((item, index) => (
                      <Image src={item} alt={`carousel${index + 1}`} width={230} height={150} key={index} />
                    ))}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
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
        <Tabs.Root className={styles.TabsRoots} defaultValue='tab1'>
          <Tabs.List className={styles.TabsList}>
            <div className={styles.TabsTriggerContainer}>
              <Tabs.Trigger className={styles.TabsTrigger} value='tab1'>
                MOUNTAIN 1
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.TabsTrigger} value='tab2'>
                MOUNTAIN 2
              </Tabs.Trigger>
            </div>
            <div></div>
          </Tabs.List>
          <Tabs.Content className={`${styles.TabsContent} ${styles.TabOne}`} value='tab1'>
            <div className={styles.TabContainer}>
              <div className={styles.scheduleContainer}>
                <div className={styles.schedule}>
                  <h3>SCHEDULE</h3>
                  <ul>
                    <li>
                      <p>25 Nov 2016</p>
                      <p>Vestibulum viverr</p>
                    </li>
                    <li>
                      <p>28 Nov 2016</p>
                      <p>Vestibulum viverr</p>
                    </li>
                    <li>
                      <p>18 Dec 2016</p>
                      <p>Vestibulum viverr</p>
                    </li>
                    <li>
                      <p>7 Jan 2017</p>
                      <p>Vestibulum viverr</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content className={`${styles.TabsContent} ${styles.TabTwo}`} value='tab2'>
            <div className={styles.TabContainer}>
              <div className={styles.scheduleContainer}>
                <div className={styles.schedule}>
                  <h3>SCHEDULE</h3>
                  <ul>
                    <li>
                      <p>17 Nov 2016</p>
                      <p>Vestibulum viverr</p>
                    </li>
                    <li>
                      <p>13 Dec 2016</p>
                      <p>Vestibulum viverr</p>
                    </li>
                    <li>
                      <p>28 Dec 2016</p>
                      <p>Vestibulum viverr</p>
                    </li>
                    <li>
                      <p>9 Feb 2017</p>
                      <p>Vestibulum viverr</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
      <footer>
        <Image src={footerLogo} alt='footer logo' width={200} height={50} />
        <p>COPYRIGHT 2016. ALL ROGHTS RESERVED.</p>
      </footer>
    </main>
  )
}
