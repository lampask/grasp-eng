import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { selectedState } from '../lib/state';

export const Highlight = ({ id, count, device, paraghraph, size }: { id: number, count: number, device: {name: number;range: Array<number>}, paraghraph: string, size: number}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [selected, setSelected] = useRecoilState(selectedState);
    
    return (
        <Text>{paraghraph.substring(0, device.range[0]-count)}<Text onPress={()=>{
            let newSelected = Array(size).fill(false, 0, size);
            newSelected[id] = !selected[id];
            setSelected(newSelected);
        }} >
            <Text style={selected[id] ? styles.deviceSelected : (isHovered ? styles.deviceHovered : styles.device)}>{paraghraph.substring(device.range[0]-count, device.range[1]-count)}</Text>
        </Text>{paraghraph.substring(device.range[1]-count, count+paraghraph.length)}</Text>
    );
};

const styles = StyleSheet.create({
    device: {
        color: '#5bc8af',
    },
    deviceHovered: {
        color: '#5bc8af',
        backgroundColor: '#d9d9d9aa',
        alignSelf: 'flex-start',
    },
    deviceSelected: {
        color: '#5bc8af',
        backgroundColor: '#d9d9d9dd',
        alignSelf: 'flex-start',
    },
    deviceSelectedAssigned: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 12, 
        padding: 1, 
        color: '#577FFF',
    }
});