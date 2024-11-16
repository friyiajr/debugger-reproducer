import { StyleSheet, View } from 'react-native';

import { Button } from '../components/Button';

export default function Overview() {
  const onPress = () => {
    console.log('DEBUGGER HIT');
  };

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title="Debugger" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
