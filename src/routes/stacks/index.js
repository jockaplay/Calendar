import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import Home from '../../pages/Home';
import New from '../../pages/New';
import Scheduling from '../../pages/Scheduling';
import { styles } from './styles';

const stacks = createNativeStackNavigator();

export default function StackRoutes() {

  const navigation = useNavigation();

  return (
    <stacks.Navigator>
      <stacks.Screen name='Home' component={Home} options={{ headerRight: () => (
        <TouchableOpacity style={styles.padding} onPress={() => navigation.navigate('New')}>
          <Text style={styles.button}>New</Text></TouchableOpacity>
        ) }}/>
      <stacks.Screen name='New' options={{headerTitle: 'New Scheduling'}} component={New} />
      <stacks.Screen name='Scheduling' component={Scheduling} options={{animation: 'slide_from_right' }}/>
    </stacks.Navigator>
  );
}