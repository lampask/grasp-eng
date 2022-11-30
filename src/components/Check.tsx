import { StyleSheet, Text, View } from 'react-native';

export const Check = ({ results }: { results: number}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Something something heheheha</Text>
            <View style={styles.sphere}>
                <Text style={styles.result}>{results}%</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 275,
        height: 75,
        display: 'flex',
        backgroundColor: '#5bc8af',
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    text: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 14,
        marginRight: 90,
        textAlign: 'center',
    },
    sphere: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#00a368', 
        width: 105,
        height: 105,
        borderRadius: 105,
        backgroundColor: '#00a368',
        transform: [{translateX: 100}],
    },
    result: {
        fontSize: 40,
        fontWeight: 'bold',
    }
});