import "dotenv/config"

export default {
  expo: {
    name: "CINEFY",
    slug: "cinefy",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/logo-poster.png",
    scheme: "cinefy",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/logo-poster.png",
        backgroundImage: "./assets/images/logo-poster.png",
        monochromeImage: "./assets/images/logo-poster.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
    },
    web: {
      output: "static",
      favicon: "./assets/images/logo-icon.png",
      bundler: "metro",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/logo-poster.png",
          imageWidth: 500,
          resizeMode: "cover",
          backgroundColor: "#000000",
          enableFullScreenImage_legacy: true,
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
      },
      publishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
    owner: "earevalo355",
  },
};
