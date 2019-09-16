/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Form from '../components/form/Form';

const Container = styled('div')`
    height: 100%;
    width: 100%;
`;

class PropertySheet extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        model: PropTypes.shape({
            action: PropTypes.string,
            fields: PropTypes.objectOf(Map)
        }).isRequired
    }

    onChange = ({ id, value }) => {
        const { dispatch, model } = this.props;
        dispatch({
            type: model.action,
            id,
            value
        });
    }

    render() {
        const { model } = this.props;
        return (
            <Container>
                <Form model={model} onChange={this.onChange} />
            </Container>
        );
    }
}

const Properties = ({ selection, dispatch }) => (
    selection.fold({
        Nothing: () => (
            <div>
                <h1>Please select section to update</h1>
            </div>
        ),
        Just: ({ sheet }) => (<PropertySheet model={sheet} dispatch={dispatch} />)
    })
);

export default Properties;
