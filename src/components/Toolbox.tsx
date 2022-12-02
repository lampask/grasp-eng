import { StyleSheet, Text, View } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { useRecoilState } from 'recoil';
import { pairingState, settingState } from '../lib/state';
import { Tool } from './Tool';

export const Toolbox = ({ tools }: { tools: Array<{
    name: string;
    description: string;
  }>}) => {
    const isTabletOrMobileDevice = useMediaQuery({    
        maxDeviceWidth: 1224,
      })
    const [settings, setSettings] = useRecoilState(settingState);
    const [pairing, setPairing] = useRecoilState(pairingState);
    let pairCount = 0;
    pairing.forEach((pair) => { if (pair.deviceId !== -1) pairCount++ });
    return (
        <View style={[styles.container, isTabletOrMobileDevice ? styles.column : styles.row]}>
            <Text style={styles.text}>{settings.rhetoricHeadline} ({pairCount}/6)</Text>
            {tools.map((tool, index) => (
                <Tool key={index} id={index} name={tool.name} description={tool.description} size={tools.length} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#5bc8af',
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 20,
    },
    text: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 17,
    },
    row: {
        width: 275,
    },
    column: {
        width: "90%",
    }
});