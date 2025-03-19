import React from 'react';
import styles from '@/styles/Home.module.scss';

import Image from 'next/image';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { PiStudent } from 'react-icons/pi';

import { FaVideoSlash, FaUsersSlash } from 'react-icons/fa';
import { BsClipboardData } from 'react-icons/bs';

import { FaHeartPulse } from 'react-icons/fa6';


const Home: React.FC = () => {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div>
                    <h1>
                        Optimize your attendance-taking process seamlessly
                    </h1>

                    <p>
                        It's more than a simple attendance-taking app! Let your students mark themselves under our system's anti-cheat protocol and obtain insights on their attendance patterns.
                    </p>

                    <div className={styles.buttons}>
                        <button>
                            <FaChalkboardTeacher />
                            <span>Try it as Teacher</span>
                        </button>

                        <button>
                            <PiStudent />
                            <span>Login as Student</span>
                        </button>
                    </div>
                </div>

                <Image src={'/assets/educator.svg'} alt="The Image" width={500} height={500} />
            </section>

            <section className={styles.features}>
                <Image src={'/assets/wave.svg'} alt="Wave" width={1920} height={100} />

                <div className={styles.feat_container}>

                    <h2>What's in it for you?</h2>

                    <div className={styles.features_list}>

                        <div className={styles.feature}>
                            <FaUsersSlash />
                            <span>
                                Anti-cheat algorithms to prevent students from marking false-present attendances
                            </span>
                        </div>

                        <div className={styles.feature}>
                            <FaVideoSlash />
                            <span>
                                No hardware installation required to use this app - just your smartphones!
                            </span>
                        </div>

                        <div className={styles.feature}>
                            <BsClipboardData />
                            <span>
                                Get insights on your attendance patterns and optimize your time management
                            </span>
                        </div>

                        <div className={styles.feature}>
                            <FaHeartPulse />
                            <span>
                                Reliable & Easy-to-use interface for both teachers and students
                            </span>
                        </div>

                        <div className={styles.feature}>
                            <FaChalkboardTeacher />
                            <span>
                                Teachers can manage their classes and students with ease, all in one place
                            </span>
                        </div>

                        <div className={styles.feature}>    
                            <PiStudent />
                            <span>
                                Students can mark their attendance with a single tap through their smartphones
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.outro}>
                <h2>Ready to get started?</h2>

                <p>
                    Sign up now and start optimizing your attendance-taking process with our app!
                </p>

                <button>
                    Try it now!
                </button>
            </section>
        </main>
    )
}

export default Home;