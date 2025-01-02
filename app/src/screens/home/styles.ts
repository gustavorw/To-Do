import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.gray600,
        flex: 1,

    },

    header: {
        backgroundColor: Colors.gray700,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%'
    },

    form: {
        paddingTop: 230,
        flexDirection: 'row',
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'

    },

})