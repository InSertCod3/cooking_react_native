import * as React from 'react';
import { BottomNavigation, DefaultTheme} from 'react-native-paper';
import { createStackNavigator, createAppContainer } from "react-navigation";
import TabBrowse from 'src/Main/TabBrowse';
import TabUser from 'src/Main/TabUser';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#48a2de',
    accent: '#191919',
  }
};

class IndexComponent extends React.Component {

  static navigationOptions = {
    title: 'Home',
    header: null
  }

  state = {
    index: 0,
    routes: [
      { key: 'tabbrowse', title: 'Browse', icon: 'polymer', color: '#FFFFFF'},
      { key: 'tabuser', title: 'Me', icon: 'person', color: '#FFFFFF' }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    tabbrowse: TabBrowse,
    tabuser: TabUser,
  });

  render() {
    return (
      <BottomNavigation
        shifting={true}
        theme={theme}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: IndexComponent
  }
});

export default createAppContainer(AppNavigator);