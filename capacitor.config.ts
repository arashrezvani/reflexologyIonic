import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ultra.medicice.app',
  appName: 'بنیان مرصوص',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      //launchAutoHide: true,
      //launchFadeOutDuration: 3000,
      backgroundColor: "#ffffffff",
      //androidSplashResourceName: "splash",
      //androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",
      //spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      //layoutName: "launch_screen",
      //useDialog: true,
    },
  },
};

export default config;
