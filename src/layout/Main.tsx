import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { Title } from '../components/Title';
import { ControlsSidebar } from '../layout/ControlsSidebar';
import { Paper } from '../layout/Paper';
import { ToolsSidebar } from '../layout/ToolsSidebar';
import { pairingState, resultsState, selectedState, settingState } from '../lib/state';
import '@expo/match-media'
import { useMediaQuery } from "react-responsive";

export const Main = ({ data, textState }: { data: Data | undefined, textState: [number, React.Dispatch<React.SetStateAction<number>>]}) => {
  const [selected, setSelected] = useRecoilState(selectedState);
  const [pairing, setPairing] = useRecoilState(pairingState);
  const [results, setResults] = useRecoilState(resultsState);
  const [settings, setSettings] = useRecoilState(settingState);
  const [text, setText] = textState;
  const [devices, setDevices] = useState([] as Device[]);

  
  useEffect(() => {
    setSettings(data?.settings!);
  }, []);

  useEffect(() => {
    if (data !== undefined) {
        setResults(-1);
        setDevices([...data?.texts[text].devices!].sort(() => Math.random() - 0.5));
        setSelected(Array(6).fill(false, 0, data?.texts[text].devices.length));
        setPairing(Array.from(Array(6), (_, index) => { return { textId: index, deviceId: -1, id: -1 }}));
    }
  }, [text]);
  
  const isTabletOrMobileDevice = useMediaQuery({    
    maxDeviceWidth: 1224,
  });

  return (
    <> 
        <Title title={data?.texts[text].name!} name={data?.texts[text].author!} />
        <View style={[styles.container, isTabletOrMobileDevice ? styles.column : styles.row]}>
            <ControlsSidebar devices={data?.texts[text].devices!} res={data?.results!} />
            <Paper text={data?.texts[text].text!} devices={data?.texts[text].devices!}/>
            <ToolsSidebar tools={devices} id={text} size={data?.texts.length!} info={data?.texts[text]!} guides={data?.guides!} textSetter={setText}/>
        </View>
        <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    marginVertical: 50,
    marginTop: 45
  },
  row: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  column: {
    alignItems: 'center',
    flexDirection: 'column-reverse'
  },
});
