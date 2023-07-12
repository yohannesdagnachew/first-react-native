import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CatagoriesScreen from "./screens/CatagoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
          headerStyle: {
            backgroundColor: '#351401',
          },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: '#3f2f25',
          },
         }}
  
        >
          <Stack.Screen name="Catagories" component={CatagoriesScreen} 
            options={{
              title: 'Meal Categories',
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator> 
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
