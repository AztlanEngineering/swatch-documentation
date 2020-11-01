import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title      :<>Highly customizable</>,
    imageUrl   :'img/customizable-logo.svg',
    description:(
      <>
	      Swatch is a highly customizable css color library and is a free and open source project created using Sass.
      </>
    ),
  },
  {
    title      :<>Great advantages</>,
    imageUrl   :'img/undraw_docusaurus_tree.svg',
    description:(
      <>
	      The most important thing you need to know about Color-swatch is that it uses the getter/setter mutation design pattern. if you don't know the mutator pattern don't worry we will cover it.
      </>
    ),
  },
  {
    title      :<>Easy to install</>,
    imageUrl   :'img/undraw_docusaurus_react.svg',
    description:(
      <>
	      There is a small 4 step installation instruction to doand then you have the Color-swatch ready for use.
      </>
    ),
  },
]

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={styles.featureImage}
            src={imgUrl}
            alt={title}
          />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const {siteConfig = {}} = context
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/introduction')}
            >
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
                  <Feature
                    key={idx}
                    {...props}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
