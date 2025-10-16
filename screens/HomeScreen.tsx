import React,{useState,useEffect}from "react";
import {View,StyleSheet} from "react-native";
import MapView,{Marker,PROVIDER_GOOGLE} from "react-native-maps";

//firestore関連インポート
import {getFirestore,collection,getDocs} from "firebase/firestore";
import app from "../firebaseConfig"; //firebaseの初期化設定をインポート

//聖地データの型定義
interface Seichi{
    id:string;
    name:string;
    location:{
        lat:number;
        lng:number;
    };
}

const HomeScreen=()=>{
    //聖地リストを保存するためのstate
    const [seichiList,setSeichiList]=useState<Seichi[]>([]);

    //画面が最初に表示されたときにfirebaseからデータを取得する
    useEffect(()=>{
        const fetchSeichiData=async()=>{
            const db=getFirestore(app);
            const seichiCollection=collection(db,"seichi");
            const seichiSnapshot=await getDocs(seichiCollection);

            const list=seichiSnapshot.docs.map(doc=>({
                id:doc.id,
                name:doc.data().name,
                location:doc.data().location,
            })) as Seichi[];
            setSeichiList(list);
        };
        fetchSeichiData();
    },[]);

    return(
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE} //googlemapを使う
                //初期位置を東京駅に指定
                initialRegion={{
                    latitude: 35.681236,
                    longitude: 139.767125,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
            {/*取得した聖地リストをもとにピンを立てる */}
            {seichiList.map(seichi=>(
                <Marker
                    key={seichi.id}
                    coordinate={{
                        latitude:seichi.location.lat,
                        longitude:seichi.location.lng,
                    }}
                    title={seichi.name}
                />
            ))}
            </MapView>
        </View>
    );
};

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
        },
        map:{
            width:"100%",
            height:"100%",
        },
    }
);

export default HomeScreen;