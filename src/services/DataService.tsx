/**
 * @file DataService.js
 * @Owner Muhammad Sultan
 * @Date modified 14.10.2023
 * @purpose all database functions will be here , we can create more similar files for database operation
 *
 */

import firestore from '@react-native-firebase/firestore';

import { getUserId } from '../utils/Auth';
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
    userID: string,
    bio: string,
    profilePic: string,
    schoolName: string,
    Class: string,
    usrName: string,
) {
    firestore()
        .collection('Users')
        .doc(getUserId())
        .collection('Profile')
        .doc(getUserId())
        .set(
            {
                userID,
                bio,
                profilePic,
                schoolName,
                Class,
                usrName,
            },
            { merge: true },
        )
        .then(() => {
            console.log('success!');
        })
        .catch(err => {
            console.log(err);
        });
}

export function setInPost(userID: string, image: string, description: string, time: string, status: string) {
    const postCollection = firestore().collection('AllPosts').doc(userID).collection('Posts');
    const newPostDoc = postCollection.doc(); // This creates a new document reference with an auto-generated ID
    const newPostId = newPostDoc.id;
    firestore()
        .collection('AllPosts')
        .doc(userID)
        .collection('Posts')
        .doc(newPostId)
        .set({
            userID,
            postId: newPostId,
            image,
            description,
            time,
            status,
        })
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
export const getProfile = (userID: string) => {
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
}

export const deletePostLike = async (postID: string, userID: string) => {
    const likeCollectionRef = firestore()
        .collection('AllPosts')
        .doc(userID)
        .collection('Posts')
        .doc(postID)
        .collection('Likes');
    const likeQuery = likeCollectionRef.where('userID', '==', userID);
    likeQuery.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                doc.ref.delete()
                    .then(() => {
                        console.log("post Disliked");
                    })
                    .catch((error) => {
                        console.error('Error removing like:', error);
                    });
            });
        })
        .catch((error) => {
            console.error('Error querying likes:', error);
        });
}

export const setPostLike = async (postID: string, userID: string) => {
    const LikeCollection = firestore().collection('Users').doc(userID).collection('Posts').doc(postID).collection('Likes');
    const newLikeDoc = LikeCollection.doc(); // This creates a new document reference with an auto-generated ID
    const likeId = newLikeDoc.id;
    console.log("likeId:" + likeId);
    console.log("userID:" + userID);
    console.log("postID:" + postID);

    firestore()
        .collection('AllPosts')
        .doc(userID)
        .collection('Posts')
        .doc(postID)
        .collection('Likes')
        .doc(likeId)
        .set({
            userID,
            postId: postID,
            likeID: likeId
        })
        .then(() => {
            console.log('success!');
        })
        .catch(err => {
            console.log(err);
        });
}

export const getPostLikes = async (postID: string, userID: string) => {
    return new Promise((resolve, reject) => {
        const subcollectionRef = firestore()
            .collection('AllPosts')
            .doc(userID)
            .collection('Posts')
            .doc(postID)
            .collection('Likes');
        
        var likes: any = []

        subcollectionRef.get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    likes.push(doc.data());
                });
                resolve(likes);
            })
            .catch((error) => {
                console.error("Error getting documents: ", error);
                reject(error);
            });
    })
}

export const fetchPosts = async (userID: string) => {
    return new Promise((resolve, reject) => {
        const subcollectionRef = firestore().collection('AllPosts').doc(userID).collection('Posts');

        var posts: any = [];

        subcollectionRef.get()
            .then((querySnapshot) => {

                querySnapshot.forEach((doc) => {
                    posts.push(doc.data());
                });
                resolve(posts);
            })
            .catch((error) => {
                console.error("Error getting documents: ", error);
                reject(error);
            });
    });
}

// TODO: check if exists anywhere else in code
// export const fetchData = async () => {
//     try {
//         const profileCollection = await firestore()
//             .collectionGroup('Profile')
//             .get();

//         const profiles = profileCollection.docs.map((doc) => doc.data());

//         //console.log('All profiles:', profiles);
//         return profiles;
//     } catch (error) {
//         console.error('Error fetching profiles:', error);
//     }
// };