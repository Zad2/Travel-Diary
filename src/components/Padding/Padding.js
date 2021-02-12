import React from 'react';
import { View } from 'react-native';

export default Padding = ({ vertical, horizontal }) => (
    <View style={{ paddingTop: vertical, paddingRight: (horizontal) }} />
)