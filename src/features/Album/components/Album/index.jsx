import React from 'react';
import PropTypes from 'prop-types';
import '../Album/styles.scss';
Album.propTypes = {
    album: PropTypes.array.isRequired,
};

function Album({ album }) {
    return (
        <div className="album">
            <div className="album__thumb">
                <img src={album.thumb} alt={album.name} />
            </div>

            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default Album;