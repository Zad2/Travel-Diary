import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { BottomButton } from '../../components/Buttons/Buttons';

export default CameraPage = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const camera = useRef();

    const snap = async () => {
        let photo = await camera.current.takePictureAsync();
        if (photo) {
            navigation.navigate('AddTravel', { photo });
        } else {
            alert('error taking photo');
        }
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={ref => { camera.current = ref; }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                </View>
            </Camera>
            <View style={{ marginLeft: 20, marginRight: 20 }}>
                <BottomButton onPress={() => snap()}>Add</BottomButton>
            </View>
        </View>
    );
}