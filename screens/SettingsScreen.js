import React from 'react';
import { Text, View } from 'react-native'

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
      <Text>Settings screen</Text>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};
