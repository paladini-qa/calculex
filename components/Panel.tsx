import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface PanelProps {
    value: string;
}

const Panel: React.FC<PanelProps> = ({value}) => {
    return (
        <View>
            <Text style={styles.panel}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    panel: {
        fontFamily: 'Roboto',
        fontSize: 48,
        fontWeight: 'bold',
        margin: 25,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
        textAlign: 'right',
        width: 320,
    },
});

export default Panel;
