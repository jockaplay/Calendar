import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';
import Card from '../Components/Card';

export default function Home({ navigation }) {

    const [DATA, setData] = useState([
        {id: 0, data: {date: {day: 22, mouth: "Outubro"}, commitment: "Aniversário"}},
        {id: 1, data: {date: {day: 4, mouth: "Dezembro"}, commitment: "Aracomp" }},
    ])

    return (
        <View style={styles.container}>
            <FlatList data={DATA} 
                renderItem={({item}) => <Card data={item.data}/>}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={<View style={styles.separator}/>}
            />
        </View>
    );
}