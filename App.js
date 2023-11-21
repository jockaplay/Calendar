import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from "./src/routes/stacks";

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  );
}
