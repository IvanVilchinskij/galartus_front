import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';
import UserAccount from '../components/userAccount/userAccount';

const UserPage = ({toggleHeaderColor}) => {
    useEffect(() => {
        toggleHeaderColor(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (    
        <UserAccount/>
    );
};

const mapStateToProps = (state) => {
    return {
        darkHeader: state.darkHeader,
    }
};

export default connect(mapStateToProps, actions)(UserPage);