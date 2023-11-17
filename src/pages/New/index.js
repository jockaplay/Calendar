import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export default function New({navigation}) {
 return (
   <View style={styles.Container}>
    <Text>Task's name</Text>
    <TextInput style={styles.input}/>
    <Text>Date</Text>
    <TextInput style={styles.input}/>
    <TouchableOpacity onPress={() => {navigation.navigate('Home')}}><Text style={styles.button}>Create</Text></TouchableOpacity>
   </View>
  );
}