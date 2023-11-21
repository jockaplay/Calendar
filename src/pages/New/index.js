import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import DateField from 'react-native-datefield';
import { TextInputBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function New() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View>
        <Text>Schedule's name</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Date</Text>
        <DateField containerStyle={styles.input} />
      </View>
      <View>
        <Text>Details</Text>
        <TextInput multiline style={styles.input_2} />
      </View>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={styles.button}>Create</Text></TouchableOpacity>
    </View>
  );
}