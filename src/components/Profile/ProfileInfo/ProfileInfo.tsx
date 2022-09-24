import React from 'react';
import s from '../Profile.module.css';

export function ProfileInfo() {
  return (
    <>
      <div>
        <img
          src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
      </div>
      <div className={s.descr_block}>
        Ava + descr
      </div>
    </>
  );
};

export default ProfileInfo;