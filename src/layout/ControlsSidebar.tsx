import { StyleSheet, View } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { useRecoilState } from 'recoil';
import { Check } from '../components/Check';
import { resultsState } from '../lib/state';

export const ControlsSidebar = ({res}: { res: Result[] }) => {
    const [results, setResults] = useRecoilState(resultsState);
    const isTabletOrMobileDevice = useMediaQuery({    
        maxDeviceWidth: 1224,
      });
    return (
        <View style={[styles.container, isTabletOrMobileDevice ? styles.column : styles.row]}>
            {results !== -1 ? <Check results={results} res={res} /> : <></>}
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