import { StyleSheet, Text, View } from 'react-native';
import { Paper } from '../components/Paper';
import { Title } from '../components/Title';

export const Center = ({ }: {}) => {
    return (
        <View style={styles.center}>
            <Title title='Name of TEXT'/>
            <Paper />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        display: 'flex',
        width: '50%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
});