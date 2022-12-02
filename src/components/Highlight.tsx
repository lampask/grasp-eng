import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { pairingState, resultsState, selectedState } from '../lib/state';

export const Highlight = ({ id, count, devices, paraghraph, size }: { id: number, count: number, devices: Device[], paraghraph: string, size: number}) => {
    const [selected, setSelected] = useRecoilState(selectedState);
    const [pairing, setPairing] = useRecoilState(pairingState);
    const [results, setResults] = useRecoilState(resultsState);

    let countSec = 0;
    return (
        <Text>
            {devices !== undefined && pairing !== undefined && pairing.length !== 0 ? devices.map((device, index) => {
                const idLoc = id;
                const elem = (
                    <Text key={index}>
                        <Text>{paraghraph.substring(countSec, device.range[0]-count+countSec)}</Text>
                        <Text onPress={()=>{
                            let newSelected = Array(size).fill(false, 0, size);
                            newSelected[idLoc] = !selected[idLoc];
                            setSelected(newSelected);
                        }}
                            style={[styles.device, pairing[idLoc].deviceId != -1 ? styles.deviceSelectedAssigned : {}, selected[idLoc] ? styles.deviceSelected : {}, results != -1 ? (pairing[idLoc].deviceId === device.name ? styles.correcr : styles.incorrect) : {}]}
                        >{paraghraph.substring(device.range[0]-count+countSec, device.range[1]-count+countSec)}</Text>
                    </Text>
                );
                countSec += device.range[1]-count-countSec;
                id++;
                return elem;
            }) : <></>}
            <Text style={styles.incorrect}>{paraghraph.substring(countSec, paraghraph.length)}</Text>
        </Text>
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