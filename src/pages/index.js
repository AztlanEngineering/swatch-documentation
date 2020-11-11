import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import GitHubButton from 'react-github-btn'

const features = [
  {
    title      :<>Theme Components and Apps</>,
    imageUrl   :'img/color-palette.png',
    description:(
      <>
        Swatch provides you with more than 20 CSS4 color swatches to theme your components and apps. Each Swatch is composed by a main color, a lighter shade, a darker shade, and a contrast color for text. This mean more than 80 different colors at your disposal.
      </>
    ),
  },
  {
    title      :<>A modern pattern using CSS4 variables</>,
    imageUrl   :'img/project.png',
    description:(
      <>
        By applying the Setter/Getter pattern to CSS, Swatch allows you to theme in a minute any of your html blocks or components. Just write one CSS class per component. Say goodbye the prehistoric way of writing one CSS Class x every Color x Component. 
      </>
    ),
  },
  {
    title      :<>CSS Only / Framework Agnostic</>,
    imageUrl   :'img/file.png',
    description:(
      <>
        Swatch does not depend on any other library. While it is written in SCSS, its compiled CSS can be included as-is in any HTML or templating engine. Think bare-bones HTML, React, Vue, Angular, Django, Laravel, web components.
      </>
    ),
  },
  {
    title      :<>All your coloring needs in a 2.5KB gzip</>,
    imageUrl   :'img/chick.png',
    description:(
      <>
        2.5 KB of gzip code (15KB uncompressed) : this is the only code you will ever need to take care of theming and coloring in your apps.
      </>
    ),
  },
  {
    title      :<>Customizable colors, extendable themes</>,
    imageUrl   :'img/painting.png',
    description:(
      <>
        Your own custom color palette ? A custom solarized theme ? A custom theme for your white-label client ? All can be simply done by forking or making your own version of your library.
      </>
    ),
  },
  {
    title      :<>Relax and don't worry about theming anymore.</>,
    imageUrl   :'img/relaxing.png',
    description:(
      <>
        Maintainable, easy-to-read, code, a stable and efficient API. Nothing else to install and a library you can use in ANY of your web projects. Theming and coloring are finally made easy and efficient.
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
      title={`A code-efficient CSS4 Theming and Coloring Library`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle"><strong>{siteConfig.tagline}</strong></p>
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
          <p style={{ marginTop:'2em', fontWeight:'bold' }}>
        <a href="https://github.com/fwrlines/swatch" target='_blank'>See on Github</a>
      </p>
              {/*
            <div style={{ margin: '50px 60px' }}>
              <GitHubButton
                href="https://github.com/fwrlines/swatch"
                data-color-scheme="no-preference: light; light: light; dark: light;"
                data-show-count="true"
                data-size="large"
                aria-label="Star fwrlines/swatch on GitHub"
              >
Star
              </GitHubButton>
            </div>
              */}
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
      <div className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/introduction')}
            >
              Explore the library now
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
