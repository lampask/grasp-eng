import { StyleSheet, Text, View } from 'react-native';

export const Title = ({ title, name }: { title: string, name: string }) => {
    return (
        <View style={styles.box} >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.name}>by {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({ 
    title: {
        marginTop: 75,
        fontSize: 34,
        fontWeight: 'bold',
        color: 'black',
        textAlignc: 'center',
    },
    box: {
        width: '50hw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontStyle: 'italic',
        color: 'gray',
    }
});