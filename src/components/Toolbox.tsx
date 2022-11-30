import { StyleSheet, Text, View } from 'react-native';
import { Tool } from './Tool';

export const Toolbox = ({ tools }: { tools: Array<{
    name: string;
    description: string;
  }>}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Rethorical tools</Text>
            {tools.map((tool, index) => (
                <Tool key={index} id={index} name={tool.name} description={tool.description} size={tools.length} />
            ))}
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
        paddingBottom: 20,
    },
    text: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 17,
    }
});