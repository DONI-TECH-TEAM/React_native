import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, S } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1}>Hello world! we have avery long text a very very long text a very very very looooooooooooong text</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#014da7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
