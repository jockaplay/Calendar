import { View, FlatList } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';
import Card from '../Components/Card';

export default function Home() {

    const [DATA, setData] = useState([
        {id: 0, data: {date: {day: 22, month: 10}, commitment: "Aniversário", details: "l"}},
        {id: 1, data: {date: {day: 4, month: 12}, commitment: "Aracomp", details: "Hello world, Hello world, Hello world, Hello world, Hello world, Hello world, Hello world, Hello world..."}},
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