import { Pressable, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")

export default function Card({ data }) {

    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('Scheduling', { name: data.commitment, day: data.day, month: month[data.month - 1], details: data.details})}>
            <Text>{month[data.month - 1]}'s {data.day}</Text>
            <Text>{data.commitment}</Text>
        </Pressable>
    );
}