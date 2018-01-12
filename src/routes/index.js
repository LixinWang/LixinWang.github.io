import React from 'react';

import { GithubIcon, FacebookIcon } from '~/components/icons';
import cacheable from '~/components/cacheable';
import Anchor from '~/components/Anchor';

import styles from './index.less';

import avatar from 'public/assets/avatar.jpg';

const Img = cacheable(function img(props) {
    return <img {...props} />;
});

export default function Home() {
    return <section className={styles.home}>
        <header>
            <Anchor className={styles.avatar} href='https://github.com/LixinWang'>
                <Img src={avatar} loadedClass={styles.loaded} />
            </Anchor>
            <h1>Lixin Wang</h1>
        </header>
        <main>
            <h2>
                <Anchor href='https://www.cc.gatech.edu/'>
                    Computer Science
                </Anchor>
                <span> major at </span>
                <Anchor href='https://www.gatech.edu/'>
                    Georgia Institute of Technology
                </Anchor>
                <span>.</span>
            </h2>
        </main>
        <footer className={styles.icons}>
            <GithubIcon />
            <FacebookIcon />
        </footer>
    </section>;
}
