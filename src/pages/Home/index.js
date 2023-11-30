import { View, FlatList } from 'react-native';
import { styles } from './styles'
import Card from '../Components/Card';
import Schedule from '../../services/sqlite/Schedule';
import { useEffect, useState } from 'react';

export default function Home({navigation}) {

    const [data, setData] = useState([])

    const addSchedule = (Schedule) => {
        const lista = {id: Schedule.id, data: {commitment: Schedule.commitment, day: Schedule.day, month: Schedule.month, details: Schedule.details}}
        const novaLista = [...data, lista]
        setData(novaLista)
        console.log("id: " + Schedule.id)
        console.log("Lista: "+lista)
        console.log("Nova lista: "+novaLista)
        console.log("State: "+data)
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            Schedule.all()
            .then(
                schedule => schedule.forEach(s => addSchedule(s))
            )
        });
    
        return unsubscribe;
      }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList data={data} 
                renderItem={({item}) => <Card data={item.data} id={item.id}/>}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={<View style={styles.separator}/>}
            />
        </View>
    );
}