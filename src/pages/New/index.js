import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { styles } from './styles';
import DateField from 'react-native-datefield';
import { useNavigation } from '@react-navigation/native';
import Schedule from '../../services/sqlite/Schedule';
import { useState } from 'react';


export default function New() {

  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)
  const [details, setDetails] = useState('')

  return (
    <View style={styles.container}>
      <View>
        <Text>Schedule's name</Text>
        <TextInput onChangeText={value => setName(value)} style={styles.input} />
      </View>
      <View>
        <Text>Date</Text>
        <DateField styleInput={{paddingHorizontal: 40, paddingVertical: 5}} onSubmit={(value) => {setDay(value.getDate());setMonth(value.getMonth());setYear(value.getFullYear())}} containerStyle={styles.input_3} />
      </View>
      <View>
        <Text>Details</Text>
        <TextInput onChangeText={value => setDetails(value)} multiline style={styles.input_2} />
      </View>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => {
        if (name && day && month && year ){
          Schedule.create(
            {
              commitment: name,
              day: day,
              month: month,
              year: year,
              details: details
            }
          )
          navigation.navigate('Home')
        } else {
          ToastAndroid.show('Enter valid information.', ToastAndroid.SHORT);
        }
        }}><Text style={styles.button}>Create</Text></TouchableOpacity>
    </View>
  );
}