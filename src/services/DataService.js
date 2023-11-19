/**
 * @file DataService.js
 * @Owner Muhammad Sultan
 * @Date modified 14.10.2023
 * @purpose all database functions will be here , we can create more similar files for database operation
 *
 */

import firestore from '@react-native-firebase/firestore';
import { userId } from './UserId';

/**
 * Dummy data
 */
export const posts = [
  {
    key: '1',
    admin: 'David Edwards',
    avatar: 'person',
    picture: 'person',
    time: '25-09-2023',
    likes: 250,
    contributes: 250,
    description:
      ' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim',
  },
  {
    key: '2',
    admin: 'David Edwards',
    avatar: 'person',
    picture: 'person',
    time: '10:49 Am',
    likes: 20,
    contributes: 180,
    description:
      ' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim',
  },
  {
    key: '3',
    admin: 'David Edwards',
    avatar: 'person',
    picture: 'person',
    time: '25-09-2023',
    likes: 300,
    contributes: 200,
    description:
      ' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim',
  },
  {
    key: '4',
    admin: 'David Edwards',
    avatar: 'person',
    picture: 'person',
    time: '25-09-2023',
    likes: 400,
    contributes: 50,
    description:
      ' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim',
  },
  {
    key: '5',
    admin: 'David Edwards',
    avatar: 'person',
    picture: 'person',
    time: '12:30 Pm',
    likes: 390,
    contributes: 150,
    description:
      ' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim',
  },
  {
    key: '6',
    admin: 'David Edwards',
    avatar: 'person',
    picture: 'person',
    time: '25-09-2023',
    likes: 300,
    contributes: 250,
    description:
      ' someting like that, loremiposim someting like that, loremiposim someting like that, loremiposim',
  },

  // Add more data items as needed
];

/**
 *
 * @param {*} userID
 * @param {*} bio
 * @param {*} profilePic
 * @param {*} schoolName
 * @param {*} Class
 * @param {*} usrName
 *
 * @description we can call this to set profile data or update the current profile data
 */

export function setInProfile(
  userID,
  bio,
  profilePic,
  schoolName,
  Class,
  usrName,
) {
  firestore()
    .collection('Users')
    .doc(userID)
    .collection('Profile')
    .doc(userID)
    .set(
      {
        bio,
        profilePic,
        schoolName,
        Class,
        usrName,
      },
      {merge: true},
    )
    .then(() => {
      console.log('success!');
    })
    .catch(err => {
      console.log(err);
    });
}

/**
 *
 * @param {string} userID
 * @returns a promise with the   profile data
 * @description this is used to get the user profile data, and this unction can be called in any
 * component if you have userId there
 */
export const getProfile = userID => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('Users')
      .doc(userID)
      .collection('Profile')
      .doc(userID)
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          resolve(documentSnapshot.data());
        } else {
          console.log('Profile not exists');
        }
      })
      .catch(error => {
        reject(error); // Reject the promise with the error if there's an issue
      });
  });
};

export const getPosts= async ()=>{
  const subcollectionRef = firestore().collection('Users').doc(userId).collection('Posts');

  subcollectionRef.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }) 
    .catch((error) => {
      console.error("Error getting documents: ", error);
    });
}