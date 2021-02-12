import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Home.style';

import { BottomButton } from '../../components/Buttons/Buttons';
import TravelCardList from '../../components/TravelCard/TravelCardList';
import travels from '../../data/travels';
import PageContainer from '../../components/PageContainer/PageContainer';

export default Home = ({ navigation, route }) => {
    if (route.params) {
        const { travel } = route.params;
        if (travel) {
            travels.push({ ...travel, id: travels.length })
        }
    }
    return (
        <PageContainer>
            <View style={styles.content}>
                <TravelCardList travels={travels} onPress={(id) => navigation.navigate('TravelDetails', { id })} />
            </View>
            <BottomButton onPress={() => navigation.navigate('AddTravel')}>Add</BottomButton>
        </PageContainer>
    )
}