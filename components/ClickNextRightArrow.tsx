import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ClickNextRightArrowProps {
}

const handleClick = () => {
    console.log('Arrow clicked!');
}

const imageUrl = 'https://w7.pngwing.com/pngs/348/5/png-transparent-arrow-emoji-computer-icons-right-arrow-angle-triangle-black.png';

const ClickNextRightArrow: React.FC<ClickNextRightArrowProps> = () => {
    return (
        <View>
            <Text style={styles.arrow} onPress={handleClick}>👉</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    arrow: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ClickNextRightArrow;