import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Markdown from 'react-native-markdown-display';
import { useRecoilState } from "recoil";
import { pairingState, selectedState } from "../lib/state";
import { FontAwesome } from '@expo/vector-icons';

export const Tool = ({ id, name, description, size }: { id: number, name: string, description: string, size: number }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [pairing, setPairing] = useRecoilState(pairingState);
    const selectedText = useRecoilState(selectedState);
    const selectedTextId = selectedText[0].indexOf(true);
    
    return (
        <View style={styles.container} >
            <View style={styles.tool}>
                <Pressable onPress={() => {
                    if (selectedText[0].includes(true)) {
                        const idx = pairing.findIndex((pair) => pair.textId === selectedTextId);        
                            let newPairing = structuredClone(pairing);
                            newPairing[idx].deviceId = pairing[idx].deviceId === id ? -1 : id;
                            setPairing(newPairing);
                    }
                }}>
                    <View style={styles.buttonSelect}>{selectedText[0].includes(true) && pairing[pairing.findIndex((pair) => pair.textId === selectedTextId)].deviceId === id ? <FontAwesome name="square" size={13} color="black" /> : <></>}</View>
                </Pressable>
                <Text selectable={false} style={styles.device}>{name}</Text>
            </View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Markdown>{description}</Markdown>
                            <Pressable
                                style={styles.buttonClose}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable onPress={() => setModalVisible(true)}>
                    <MaterialCommunityIcons name="chat-question-outline" size={24} color="black" />
                </Pressable>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({ 
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        height: 30,
        width: 200,
    },
    device: {
        
    },
    tool: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonSelect: {
        width: 15,
        height: 15,
        borderRadius: 2,
        backgroundColor: '#d9d9d9',
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 20,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "justify"
    }
});