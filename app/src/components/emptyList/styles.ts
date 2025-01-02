import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";


export const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    line: {
        paddingHorizontal: 24,
        height: 1,
        width: '100%',
        backgroundColor: Colors.gray400
    },
    title: {
        color: Colors.gray300,
        fontWeight: 'bold',
        fontSize: 14,
    },
    subTitle: {
        fontSize: 14,
        color: Colors.gray300,
    }
})