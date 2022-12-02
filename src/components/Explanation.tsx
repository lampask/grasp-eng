import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { settingState } from '../lib/state';

export const Explanation = ({ expl }: { expl: string }) => {
    const [settings, setSettings] = useRecoilState(settingState);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{settings.explanation}</Text>
            <Text>{expl}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#F2AE00',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        padding: 10,
    },
    text: {
        fontWeight: 'bold',
        padding: 5,
        fontSize: 17,
    },
    expl: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
    row: {
        width: 275,
    },
    column: {
        width: "90%",
    }
});