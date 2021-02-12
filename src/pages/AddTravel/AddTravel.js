import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import moment from 'moment';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import { styles } from './AddTravel.style';

import { BottomButton } from '../../components/Buttons/Buttons';
import Padding from '../../components/Padding/Padding';
import CustomInput from '../../components/CustomInput/CustomInput';
import PageContainer from '../../components/PageContainer/PageContainer';

export default AddTravel = ({ navigation, route }) => {
    const [travel, onChangeTravel] = useState({
        name: '',
        time: moment(),
        place: '',
        description: '',
    });

    useEffect(() => {
        if (route.params) {
            const { photo } = route.params;
            onChangeTravel({
                ...travel,
                imageURI: photo.uri
            })
        }
    }, [route.params]);

    const onChangeText = (name, value) => {
        onChangeTravel({
            ...travel,
            [name]: value
        })
    }

    return (
        <PageContainer>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.scrollViewContainer} >
                    <ScrollView style={styles.content} showsHorizontalScrollIndicator={false}>
                        <Padding vertical={20} />
                        <CustomInput
                            onChangeText={onChangeText}
                            value={travel.name}
                            name='name'
                            placeholder='Name'
                        />
                        <Padding vertical={20} />
                        <Text>{moment(travel.time).format("MMM Do YY")}</Text>
                        <Padding vertical={20} />
                        <CustomInput
                            onChangeText={onChangeText}
                            value={travel.place}
                            name='place'
                            placeholder='Place'
                        />
                        <Padding vertical={20} />
                        {travel.imageURI ?
                            <Image
                                resizeMode='cover'
                                style={styles.image}
                                source={{ uri: travel.imageURI }}
                            /> :
                            <View style={styles.imagePlaceholder}>
                                <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                                    <Entypo name="camera" size={70} color="white" />
                                </TouchableOpacity>
                            </View>
                        }

                        <Padding vertical={20} />
                        <CustomInput
                            onChangeText={onChangeText}
                            value={travel.description}
                            name='description'
                            placeholder='Description'
                        />
                    </ScrollView>
                </View>
                <BottomButton onPress={() => navigation.navigate('Home', { travel })}>Save</BottomButton>
            </KeyboardAvoidingView>
        </PageContainer>
    )
}