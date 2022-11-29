import { StyleSheet, Text, View } from 'react-native';

export const Toolbox = ({ }: {}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Rethorical tools</Text>
            
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
    }
});