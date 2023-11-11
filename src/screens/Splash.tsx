/**
 * @file Splash.tsx
 * @description Redirects users to the ScholarTabs screen
 * @ownership NerdUp
 * @last modified 10/18/2023
 */

import React, { useEffect } from 'react';

import ScholarTabs from '../navigation/TabNavigator';
import { useUserProfileStore } from '../zustand/UserProfileStore';

const Splash = ({ navigation }: any) => {

    const userProfile = useUserProfileStore(store=>store);

    console.log('User Profile: ' + JSON.stringify(userProfile, null, 2));

    return (
        <ScholarTabs />
    )
}

export default Splash