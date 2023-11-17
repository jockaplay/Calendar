import { Pressable, Text } from 'react-native';
import { styles } from './styles';

export default function Card({ data }) {
    return (
        <Pressable style={styles.container} onPress={()=> console.log(data.commitment)}>
            <Text>{data.date.day} de {data.date.mouth}</Text>
            <Text>{data.commitment}</Text>
        </Pressable>
    );
}