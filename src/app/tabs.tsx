'use client'
import * as Tabs from '@radix-ui/react-tabs';
import styles from './page.module.scss'

interface MountainsTabsProps {

}

const MountainsTabs: React.FunctionComponent<MountainsTabsProps> = () => {
    return (
        <section>
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
        </section>
    );
}

export default MountainsTabs;