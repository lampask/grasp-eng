import { StyleSheet, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { Check } from '../components/Check';
import { resultsState } from '../lib/state';

export const ControlsSidebar = ({res}: { res: Result[] }) => {
    const [results, setResults] = useRecoilState(resultsState);
    return (
        <View style={styles.container}>
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
});