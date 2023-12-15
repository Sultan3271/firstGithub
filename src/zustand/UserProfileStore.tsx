import { create } from 'zustand';

// define interfaces for classes/objects
interface UserProfileLike {
    likeID: string,
    postId: string,
    userID: string
}

interface UserProfilePost {
    likes: UserProfileLike[],
    description: string,
    image: string,
    postId: string,
    status: string,
    time: string,
    userID: string
}

interface UserProfilePostStore {
    posts: UserProfilePost[],
    addPost: (post: UserProfilePost) => void,
    removePost: (postId: string) => void,
    setAllPosts: (posts: UserProfilePost[]) => void,
    addPosts: (posts: UserProfilePost[]) => void,

    addLikeToPost: (like: UserProfileLike, postId: string) => void,
    addLikesToPost: (likes: UserProfileLike[], postId: string) => void,
    removeLikeFromPost: (likeId: string, postId: string) => void,
    removeAllLikesFromPost: (postId: string) => void,
}

interface UserProfileStore {
    userID: string,
    bio: string,
    profilePic: string,
    schoolName: string,
    Class: string,
    usrName: string,
    setProfileData: (state: any) => void,
    setUserID: (state: string) => void,
    setBio: (state: string) => void,
    setProfilePic: (state: string) => void,
    setSchoolName: (state: string) => void,
    setClass: (state: string) => void,
    setUsrName: (state: string) => void,
}

// create stores
const useUserProfileStore = create<UserProfileStore>((set) => ({
    userID: '',
    bio: '',
    profilePic: '',
    schoolName: '',
    Class: '',
    usrName: '',
    setProfileData: (state) => set(()=>{
        return {
            userID: state.userID,
            bio: state.bio,
            profilePic: state.profilePic,
            schoolName: state.schoolName,
            Class: state.Class,
            usrName: state.usrName
        }
    }),
    setUserID: (state) => set(()=>({ userID: state })),
    setBio: (state: string) => set(()=>({ bio: state })),
    setProfilePic: (state: string) => set(()=>({ profilePic: state })),
    setSchoolName: (state: string) => set(()=>({ schoolName: state })),
    setClass: (state: string) => set(()=>({ Class: state })),
    setUsrName: (state: string) => set(()=>({ usrName: state })),
}))

const usePostsStore = create<UserProfilePostStore>((set) => ({
    posts: [],
    addPost: post => set(state => ({
        posts: [ ...state.posts, post ]
    })),
    removePost: postId => set(state => {
        let index = state.posts.findIndex(value => value.postId === postId);

        if (index > -1)
            state.posts.splice(index, 1);

        return ({ posts: [ ...state.posts ] });
    }),
    setAllPosts: posts => set(() => ({ posts })),
    addPosts: posts => set(state => ({ posts: [ ...state.posts, ...posts ] })),
    addLikeToPost: (like, postId) => set(state => {

        for (let i = 0; i < state.posts.length; i++) {
            if (state.posts[i].postId === postId)
                state.posts[i].likes = [ ...state.posts[i].likes, like ]
        }
        
        return ({ posts: state.posts })
    }),
    addLikesToPost: (likes, postId) => set(state => {

        for (let i = 0; i < state.posts.length; i++) {
            if (state.posts[i].postId === postId)
                state.posts[i].likes = [ ...state.posts[i].likes, ...likes ]
        }

        return ({ posts: state.posts })
    }),
    removeLikeFromPost: (likeId, postId) => set(state => {

        for (let i = 0; i < state.posts.length; i++) {
            if (state.posts[i].postId === postId) {
                const indexToRemove = state.posts[i].likes.findIndex(l => l.likeID === likeId);
                state.posts[i].likes.splice(indexToRemove, 1);
            }
        }

        return ({ posts: state.posts })
    }),
    removeAllLikesFromPost: postId => set(state => {
        
        for (let i = 0; i < state.posts.length; i++) {
            if (state.posts[i].postId === postId)
                state.posts[i].likes = [];
        }

        return ({ posts: state.posts })
    })
}))

export default useUserProfileStore
export type { UserProfileLike, UserProfilePost }
export { usePostsStore }