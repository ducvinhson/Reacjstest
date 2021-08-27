import React from 'react';
import AlbumList from './../components/AlbumList/index';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumb: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/8/a/1/88a128c0862363b40d395dff2a62921e.jpg'
        },
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumb: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/8/a/1/88a128c0862363b40d395dff2a62921e.jpg'
        },
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumb: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/8/a/1/88a128c0862363b40d395dff2a62921e.jpg'
        },
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumb: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/8/a/1/88a128c0862363b40d395dff2a62921e.jpg'
        }
    ];
    return (
        <div>
            <h2> Co ve ban se thich day</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;