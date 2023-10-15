
/**
 * @createdfor just for getting userId because userId is used everywhere
 */
import auth from '@react-native-firebase/auth';
export const userId=auth().currentUser.uid