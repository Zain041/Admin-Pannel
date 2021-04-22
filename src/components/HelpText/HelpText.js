import React from 'react';
import { FormText } from 'reactstrap';

const HelpText = (props) => {
    return (
        <FormText className="main-color mb-3 ms-4 mt-0"> { props.text } </FormText>
    );
};

export default HelpText;