import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//3つの画面を読み込む
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import MyPageScreen from "./screens/MyPageScreen";
import SeichiDetailScreen from "./screens/SeichiDetailScreen";

const Tab=createBottomTabNavigator();
const Stack=createStackNavigator();

//ホームタブの中身を定義するコンポーネント
function HomeStack(){
  return(
    <Stack.Navigator id={undefined}>
      <Stack.Screen name="Map" component={HomeScreen} options={{title:"聖地マップ"}}/>
      <Stack.Screen name="SeichiDetail" component={SeichiDetailScreen} options={{title:"聖地詳細"}}/>
    </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator id={undefined}>
        <Tab.Screen name="ホーム" component={HomeStack} options={{ headerShown: false }}/>
        <Tab.Screen name="検索" component={SearchScreen}/>
        <Tab.Screen name="マイページ" component={MyPageScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}