import { Text, View } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';

export default function Scheduling({ route, navigation }) {

    const { name, month, day, details } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.date}>{month}'s {day}</Text>
            <View style={styles.separator}></View>
            <Text style={styles.details}>{details}</Text>
            <View style={styles.separator}></View>
            <TouchableOpacity onPress={() => navigation.navigate('New')}><Text style={styles.button}>Edit</Text></TouchableOpacity>
        </View>
    );
}