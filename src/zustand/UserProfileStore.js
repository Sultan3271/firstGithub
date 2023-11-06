import { create } from 'zustand';

const useUserProfileStore = create(set => {
    profileName: 'Name Goes Here',
    setName: name => set(state => ({ profileName: name }))
})

export useUserProfileStore;