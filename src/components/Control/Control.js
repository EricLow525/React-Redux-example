import React, { Component, PropTypes } from 'react';
const propTypes = {
    onPlus: PropTypes.func,
    onSubract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

function createWarning(funcName) {
  return () => console.warn(funcName + ' is not defined');
}

const defaultProps = {
    onPlus: () => createWarning('onPlus'),
    onSubract: () => createWarning('onSubract'),
    onRandomizeColor: () => createWarning('onRandomizeColor')

};
class Control extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control;
