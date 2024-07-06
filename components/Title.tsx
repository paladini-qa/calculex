import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface CenteredTitleProps {
    title: string,
    style?: { fontSize: number }
}

const Title: React.FC<CenteredTitleProps> = ({title}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Roboto',
        fontSize: 48,
        fontWeight: 'regular',
        textAlign: 'center',
    },
});

export default Title;
