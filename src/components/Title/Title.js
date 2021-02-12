import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Title.style';

export default Title = ({ children }) => (
    <View>
        <Text style={styles.title}>{children}</Text>
    </View>
)