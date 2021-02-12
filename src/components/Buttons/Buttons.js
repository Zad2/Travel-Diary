import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './Buttons.style';

const PrimaryButton = ({ children, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>{children}</Text>
    </TouchableOpacity>
)

const BottomButton = ({ children, onPress, style }) => (
    <View style={[styles.buttonFixed, style]}>
        <PrimaryButton onPress={onPress}>{children}</PrimaryButton>
    </View>
)

export { PrimaryButton, BottomButton }