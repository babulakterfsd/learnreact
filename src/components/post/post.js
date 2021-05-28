import React from 'react';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'


class Post extends React.Component {
    render() {
        return (
            <>
              <div className="singlepostcontainer pt-4 pb-1 px-2 shadow-lg" style={{background: '#2E5C5C', borderBottomRightRadius: '50px'}}>
                 <div className="post mb-5">
                 <Card>
                    <Card.Img variant="top" src="https://picsum.photos/200/100" />
                    <Card.Body>
                        <Card.Title className="mb-0">How to be a good muslim?</Card.Title>
                       <p className="mt-1 mx-2 mb-4">posted by <u>Babul Akter</u> on {new Date().toLocaleDateString()}, {new Date().toLocaleTimeString()} </p>
                        <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illo voluptatem! Quibusdam accusamus tempora vero? 
                        <a href="https://blog.nanulakter.com" className="mx-3 text-decoration-none">Read more</a>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="d-flex justify-content-between">
                        <i className="fa fa-thumbs-up">(0)</i>
                        <i className="fa fa-thumbs-down">(0)</i>
                    </Card.Body>
                    </Card>
                 </div>
              </div>
            </>
        )
    }
}

export default Post;