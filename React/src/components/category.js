import React from 'react';

const Category = props => {
    return (

        <div className="col-md-4">
            <div id="main">
                <div className="inner">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-info" onClick={() => props.onMovieSelect()}>Yeni Filmler</li>
                        <li className="list-group-item list-group-item-info" onClick={() => props.toprated()}>En Çok Beğenilenler</li>
                        <li className="list-group-item list-group-item-info" onClick={() => props.mostView()}>En Çok İzlenenler</li>
                        <li className="list-group-item list-group-item-info" onClick={() => props.animasyon()}>Animasyon Filmleri</li>
                        <li className="list-group-item list-group-item-info" onClick={() => props.dram()}>Dram Filmleri</li>
                        <li className="list-group-item list-group-item-info" onClick={() => props.macera()}>Macera Filmleri</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Category;