import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Highlight } from '../components/Highlight';

export const Paper = ({text, devices} : {text: string, devices: Array<Device>}) => {
  var count = 0;
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled>
        <View style={styles.paper}>
        {text.split('\n').map((paraghraph, index) => {
          const size = paraghraph.length;
          let flag = false;
          const elem = (
            <Text style={styles.text} key={index}>
              {devices.map((device, index) => {
                if (size+count > device.range[0] && count <= device.range[0] && size+count >= device.range[1] && count < device.range[1]) {
                  flag = true;
                  return <Highlight key={index} id={index} count={count} device={device} paraghraph={paraghraph} size={devices.length} />;
                }
              })}
              {flag ? '' : paraghraph}
            </Text>
          )
          count += size;
          return elem;
        })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
    },
    paper: {
        marginVertical: 45,
        marginHorizontal: 75
    },
    text: {
        textAlign: 'justify',
        fontSize: 22,
        fontFamily: "Times New Roman",
        paddingVertical: 10,
    },
});