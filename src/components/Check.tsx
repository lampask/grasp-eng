import { StyleSheet, Text, View } from 'react-native';

export const Check = ({ }: {}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Rethorical tools</Text>
            <View style={styles.sphere}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 275,
        display: 'flex',
        backgroundColor: '#5bc8af',
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 17,
    },
    sphere: {
        position: 'absolute',
        color: '#00a368', 
        width: 105,
    }
});