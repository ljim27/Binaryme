import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourcompany.binaryme', // Update this with your actual App ID
  appName: 'Binaryme',
  webDir: 'www', // Ensure this matches your web assets folder
  bundledWebRuntime: false,
  server: {
    url: 'https://binaryme.netlify.app', // Comment out if using local files
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // 3 seconds splash screen
      launchAutoHide: true,
      backgroundColor: '#ffffff', // Set to your preferred background color
      androidSplashResourceName: 'splash',
      iosSplashResourceName: 'Default',
      useDialog: true
    }
  }
};

export default config;
