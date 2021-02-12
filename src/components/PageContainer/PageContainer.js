import React from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './PageContainer.style';

export default PageContainer = ({ children }) => (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
)