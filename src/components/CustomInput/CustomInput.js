import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './CustomInput.style';

export default CustomInput = ({ value, onChangeText, name, ...props }) => (
    <TextInput
        style={styles.input}
        onChangeText={(value) => onChangeText(name, value)}
        value={value}
        {...props}
    />
)