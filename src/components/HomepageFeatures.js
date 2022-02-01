import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '种类繁多',
    description: (
      <>
        “星の箱”为各位提供了很多服务，除了基础的下载站服务外，我们还准备了许许多多的小教程
      </>
    ),
  },
  {
    title: '快速下载',
    description: (
      <>
        本站的下载服务采用自建服务器，无需任何账号，只需轻轻一点，立刻拥有你所想要
      </>
    ),
  },
  {
    title: '拒绝付费',
    description: (
      <>
        本站所有内容如未标记都来自网络，所有权全部归原作者所有，我们不会进行任何形式的收费，只为最好的体验
      </>
    ),
  },
  {
    title: '还有许多正在制作的内容...',
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
