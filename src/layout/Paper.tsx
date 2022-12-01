import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { Highlight } from '../components/Highlight';

export const Paper = ({text, devices} : {text: string, devices: Array<Device>}) => {
  var count = 0;
  const isTabletOrMobileDevice = useMediaQuery({    
    maxDeviceWidth: 1224,
  });
  return (
    <View style={[styles.container, isTabletOrMobileDevice ? styles.column : styles.row]}>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid black',
    },
    paper: {
      flex: 1,
      marginVertical: 45,
      marginHorizontal: 75,
      display: 'flex',
      flexDirection:'column',
      flexWrap: 'wrap',
    },
    text: {
      textAlign: 'left',
      fontSize: 22,
      fontFamily: "Times New Roman",
      paddingVertical: 10,
    },
    row: {
      width: '50%',
    },
    column: {
      width: '90%',
      marginBottom: 50,
    }
});