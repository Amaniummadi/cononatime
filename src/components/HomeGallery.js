import React from 'react'
import {  Image ,Tab} from 'semantic-ui-react'


const panes = [
    {
      menuItem: 'All',
      render: () =><div className="Gallery_one">
           <Image className="g_img" src='/images/pic3.jpg' />
           <Image className="g_img" src='/images/tuti.jpeg' />
            <Image className="g_img" src='/images/pic1.jpg' />
            <Image className="g_img" src='/images/pic2.jpg' />
            <Image className="g_img" src='/images/pic5.jpg' />
            <Image className="g_img" src='/images/pic6.jpg' />
            <Image className="g_img" src='/images/pic7.jpg' />
            <Image className="g_img" src='/images/pic9.jpg' />
      </div> ,
    },
    {
      menuItem: 'covid-19',
      render: () =><div className="Gallery_one">
             <Image className="g_img" src='/images/img4.jpg' />
             <Image className="g_img" src='/images/img9.jpg' />
             <Image className="g_img" src='/images/pic4.jpg' />
             <Image className="g_img" src='/images/pic5.jpg' />
             
             <Image className="g_img" src='/images/pic2.jpg' />
      </div> ,
      
    },
    {
      menuItem: 'public',
      render: () =>  <div className="Gallery_one">
             <Image className="g_img" src='/images/img3.jpg' />
            <Image className="g_img" src='/images/img7.jpg' />
            <Image className="g_img" src='/images/img8.jpg' />
            <Image className="g_img" src='/images/pic8.jpg' />
            <Image className="g_img" src='/images/pic9.jpg' />
            <Image className="g_img" src='/images/pic6.jpg' />
      </div>
     ,
    },
    {
        menuItem: 'world',
        render: () =>  <div className="Gallery_one">
              <Image className="g_img" src='/images/pic1.jpg' />
              <Image className="g_img" src='/images/pic7.jpg' />
        </div>
       ,
      },
  ]

function HomeGallery() {
    return (
        <div className="HomeGallery">
          <h1>Gallery</h1>
            <div className="container">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </div>
        </div>
    )
}

export default HomeGallery
