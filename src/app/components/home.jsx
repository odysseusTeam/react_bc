import React from 'react';
import {History} from 'react-router';
import HomeFeature from './home-feature';
import FullWidthSection from './full-width-section';

import RaisedButton from 'material-ui/lib/raised-button';
import {StylePropable, StyleResizable} from 'material-ui/lib/mixins';
import {Colors, Spacing, Typography, lightBaseTheme} from 'material-ui/lib/styles';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'
import Loading from './loading'
const HomePage = React.createClass({
  mixins: [
    StylePropable,
    StyleResizable,
    History,
  ],

  _getHomePageHero() {
    let styles = {
      root: {
        backgroundColor: Colors.cyan500,
        overflow: 'hidden',
      },
      svgLogo: {
        marginLeft: window.innerWidth * 0.5 - 114,
        width: 150,
        height: 150,
      },
      tagline: {
        margin: '16px auto 0 auto',
        textAlign: 'center',
        maxWidth: 575,
      },
      label: {
        color: lightBaseTheme.palette.primary1Color,
      },
      githubStyle: {
        margin: '16px 32px 0px 8px',
      },
      demoStyle: {
        margin: '16px 32px 0px 32px',
      },
      h1: {
        color: Colors.darkWhite,
        fontWeight: Typography.fontWeightLight,
      },
      h2: {
        fontSize: 20,
        lineHeight: '28px',
        paddingTop: 19,
        marginBottom: 13,
        letterSpacing: 0,
      },
      nowrap: {
        whiteSpace: 'nowrap',
      },
      taglineWhenLarge: {
        marginTop: 32,
      },
      h1WhenLarge: {
        fontSize: 56,
      },
      h2WhenLarge: {
        fontSize: 24,
        lineHeight: '32px',
        paddingTop: 16,
        marginBottom: 12,
      },
    };

    styles.h2 = this.mergeStyles(styles.h1, styles.h2);

    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.tagline = this.mergeStyles(styles.tagline, styles.taglineWhenLarge);
      styles.h1 = this.mergeStyles(styles.h1, styles.h1WhenLarge);
      styles.h2 = this.mergeStyles(styles.h2, styles.h2WhenLarge);
    }

    return (
      <FullWidthSection style={styles.root}>
        <img style={styles.svgLogo} src="images/logo.png" />
        <div style={styles.tagline}>
          <h1 style={styles.h1}>Spring Blog</h1>
          <h2 style={styles.h2}>
            <br/>

       <br/><br/><span style={{color:"#f48fb1",fontWeight:"normal"}}></span>
          </h2>

          <Link to="login">
            <RaisedButton label="GO!" primary={true} />
</Link>

        </div>
      </FullWidthSection>
    );
  },
  componentDidMount() {
    <Loading title="Wait a second. Preparing Password Verification!" />



  },
  _getHomePurpose() {
    const styles = {
      root: {
        backgroundColor: Colors.grey200,
      },
      content: {
        maxWidth: 700,
        padding: 0,
        margin: '0 auto',
        fontWeight: Typography.fontWeightLight,
        fontSize: 20,
        lineHeight: '28px',
        paddingTop: 19,
        marginBottom: 13,
        letterSpacing: 0,
        color: Typography.textDarkBlack,
      },
    };

    return (
      <FullWidthSection
        style={styles.root}
        useContent={true}
        contentStyle={styles.content}
        contentType="p"
        className="home-purpose"
      >

      </FullWidthSection>
    );
  },

  _getHomeFeatures() {
    const styles = {maxWidth: 906};

    return (
      <FullWidthSection useContent={true} contentStyle={styles}>
        <HomeFeature
          heading="进入主页"
          route="/pages/about"
          img="images/get-started.svg"
          firstChild={true}
        />
        <HomeFeature
          heading="联系我们"
          route="/posts"
          img="images/css-framework.svg"
        />
        <HomeFeature
          heading="关于我们"
          route="/pages/"
          img="images/components.svg"
          lastChild={true}
        />
      </FullWidthSection>
    );
  },

  _getHomeContribute() {
    const styles = {
      root: {
        backgroundColor: Colors.grey200,
        textAlign: 'center',
      },
      h3: {
        margin: 0,
        padding: 0,
        fontWeight: Typography.fontWeightLight,
        fontSize: 22,
      },
      button: {
        marginTop: 32,
      },
    };

    return (
      <FullWidthSection useContent={true} style={styles.root}>
        <h3 style={styles.h3}>
          Want to help make this <span style={styles.nowrap}>project awesome? </span>
          <span style={styles.nowrap}>Check out our repo.</span>
        </h3>
        <RaisedButton
          label="GitHub"
          primary={true}
          linkButton={true}
          href="https://github.com/callemall/material-ui"
          style={styles.button}
        />
      </FullWidthSection>
    );
  },



  render() {
    const style = {
      paddingTop: Spacing.desktopKeylineIncrement,
    };

    return (
      <div style={style}>
        {this._getHomePageHero()}
        {this._getHomeFeatures()}
      </div>
    );
  },

});

export default HomePage;
