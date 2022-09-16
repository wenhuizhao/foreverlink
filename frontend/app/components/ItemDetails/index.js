import React from 'react';
import { Grid } from '@material-ui/core';
import './style.scss'

const ItemDetails = () => {
    return (
        <Grid className="itemDetails">
            
            <p>MyForever link gives you a web page never expires. </p>
            <p>The web page is stored in Web3 storage Arweave. It uses distributed storage to 
              store data permanently. The web will never be down.
            </p>
            <p>The .eth domain is distributed. The domain is stored in blockchain. 
              No company or government can shutdown your domain! It will exist forever!
            </p>
            <h3>Whats included in the package</h3>
            <ul>
                <li>A .eth never down domain</li>
                <li>Never down Web page stored in distributed storage.</li>
            </ul>
        </Grid>
    );
}

export default ItemDetails;
