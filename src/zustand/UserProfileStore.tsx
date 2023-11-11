import { create } from 'zustand';

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

export const useUserProfileStore = create<UserProfileStore>((set) => ({
    userID: '',
    bio: '',
    profilePic: '',
    schoolName: '',
    Class: '',
    usrName: '',
    setProfileData: (state) => set(store=>{
        console.log('UserID: ' + state.bio)

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