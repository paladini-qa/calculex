import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CenteredTitleProps {
    title: string;
}

const Title: React.FC<CenteredTitleProps> = ({ title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Title;
