import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { AiFillLike } from 'react-icons/ai'
import { FaCommentAlt } from 'react-icons/fa'
import { store } from '../reduxFolder/store/ConfigureStore'
import { useState } from 'react'

const stores = store()


class ScrollComponent extends Component {
    constructor() {
        super();
        this.clickLike = this.clickLike.bind(this);
        this.state = {
            photos: [],
            loading: false,
            page: 1,
            prevY: 0
        };
    }

    clickLike = (id) => {
        console.log('e', id)
        axios({
            method: 'post',
            url: 'https://writetoslate.herokuapp.com/like',
            data: {
                "id": id
            },
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Authorization': 'Bearer ' + stores.getState().tokens.token,
                'Content-Type': `multipart/form-data`,
            }
        }).then((response) => {
            console.log(response.status)
        }).catch((error) => {
            console.log('error is :- ', error)
        })
    }

    // componentDidMount() {
    //     this.getPhotos(this.state.page);
    // }
    componentDidMount() {
        this.getPhotos(this.state.page);

        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };

        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        );
        this.observer.observe(this.loadingRef);
    }

    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            const lastPhoto = this.state.photos[this.state.photos.length - 1];
            // const curPage = lastPhoto.albumId;
            const curPage = 2;
            this.getPhotos(curPage);
            this.setState({ page: curPage });
        }
        this.setState({ prevY: y });
    }

    getPhotos(page) {
        this.setState({ loading: true });
        axios
            .get(
                `https://writetoslate.herokuapp.com/timeline?page=${page}&limit=10`
            )
            .then(res => {
                this.setState({ photos: [...this.state.photos, ...res.data.timeLines] });
                this.setState({ loading: false });
            });
    }

    render() {

        // Additional css
        const loadingCSS = {
            height: "100px",
            margin: "30px"
        };

        // To change the loading icon behavior
        const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

        return (
            <div className="timeline-container">
                <div style={{ minHeight: "800px" }}>
                    <ul>
                        {this.state.photos.map((user, index) => (

                            <li key={index}>
                                <div className="post-container">
                                    <div className="posts">
                                        <div className="profile-details">
                                            <img className="profile-pic" src={user.profilePic} />
                                            <div className="user-name">{user.username}</div>
                                        </div>
                                        <p className="post-text">{user.text}</p>

                                        {/* {user.image.imageURL ? <img className="post-image" src={user.image.imageURL} height="100px" width="1800px" /> : ''} */}

                                        <div className="image">
                                            {user.image.imageURL ? <img className="post-images" src={user.image.imageURL} /> : ''}
                                        </div>

                                        {/* <div className="comment-likes">
                                            <div className="likes">
                                                <span> {user.Total_Like} </span>
                                                <AiFillLike onClick={() => this.clickLike(user.image._id)} className="like-icon" />
                                            </div>
                                            <div className="comments">
                                                <span> {user.Total_Comment}  </span>
                                                <FaCommentAlt />
                                            </div>

                                        </div> */}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    ref={loadingRef => (this.loadingRef = loadingRef)}
                    style={loadingCSS}
                >
                    <span style={loadingTextCSS}>Loading...</span>
                </div>
            </div>
        );
    }
}

export default ScrollComponent;