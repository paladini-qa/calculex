// Outro arquivo (por exemplo, App.tsx)

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '@/components/Title';
import ClickNextRightArrow from '@/components/ClickNextRightArrow';

const App: React.FC = () => {
    return (
        <View style={styles.appContainer}>
            <Title title="Bem vindo, Vitor!" />
            <ClickNextRightArrow />
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
});

export default App;
