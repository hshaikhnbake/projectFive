import React from 'react';



class Listings extends React.Component {
    
    render() {
        return (
            <div className="listingsContainer wrapper">
                <ul>
                    <img src={this.props.listings.img1} alt={this.props.listings.img1alt}></img>
                    <li id={this.props.listings.id}>
                        <p className="address">{this.props.listings.address}</p>
                        <p>{this.props.listings.city}, ON</p>
                        <p>Bedrooms: {this.props.listings.bedrooms}</p>
                        <p>{this.props.listings.price}</p>
                        <p>Neighbourhood: {this.props.listings.neighbourhood}</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Listings;