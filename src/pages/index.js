import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to understand</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
	      Alphabet-SCSS is a CSS library which is a combination of SASS and CSS4 and helps you to design your UI easier and a lot faster with very little effort
      </>
    ),
  },
  {
    title: <>The main advantage of Alphabet-SCSS</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
	      The most important thing you need to know about Alphabet-SCSS is that it uses the getter/setter mutation design pattern. if you are already familiar with the concept then you are good to go.
      </>
    ),
  },
  {
    title: <>Installation</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
	      1) Install SASS
	      2) clone Alphabet-SCSS
	      3) SASS the main.scss to main.css
	      4) enjoy the Alphabet-SCSS library
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
