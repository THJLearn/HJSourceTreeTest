/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, StyleSheet,Text, View } from 'react-native';

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
       <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
    )
  }
}

class MyScene extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    // title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
    this._onPOP = this._onPOP.bind(this);
    this._onRoot = this._onRoot.bind(this);

  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push(
    {
      component: MyScene,
      title: 'Scene ' + nextIndex,
      // passProps: {index: nextIndex}
    }
    );
  }
_onPOP(){
      let nextIndex = --this.props.index;
    this.props.navigator.pop(
    //   {
    //   component: MyScene,
    //   title: 'Scene ' + nextIndex,
    //   passProps: {index: nextIndex}
    // }
      );

}
_onRoot(){
    this.props.navigator.popToTop();
}
  render() {
    return (
      <View style={styles.container}>
        <Text>Current Scene: { this.props.title }</Text>
         <Text>load</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        />
        <Button
          onPress={this._onPOP}
          title="Tap me to load the up scene"
        />
        <Button
          onPress={this._onRoot}
          title="Tap me to load the root scene"
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
