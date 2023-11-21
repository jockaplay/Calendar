import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
    date: {
        textAlign: 'center',
    },
    separator: {
        marginVertical: 15,
        height: 0.9,
        backgroundColor: '#aaa',
    },
    details: {
        paddingHorizontal: 10,
        flex: 1,
    },
    button: {
        backgroundColor: '#fd7e14',
        paddingVertical: 5,
        borderRadius: 4,
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontWeight: '600',
    },
});