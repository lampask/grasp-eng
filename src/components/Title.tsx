import { StyleSheet, Text, View } from 'react-native';

export const Title = ({ title }: { title: string }) => {
    return (
        <View style={styles.box} >
            <Text style={styles.title}>{title}</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});