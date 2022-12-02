import { BlurView } from 'expo-blur';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Markdown from 'react-native-markdown-display';

export const Intro = ({ data, introduced }: { data: Intro, introduced: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <BlurView style={styles.container}>
            <View style={styles.box}>
                <Text selectable={false} style={styles.text}>{data.title}</Text>
                <Markdown>
                    {data !== undefined ? data.content : ""}
                </Markdown>
                <Pressable style={styles.button} onPress={() => { introduced(true) }}>
                    <Text>{data.buttonText}</Text>
                </Pressable>
            </View>
        </BlurView>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
    }, 
    text: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 17,
    },
    box: {
        width: '50%',
        position : 'absolute',
        left: '25vw',
        top: '25vh',
        display: 'flex',
        backgroundColor: '#fff',
        border: '1px solid #000',
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 10,
        padding: 20,
    },
    button: {
        backgroundColor: '#5bc8af',
        borderRadius: 33,
        padding: 10,
        margin: 10,
    }
});