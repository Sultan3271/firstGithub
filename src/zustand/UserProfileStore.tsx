import { create } from 'zustand';

// define interfaces for classes/objects
interface UserProfileLike {
    likeID: string,
    postId: string,
    userID: string
}

interface UserProfilePost {
   
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

   
}

interface PostLikesStore {
    likes: { [postId: string]: UserProfileLike[] };
    addLikeToPost: (like: UserProfileLike, postId: string) => void;
    addLikesToPost: (likes: UserProfileLike[], postId: string) => void;
    removeLikeFromPost: (likeId: string, postId: string) => void;
    removeAllLikesFromPost: (postId: string) => void;
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
   
}))
interface UserProfileLike {
    likeId: string;
    userId: string;
    // Add any other properties that are relevant to a like
}



// now we willl save post likes in a likes object in which there is an array stored on the key of postId
/// postIds are the keys of likes object . every key has an array of like objects
const usePostLikesStore = create<PostLikesStore>((set) => ({
    likes: {},

    addLikeToPost: (like, postId) =>
        set((state) => {
            const updatedLikes = { ...state.likes };
            if (!(postId in updatedLikes)) {
                updatedLikes[postId] = [];
            }
            updatedLikes[postId] = [...updatedLikes[postId], like];
            return { ...state, likes: updatedLikes };
        }),

    addLikesToPost: (likes, postId) =>
        set((state) => {
            const updatedLikes = { ...state.likes };
            updatedLikes[postId] = likes;
            return { ...state, likes: updatedLikes };
        }),

    removeLikeFromPost: (likeId, postId) =>
        set((state) => {
            const updatedLikes = { ...state.likes };
            if (postId in updatedLikes) {
                updatedLikes[postId] = updatedLikes[postId].filter((like) => like.likeId !== likeId);
            }
            return { ...state, likes: updatedLikes };
        }),

    removeAllLikesFromPost: (postId) =>
        set((state) => {
            const updatedLikes = { ...state.likes };
            delete updatedLikes[postId];
            return { ...state, likes: updatedLikes };
        }),
}));

export default useUserProfileStore
export type { UserProfileLike, UserProfilePost }
export { usePostsStore,usePostLikesStore }