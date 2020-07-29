import React, { Component } from 'react';

import sData1 from './Sdata';
import ImageBox from './ImageBox';

function ImageBoxParent(){
    return(
        <div>
            {
                sData1.map((val) =>{
                    return(
                    <ImageBox
                    imgsrc={val.imgsrc}
                    logo={val.logo}
                    title={val.title}
                    />
                    );
                })
            }
        </div>
    );
}

export default ImageBoxParent;