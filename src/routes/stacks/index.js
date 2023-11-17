import { Header, createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Home from '../../pages/Home';
import New from '../../pages/New';
import { Text, TouchableOpacity } from 'react-native';
import { Touchable } from 'react-native';

const stacks = createNativeStackNavigator();

export default function StackRoutes() {

  const navigation = useNavigation();

  return (
    <stacks.Navigator>
      <stacks.Screen name='Home' component={Home} options={{ headerRight: () => (
        <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 15}} onPress={() => {navigation.navigate('New')}}><Text>New</Text></TouchableOpacity>
      ) }} />
      <stacks.Screen name='New' component={New} />
    </stacks.Navigator>
  );
}