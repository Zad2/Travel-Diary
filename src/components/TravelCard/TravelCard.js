import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './TravelCard.style';

export default TravelCard = ({ image, imageURI, label, onPress, id }) => (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id)}>
        <Image
            resizeMode='cover'
            style={styles.image}
            source={imageURI ? { uri: imageURI } : image}
        />
        <View style={styles.textContainer}>
            <Text>{label}</Text>
        </View>
    </TouchableOpacity>
)