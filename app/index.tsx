// Calculadora.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Number from '@/components/Button';
import Panel from '@/components/Panel';
import Title from "@/components/Title";

const app = () => {
    const [value, setValor] = useState('');

    const updateValue = (opt: string) => {
        if (opt === 'A') {
            return setValor('');
        } else if (opt === 'C') {
            return setValor(value.slice(0, -1));
        } else if (opt === '=') {
            try {
                setValor(eval(value));
            } catch (e) {
                setValor('ERROR');
            }
            return;
        }
        setValor(value + opt);
    };

    const numbers = ['A', 'C', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '', '0', '.', '='];

    return (
        <View style={styles.container}>
            <Title title="CALCULEX" />
            <Panel value={value}></Panel>
            <FlatList
                data={numbers}
                numColumns={4}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Number num={item} updateValue={updateValue} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

export default app;