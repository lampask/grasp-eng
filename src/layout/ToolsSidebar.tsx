import { StyleSheet, Text, View } from 'react-native';
import { Toolbox } from '../components/Toolbox';

export const ToolsSidebar = ({ }: {}) => {
    return (
        <View style={styles.container}>
            <Toolbox />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "20%",
        flexWrap: 'wrap',
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
    },
});
