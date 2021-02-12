import { StyleSheet } from 'react-native'
import { colors } from '../../themes/colors'

export const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: colors.primary,
        alignSelf: 'stretch',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    primaryButtonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    buttonFixed: {
        position: "absolute",
        bottom: 20,
        width: '100%'
    }
})