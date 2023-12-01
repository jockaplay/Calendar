import { Text, View } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';
import Schedule from '../../services/sqlite/Schedule';

export default function Scheduling({ route, navigation }) {

    const { id, name, month, day, year, details } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.date}>{month}'s {day} of {year}</Text>
            <View style={styles.separator}></View>
            <Text style={styles.details}>{details}</Text>
            <View style={styles.separator}></View>
            <TouchableOpacity onPress={() => navigation.navigate('New', {name})}><Text style={styles.button}>Edit</Text></TouchableOpacity>
            <View style={{height: 10}}></View>
            <TouchableOpacity onPress={() => {
                    Schedule.remove(id)
                    navigation.navigate('Home')
                }}><Text style={styles.button}>Delete</Text></TouchableOpacity>
        </View>
    );
}