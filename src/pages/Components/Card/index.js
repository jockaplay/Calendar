import { Pressable, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")

export default function Card({ id, data }) {

    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('Scheduling', { id: id, name: data.commitment, day: data.day, month: month[data.month], year: data.year, details: data.details})}>
            <Text>{month[data.month]}'s {data.day}</Text>
            <Text>{data.commitment}</Text>
        </Pressable>
    );
}