import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageCard from './ImageAndTitle';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHello}>Hello World</Text>
      <Text>Welcome to the Home Page</Text>
      <Image 
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 64, height: 64}}
       />
       <Image 
        source={require('./assets/icon.png')}
        style={{width: 64, height: 64}}
       />
       <ImageCard
  image={require('./assets/icon.png')}
  title="Stay Consistent"
  description="Small steps every day build massive results over time."
/>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textHello:{
    backgroundColor: 'red', 
    textDecorationLine: 'underline', 
    fontSize: 50
  }
});
