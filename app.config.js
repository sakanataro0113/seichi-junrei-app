import 'dotenv/config'; // .envファイルを読み込む命令

export default {
  expo: {
    name: "seichi-app",
    slug: "seichi-app",
    version: "1.0.0",
    // ... その他の設定 ...

    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.sakan.seichiapp",
      config: {
        // iOS用のキーを.envから読み込む
        googleMapsApiKey: process.env.EXPO_PUBLIC_IOS_MAPS_API_KEY
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.sakan.seichiapp",
      config: {
        googleMaps: {
          // Android用のキーを.envから読み込む
          apiKey: process.env.EXPO_PUBLIC_ANDROID_MAPS_API_KEY
        }
      }
    },
    // ...
  }
};