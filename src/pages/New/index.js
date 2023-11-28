import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
  const [details, setDetails] = useState('')

  return (
    <View style={styles.container}>
      <View>
        <Text>Schedule's name</Text>
        <TextInput onChangeText={value => setName(value)} style={styles.input} />
      </View>
      <View>
        <Text>Date</Text>
        <DateField containerStyle={styles.input} />
      </View>
      <View>
        <Text>Details</Text>
        <TextInput onChangeText={value => setDetails(value)} multiline style={styles.input_2} />
      </View>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => {
        Schedule.create(
          {
            commitment: name,
            day: 5,
            month: 10,
            details: details
          }
        )
        navigation.navigate('Home')
        }}><Text style={styles.button}>Create</Text></TouchableOpacity>
    </View>
  );
}