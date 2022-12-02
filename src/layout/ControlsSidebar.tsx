import { StyleSheet, View } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { useRecoilState } from 'recoil';
import { Check } from '../components/Check';
import { Explanation } from '../components/Explanation';
import { pairingState, resultsState, selectedState, settingState } from '../lib/state';

export const ControlsSidebar = ({devices, res}: { devices: Device[], res: Result[] }) => {
    const [results, setResults] = useRecoilState(resultsState);
    const [selected, setSelected] = useRecoilState(selectedState);
  
    const isTabletOrMobileDevice = useMediaQuery({    
        maxDeviceWidth: 1224,
    });

    return (
        <View style={[styles.container, isTabletOrMobileDevice ? styles.column : styles.row]}>
            {results !== -1 ? <Check results={results} res={res} /> : <></>}
            {results !== -1 && selected.includes(true) ? (<Explanation expl={devices[selected.indexOf(true)].explanation} />) : <></>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
    },
    row: {
        width: '20%',
    },
    column: {
        width: '90%',
    }
});