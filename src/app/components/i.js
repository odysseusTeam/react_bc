/**
 * Created by CHEN on 2016/2/1.
 */
import React from 'react';
import render  from 'react-dom';

import { connect } from 'react-redux';
import action from '../actions/actions'

class i extends React.Component {
    render() {
        return (
            <div>
                <input type='text' value={this.props.propsValue} onChange={this.changeHandle.bind(this)} ref="input"/>
                {this.props.propsValue}
            </div>
        );
    }
    changeHandle(){
        const node = render.findDOMNode(this.refs.input);
        const value = node.value.trim();
        this.props.change(value);
    }
}

function mapStateToProps(state) {
    return {
        propsValue: state.value,
    }
}

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps,action)(i);