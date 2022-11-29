import { StyleSheet, Text, View } from 'react-native';

export const ControlsSidebar = ({ }: {}) => {
    return (
        <View style={styles.container}>
            <Text>Controls Sidebar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "20%",
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
    },
});