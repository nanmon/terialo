import { StyleSheet, View, StatusBar } from 'react-native';
import { Dealer } from './components/Dealer';
import { Navbar } from './components/Navbar';
import { useReducer } from 'react';

const useForceRestart = () => {
  return useReducer(key => key + 1, 0)
}

const useSpeed = () => {
  const SPEEDS = [3000, 2000, 1500, 1000, 800, 1]
  return useReducer(speed => {
    const index = SPEEDS.indexOf(speed)
    return SPEEDS[(index + 1) % SPEEDS.length]
  }, SPEEDS[0])
}

export default function App() {
  const [dealerKey, forceRestart] = useForceRestart()
  const [speed, changeSpeed] = useSpeed()

  return (
    <View style={styles.container}>
      <Navbar speed={speed} onRestart={forceRestart} onSpeed={changeSpeed} />
      <Dealer key={dealerKey} speed={speed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    paddingTop: StatusBar.currentHeight
  },
});
