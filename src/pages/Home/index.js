import { View, FlatList } from 'react-native';
import { styles } from './styles'
import Card from '../Components/Card';
import Schedule from '../../services/sqlite/Schedule';
import { useEffect, useState } from 'react';

export default function Home({navigation}) {


    const printSchedule = (Schedule) => {
        data.push({id: Schedule.id, data: {commitment: Schedule.commitment, day: Schedule.day, month: Schedule.month, details: Schedule.details}})
        console.log("id: " + Schedule.id)
    }

    const data = []

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            Schedule.all()
            .then(
                schedule => schedule.forEach(s => printSchedule(s))
            )
        });
    
        return unsubscribe;
      }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList data={data} 
                renderItem={({item}) => <Card data={item.data}/>}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={<View style={styles.separator}/>}
            />
        </View>
    );
}