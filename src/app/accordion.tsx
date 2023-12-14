'use client'

import styles from './page.module.scss'
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import carousel1 from './assets/Group10.png'
import carousel2 from './assets/Group8.png'
import carousel3 from './assets/Group10.png'
import carousel4 from './assets/Group8.png'

interface MountainsAccordionProps {

}

const MountainsAccordion: React.FunctionComponent<MountainsAccordionProps> = () => {

    const imageList = [carousel1, carousel2, carousel3, carousel4]

    return (
        <div className={styles.carouselMobile}>
            <Accordion.Root className={styles.AccordionRoot} type="single" collapsible>
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
    );
}

export default MountainsAccordion;