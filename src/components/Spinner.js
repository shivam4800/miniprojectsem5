import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">
                {props.mess}

            </div>

        </div>
    );

};
Spinner.defaultProps = {
    mess: "Loading..."

}; //default props

export default Spinner;