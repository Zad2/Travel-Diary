import { StyleSheet } from 'react-native';
import { colors } from '../../themes/colors'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1
    },
    scrollViewContainer: {
        flexGrow: 1,
        width: '100%',
        paddingBottom: 100
    },
    content: {
        flexGrow: 0,
        width: '100%',
    },
    imagePlaceholder: {
        height: 250,
        width: '100%',
        borderRadius: 8,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 300,
        width: '100%',
        borderRadius: 8,
    },
    buttonFixed: {
        position: "absolute",
        bottom: 20,
        backgroundColor: 'white',
        width: '100%'
    }
})