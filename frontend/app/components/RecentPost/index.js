import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './style.scss'

// images 
import image1 from 'images/posts/img1.jpg'
import image2 from 'images/posts/img2.jpg'
import image3 from 'images/posts/img3.jpg'

const recent_post = [
    {
        image: image1,
        title: '6 Ideas for how you can avoid telling lie',
        time: '22 Sep 2019',
        id: 1
    },
    {
        image: image2,
        title: 'The definitive list of digital products you can sell',
        time: '22 Sep 2019',
        id: 2
    },
    {
        image: image3,
        title: 'The definitive list of digital products you can sell',
        time: '22 Sep 2019',
        id: 3
    },
]

const RecentPost = () => {
    return (
        <Grid className='recentPost'>
            <h3 className="cetagoryTitle">Recent Post</h3>
            <ul className="recentPostList">
                {recent_post.map((item, i) => (
                    <li key={i}>
                        <Link to={`/blog-details/${item.id}`}>
                            <Grid className="postImg">
                                <img src={item.image} alt="" />
                            </Grid>
                            <Grid className="postContent">
                                <p>{item.title}</p>
                                <span>{item.time}</span>
                            </Grid>
                        </Link>
                    </li>
                ))}
            </ul>
        </Grid>
    );
}

export default RecentPost;
