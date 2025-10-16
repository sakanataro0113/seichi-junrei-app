import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//3つの画面を読み込む
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import MyPageScreen from "./screens/MyPageScreen";

const Tab=createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ホーム" component={HomeScreen}/>
        <Tab.Screen name="検索" component={SearchScreen}/>
        <Tab.Screen name="マイページ" component={MyPageScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}