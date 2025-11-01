import React from "react";
import {View,Text,StyleSheet} from "react-native";

//routeという引数で前の画面から渡された情報を受けとる
const SeichiDetailScreen=({route}:any)=>{
    //前の画面から渡された聖地のIDを取得
    const {seichiId}=route.params;

    return(
        <View style={styles.container}>
            <Text>聖地の詳細画面</Text>
            <Text>ID:{seichiId}</Text>
        </View>
    );
};

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
        },
    }
);

export default SeichiDetailScreen;