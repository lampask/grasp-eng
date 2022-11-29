import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Title } from './src/components/Title';
import { Center } from './src/layout/Center';
import { ControlsSidebar } from './src/layout/ControlsSidebar';
import { Paper } from './src/layout/Paper';
import { ToolsSidebar } from './src/layout/ToolsSidebar';

export default function App() {
  return (
    <>
      <Title title='Name of TEXT'/>
      <View style={styles.container}>
        <ControlsSidebar />
        <Paper />
        <ToolsSidebar />
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginVertical: 50,
    marginTop: 45
  },
});
