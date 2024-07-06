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
        fontWeight: 'regular',
        textAlign: 'right',
        width: 365,
    },
});

export default Panel;
