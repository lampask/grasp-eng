import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';

export const SidebarButton = ({ text, onPress }: { text: string, onPress?: ((event: GestureResponderEvent) => void) | null | undefined } ) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text selectable={false} style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 275,
        display: 'flex',
        backgroundColor: '#d9d9d9',
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 10,
    },
    text: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 17,
    }
});