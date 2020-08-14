import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/Reducers/index'
import RootNavigator from './src/MainApp'
console.disableYellowBox = true; 
// import RootNavigator from './src/components/RootNavigator'
export default class Async_Redux extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootNavigator /> 
            </Provider>
        );
    }
}
