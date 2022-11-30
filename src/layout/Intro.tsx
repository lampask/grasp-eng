import { BlurView } from 'expo-blur';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import ExtendedMarkdown, { Markdown } from 'react-native-markdown-display';

export const Intro = ({ data, introduced }: { data: Intro, introduced: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <BlurView style={styles.container}>
            <View style={styles.box}>
                <Text selectable={false} style={styles.text}>{data.title}</Text>
                <ExtendedMarkdown>
                    {data !== undefined ? data.content : ""}
                </ExtendedMarkdown>
                <Pressable onPress={() => { introduced(true) }}>
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
        top: '50vh',
        display: 'flex',
        backgroundColor: '#fff',
        border: '1px solid #000',
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 10,
    }
});