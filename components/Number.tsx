import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';

interface NumberProps {
    num: string;
    updateValue: (num: string) => void;
}

const Number: React.FC<NumberProps> = ({ num, updateValue }) => {
    const renderContent = () => {
        switch (num) {
            case 'AC':
                return <ImageBackground source={require('../assets/images/AC.png')} style={styles.fullSize} />;
            case 'C':
                return <ImageBackground source={require('../assets/images/C.png')} style={styles.fullSize} />;
            case '=':
                return  <Text style={styles.equal}>{num}</Text>;
            case '/':
                return <ImageBackground source={require('../assets/images/divide.png')} style={styles.fullSize} />;
            case '':
                return;
            default:
                return <Text style={styles.text}>{num}</Text>;
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={() => updateValue(num)}>
            {renderContent()}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        margin: 5,
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 48,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#FFE300',
        backgroundColor: '#000000',
        width: 80,
        height: 80,
        borderRadius: 50,
        textAlign: 'center',
    },
    equal: {
        fontFamily: 'Roboto',
        fontSize: 48,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#000000',
        backgroundColor: '#FFE300',
        width: 80,
        height: 80,
        borderRadius: 50,
        textAlign: 'center',
    },
    fullSize: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Number;