import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { pairingState, resultsState, selectedState } from '../lib/state';

export const Highlight = ({ id, count, device, paraghraph, size }: { id: number, count: number, device: {name: number;range: Array<number>}, paraghraph: string, size: number}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [selected, setSelected] = useRecoilState(selectedState);
    const [pairing, setPairing] = useRecoilState(pairingState);
    const [results, setResults] = useRecoilState(resultsState);

    return (
        <Text>{paraghraph.substring(0, device.range[0]-count)}<Text onPress={()=>{
            let newSelected = Array(size).fill(false, 0, size);
            newSelected[id] = !selected[id];
            setSelected(newSelected);
        }} >
            <Text style={[styles.device, pairing.length != 0 && pairing[id].deviceId != -1 ? styles.deviceSelectedAssigned : {}, selected[id] ? styles.deviceSelected : {}, results != -1 ? (pairing[id].deviceId === device.name ? styles.correcr : styles.incorrect) : {}]}>{paraghraph.substring(device.range[0]-count, device.range[1]-count)}</Text>
        </Text>{paraghraph.substring(device.range[1]-count, count+paraghraph.length)}</Text>
    );
};

const styles = StyleSheet.create({
    device: {
        color: '#5bc8af',
    },
    deviceSelected: {
        backgroundColor: '#d9d9d9dd',
        alignSelf: 'flex-start',
    },
    deviceSelectedAssigned: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 2,  
        color: '#577FFF',
    },
    correcr: {
        color: '#5bc8af',
    },
    incorrect: {
        color: '#ff0000',
    }
});