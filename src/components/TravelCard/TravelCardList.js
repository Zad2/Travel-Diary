import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './TravelCard.style';
import TravelCard from './TravelCard';

export default TravelCardList = ({ travels, onPress }) => (
    <View style={styles.list}>
        <FlatList
            showsHorizontalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-between', flex: 1 }}
            numColumns={2}
            data={travels}
            renderItem={({ item }) => {
                return (<TravelCard image={item.image} imageURI={item.imageURI} label={item.name} id={item.id} onPress={onPress} />)
            }}
            keyExtractor={item => `${item.id}`}
        />
    </View>
)