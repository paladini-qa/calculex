import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Number from '@/components/Button';
import Panel from '@/components/Panel';

const app = () => {
    const [value, setValue] = useState('');

    const updateValue = (opt: string) => {
        if (opt === 'A') {
            return setValue('');
        } else if (opt === 'C') {
            setValue(prevValue => typeof prevValue === 'string' ? prevValue.slice(0, -1) : '');
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

    const numbers = ['A', 'C', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '', '0', '.', '='];

    return (
        <View style={styles.container}>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        flexGrow: 0,
    },
});

export default app;