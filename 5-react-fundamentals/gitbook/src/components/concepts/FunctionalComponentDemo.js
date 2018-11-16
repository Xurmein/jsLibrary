import React from 'react';
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, 
    Button, Container, Row, Col
} from 'reactstrap'; // eslint-disable-next-line
 //FYI: in JSX elements can have only have one child
const FunctionalComponentDemo = () => {
    return (
        <Container className="main">
            <Row>
                <Col xs="12">
                    <h2>Functional Components, details thereof describing their use and qualities for web development using React:</h2>
                    <dl>
                        <dt>Rendering</dt>
                        <dd>Rendering of information without using or changing state.</dd>
                        <dd>Known as presentational components.</dd>
                        <dt>The Chunks</dt>
                        <dd>Great for small, simple code-chunks</dd>
                        <dd>Sometimes called dumb components</dd>
                        <dt>Special things</dt>
                        <dd>No 'this' keyword, unlike class components</dd>
                        <dd>Often used as child components that will receive 'props' (aka properties) from a Class Component (parent).</dd>
                    </dl>
                </Col>
            </Row>
            <hr />
            <h1>Challenge Section</h1>
            <Row>
                <Col md="6">
                    <HelloWorldFatArrow className="logo" />
                </Col>
                <Col md="6">
                    <HelloWorld />
                </Col>
            </Row>
        </Container>              
    );
};

export default FunctionalComponentDemo;

const HelloWorld = function () {
    return (
        <div>
            <Card>
            <img width="100%" height="220px" src="https://media.giphy.com/media/5xtDarrD3UV3Qk6N00E/giphy.gif" alt="Card cap" />
                <CardBody>
                    <CardTitle>Here's our boy in Bloodsport</CardTitle>
                    <CardSubtitle>the pinnacle of his life's work</CardSubtitle>
                    <CardText><pre>and he didn't even steal the show...</pre></CardText>
                    <Button>Donald Gibbs!</Button> {/*link to the real star of the showhttps://www.imdb.com/name/nm0316455/ */}
                </CardBody>
            </Card>
        </div>
    )
};

const HelloWorldFatArrow = () => 
    <div>
        <Card>
            <img width="100%" height="220px" src="http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2016/06/jean-claude-van-damme-predator.jpg?itok=ate-yjbc" alt="Card cap" />
            <CardBody>
                <CardTitle>This is Jean-Claude Van Damme</CardTitle>
                <CardSubtitle>Not in Bloodsport</CardSubtitle>
                <CardText><pre>should he have played the Predator?</pre></CardText>
                <Button>Dubious sources!</Button> {/*link to the article: http://www.denofgeek.com/us/movies/predator/240507/when-jean-claude-van-damme-played-predator */}
            </CardBody>
        </Card>
    </div>