/**
 * Created by CHEN on 2016/1/30.
 */
import React from 'react';
import ReactDOM  from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
export default class Main extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title={"包车APP"}
                    iconElementRight={
                                                <IconMenu
                                                iconButtonElement={
                                                  <IconButton>
                                                          <MoreVertIcon />
                                                  </IconButton>
                                                }
                                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                              >
                                                    <MenuItem primaryText="Refresh" />
                                                    <MenuItem primaryText="Help" />
                                                    <MenuItem primaryText="Sign out" />
                                              </IconMenu>
                                            }
                />

            </div>
        )
    }
}


