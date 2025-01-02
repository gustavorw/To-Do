import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 42,
        paddingBottom: 20,
    },

    create: {
        color: Colors.blue,
        fontSize: 14,
        fontWeight: 'bold'
    },
    done: {
        color: Colors.purple,
        fontSize: 14,
        fontWeight: 'bold'
    },

    count: {
        flexDirection: 'row',
    },
    countText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.gray200,
    },

    circle: {
        marginLeft: 8,
        width: 25,
        height: 19,
        borderRadius: 10,
        backgroundColor: Colors.gray400,
        justifyContent: 'center',
        alignItems: 'center'

    }
})