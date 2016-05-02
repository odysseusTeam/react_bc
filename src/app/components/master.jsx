import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import {Spacing} from 'material-ui/lib/styles';
import FlatButton from 'material-ui/lib/flat-button';
import LinearProgress from 'material-ui/lib/linear-progress';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import Badge from 'material-ui/lib/badge';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory,IndexRoute , Lifecycle, RouteContext } from 'react-router'
import {
  StylePropable,
  StyleResizable,
} from 'material-ui/lib/mixins';
import Loading from './loading'
import {
  Colors,
  getMuiTheme,
} from 'material-ui/lib/styles';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import AppLeftNav from './app-left-nav';
import FullWidthSection from './full-width-section';

const githubButton = (
  <IconButton
    iconClassName="muidocs-icon-custom-github"
    href="https://github.com/RoyTimes"
    linkButton={true}
  />
);

const Master = React.createClass({

  propTypes: {
    children: React.PropTypes.node,
    history: React.PropTypes.object,
    location: React.PropTypes.object,
  },
  routerWillLeave(nextLocation){

  },
  componentDidMount() {
        this.timer = setTimeout(() => this.progress(50), 1000);
      },

      componentWillUnmount() {
        clearTimeout(this.timer);
      },

      progress(completed) {
        if (completed > 100) {
          this.setState({completed: 100});
        } else {
          this.setState({completed});
          const diff = Math.random() * 10;
          this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
      },



  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  mixins: [
    StylePropable,
    StyleResizable,
  ],

  getInitialState() {
    return {
      muiTheme: getMuiTheme(),
      leftNavOpen: false,
      completed: 0,



    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    this.setState({
      muiTheme: this.state.muiTheme,

    });

  },

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme,
    });
  },

  getStyles() {
    const darkWhite = Colors.darkWhite;

    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
      },
      LinearProgress:{
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top:64,

      },
      root: {
        paddingTop: Spacing.desktopKeylineIncrement,




      },
      content: {
        margin: Spacing.desktopGutter,
        minHeight:'500px',
      },
      contentWhenMedium: {
        margin: `${Spacing.desktopGutter * 2 }px ${Spacing.desktopGutter * 3}px`,
      },
      footer: {
        backgroundColor: Colors.grey900,
        textAlign: 'center',
        marginBottom:'0px',
      },
      a: {
        color: darkWhite,
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: Colors.lightWhite,
        maxWidth: 335,
      },
      iconButton: {
        color: darkWhite,
      },
    };

    if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM) ||
        this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.content = this.mergeStyles(styles.content, styles.contentWhenMedium);
    }

    return styles;
  },

  handleTouchTapLeftIconButton() {
    this.setState({
      leftNavOpen: !this.state.leftNavOpen,
    });
  },

  handleChangeRequestLeftNav(open) {
    this.setState({
      leftNavOpen: open,
    });
  },

  handleRequestChangeList(event, value) {
    this.props.history.push(value);
    this.setState({
      leftNavOpen: false,
    });
  },

  handleChangeMuiTheme(muiTheme) {
    this.setState({
      muiTheme: muiTheme,
    });
  },


  render() {
    const {
      history,
      location,
      children,
    } = this.props;

    let {
      leftNavOpen,
    } = this.state;

    const styles = this.getStyles();
    const title =
      history.isActive('/login') ? 'Login':"";



        let docked = false;
    let showMenuIconButton = true;

    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE) && title !== '') {
      docked = true;
      leftNavOpen = true;
      showMenuIconButton = false;

      styles.leftNav = {
        zIndex: styles.appBar.zIndex - 1,
      };

    }

    return (
      <div>

        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          title={title}
          zDepth={0}
          iconElementRight={<Link to="login"><FlatButton style={styles.iconButton}label={sessionStorage.username? sessionStorage.username:"登录"}  /></Link>}
          style={styles.appBar}
          showMenuIconButton={showMenuIconButton}

       />

        <LinearProgress mode="determinate" value={this.state.completed} style={styles.LinearProgress} />

        {title !== '' ?
          <div style={this.prepareStyles(styles.root)}>

            <div style={this.prepareStyles(styles.content)}>

              {React.cloneElement(children, {
                onChangeMuiTheme: this.handleChangeMuiTheme,
              })}
            </div>
          </div>
          :
          children

        }

        <FullWidthSection style={styles.footer}>
          <p style={this.prepareStyles(styles.p)}>
            {'Code Crafted With Heart By '}
            <a style={styles.a} href="https://github.com/jiangchunliang">
              Spring
            </a>
          </p>
          <IconButton
            iconStyle={styles.iconButton}
            iconClassName="muidocs-icon-custom-github"
            href="https://github.com/jiangchunliang"
            linkButton={true}
          />
        </FullWidthSection>
      </div>
    );
  },
});
function mapStateToProps(state) {
  return {
    session: state.loginReducer.session,


  }
}

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps)(Master);

