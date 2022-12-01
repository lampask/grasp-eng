import { StyleSheet, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { SidebarButton } from '../components/SidebarButton';
import { Toolbox } from '../components/Toolbox';
import { pairingState, resultsState, settingState } from '../lib/state';

export const ToolsSidebar = ({ tools, size, id, info, textSetter }: { tools: Array<Guide>, size: number, id: number, info: ChallengeText, textSetter: React.Dispatch<React.SetStateAction<number>>}) => {
    const [results, setResults] = useRecoilState(resultsState);
    const [pairing, setPairing] = useRecoilState(pairingState);
    const [settings, setSettings] = useRecoilState(settingState);
    
    return (
        <View style={styles.container}>
            <Toolbox tools={tools} />
            {results === -1 ? <SidebarButton text={settings.checkAnswersButton} onPress={() => {
                let results = 0;
                for (let i = 0; i < pairing.length; i++) {
                    if (pairing[i].deviceId === info.devices[i].name) results++;
                }
                setResults(Math.trunc((results / pairing.length) * 100));
            }} /> : <></> }
            <SidebarButton text={settings.nextButton} onPress={() => { textSetter((id+1) % size) }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minWidth: 230,
        flexWrap: 'wrap',
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
    }
});
