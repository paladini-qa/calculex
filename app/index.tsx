import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Number from '@/components/Number';
import Panel from '@/components/Panel';
import Title from '@/components/Title';

const app = () => {
    const [value, setValue] = useState('');

    const updateValue = (opt: string) => {
        if (opt === 'A') {
            return setValue('');
        } else if (opt === 'C') {
            setValue(prevValue => prevValue.slice(0, -1));
        } else if (opt === '=') {
            try {
                const result = eval(value).toString();
                setValue(result);
            } catch (e) {
                setValue('ERROR');
            }
        } else {
            setValue(prevValue => prevValue + opt);
            return;
        }
    };

    const numbers = ['AC', 'C', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '', '0', '.', '='];

    return (
        <View style={styles.container}>
            <Title title='Calculex'></Title>
            <View style={styles.panel}>
            <Panel value={value}></Panel>
            <FlatList
                data={numbers}
                numColumns={4}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Number num={item} updateValue={updateValue} />
                )}
                style={styles.flatList}
            />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        width: 'auto',
    },
    flatList: {
        width: 'auto',
        flexGrow: 0,
        margin: 10,
    },
    panel: {
        gap: 25,
    },
});

export default app;