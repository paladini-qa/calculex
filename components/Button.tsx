import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface NumberProps {
    num: string;
    updateValue: (num: string) => void;
}

const Number: React.FC<NumberProps> = ({ num, updateValue }) => {
    return (
        <TouchableOpacity
            style={styles.number}
            onPress={() => updateValue(num)}
        >
            <Text style={styles.text}>{num}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    number: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        margin: 5,
        borderRadius: 50,
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FFE300',
    },
});

export default Number;