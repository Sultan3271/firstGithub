/**
 * @file DataService.js
 * @Owner Muhammad Sultan
 * @Date modified 25.09.2023
 * @purpose all database functions will be here , we can create more similar files for database operation
 * 
 */

import firestore from '@react-native-firebase/firestore';

/**
 * Dummy data
 */
export const posts = [
    { key: '1', admin: 'David Edwards',avatar:'person',picture:'person',time:'25-09-2023',likes:250,contributes:250, description:' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim' },
    { key: '2',  admin: 'David Edwards',avatar:'person',picture:'person',time:'10:49 Am',likes:20,contributes:180, description:' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim' },
    { key: '3',  admin: 'David Edwards',avatar:'person',picture:'person',time:'25-09-2023',likes:300,contributes:200, description:' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim' },
    {key:'4',  admin: 'David Edwards',avatar:'person',picture:'person',time:'25-09-2023',likes:400,contributes:50, description:' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim'},
    {key:'5',  admin: 'David Edwards',avatar:'person',picture:'person',time:'12:30 Pm',likes:390,contributes:150, description:' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim'},
    {key:'6',  admin: 'David Edwards',avatar:'person',picture:'person',time:'25-09-2023',likes:300,contributes:250, description:' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim'},
    
    // Add more data items as needed
  ];

 

 export const getProfile=(profileId)=>{
     

  console.log("inP", profileId);

// Define a function that returns a Promise

  return new Promise((resolve, reject) => {
    const subscriber = firestore()
      .collection('Profile')
      .doc(profileId)
      .onSnapshot(
        (documentSnapshot) => {
          if (documentSnapshot.exists) {
            const userData = documentSnapshot.data();
            console.log('User data:', userData);

            // Resolve the Promise with the user data
            resolve(userData);
          } else {
            console.log('User profile does not exist.');
            
          }
        },
        (error) => {
          console.error('Error fetching user profile:', error);
          // Reject the Promise with the error
          reject(error);
        }
      );

    // Return a cleanup function to unsubscribe from the listener when no longer needed
    return () => subscriber();
  });






    
  
  }






