/**
 * @file Splash.tsx
 * @description Redirects users to the ScholarTabs screen
 * @ownership NerdUp
 * @last modified 10/18/2023
 */

import React, { useEffect } from 'react';

import ScholarTabs from '../navigation/TabNavigator';

const Splash = ({ navigation }: any) => {
  

  return (
    <ScholarTabs />
  ) 
}

export default Splash