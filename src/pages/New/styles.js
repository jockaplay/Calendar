import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        justifyContent: 'center',
        gap: 20,
        flex: 1,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 40,
        padding: 10,
    },
    input_2: {
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 150,
        padding: 10,
        textAlignVertical: 'top',
    },
    input_3: {
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 40,
        paddingHorizontal: 10,
        textAlignVertical: 'top',
    },
    separator: {
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
