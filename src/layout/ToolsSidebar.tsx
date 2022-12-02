import { StyleSheet, View } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { useRecoilState } from 'recoil';
import { SidebarButton } from '../components/SidebarButton';
import { Toolbox } from '../components/Toolbox';
import { pairingState, resultsState, settingState } from '../lib/state';

export const ToolsSidebar = ({ tools, size, id, info, guides, textSetter }: { tools: Array<Device>, size: number, id: number, info: ChallengeText, guides: Guide[], textSetter: React.Dispatch<React.SetStateAction<number>>}) => {
    const [results, setResults] = useRecoilState(resultsState);
    const [pairing, setPairing] = useRecoilState(pairingState);
    const [settings, setSettings] = useRecoilState(settingState);
    const isTabletOrMobileDevice = useMediaQuery({    
        maxDeviceWidth: 1224,
      });
    
    return (
        <View style={[styles.container, isTabletOrMobileDevice ? styles.column : styles.row]}>
            <Toolbox guides={guides} tools={tools} />
            {results === -1 ? <SidebarButton text={settings.checkAnswersButton} onPress={() => {
                let results = 0;
                for (let i = 0; i < pairing.length; i++) {
                    const idx = pairing.findIndex((pair) => pair.textId === i);    
                    if (pairing[idx].deviceId === info.devices[i].name) results++;
                }
                console.log(pairing);
                console.log(info.devices)
                setResults(Math.trunc((results / pairing.length) * 100));
            }} /> : <></> }
            <SidebarButton text={settings.nextButton} onPress={() => { textSetter((id+1) % size) }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
    },
    row: {
      width: '20%',
    },
    column: {
      width: '90%',
    }
});
