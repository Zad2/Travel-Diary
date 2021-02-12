import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';

import { styles } from './TravelDetails.style';

import Title from '../../components/Title/Title';
import Padding from '../../components/Padding/Padding';
import travels from '../../data/travels';
import PageContainer from '../../components/PageContainer/PageContainer';

export default Traveldetails = ({ route }) => {
    const { id } = route.params;
    const travel = travels[id];
    const { name, time, place, image, imageURI, description } = travel;
    return (
        <PageContainer>
            <Title>{name}</Title>
            <View style={styles.content}>
                <Padding vertical={30} />
                <Text>{moment(time).format("MMM Do YY")}</Text>
                <Text>{place}</Text>
                <Padding vertical={30} />
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={imageURI ? { uri: imageURI } : image}
                />
                <Padding vertical={30} />
                <Text>{description}</Text>
            </View>
        </PageContainer>
    )
}