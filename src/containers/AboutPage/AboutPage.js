import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About The Long Way',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Launch your web app or website with confidence.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Did you know that the Long Way offers the community expert development services at regular people pricing- all while serving the common good?</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                We are growing network of experts in the digital realm, banding together to
                offer cutting edge services in the time-tested cooperative model. 
              </h2>

              <p>
                To experience the quality and dependibility of Finnnish craftwork join the Long Way
                now!
              </p>

              <h3 className={css.subtitle}>Are you a developer?</h3>

              <p>
                The Long Way offers you a good way to earn some extra cash! If you're tired of slaving
                away building cookie cutter sites at your day job, why not bring your side hustles to
                the Long Way? We offer a strong platform to build those products whose value is 
                oimperceptible to the greedy, myopic gaze of most venture capitalists. Just because
                coperative development is more meaningful and fulfilling doesn't mean it can't be
                financially rewarding. Check out our missions and products pages for more info on how
                to make those wistful start-up dreams a flourishing reality through cooperative work.
              </p>

              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
