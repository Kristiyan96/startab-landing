import { Card, Col, Row } from 'react-bootstrap';

const InlineText = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title as="h4">Inline text elements</Card.Title>
                <Card.Text>Styling for common inline HTML5 elements.</Card.Text>
                <Row>
                    <Col>
                        <p>
                            You can use the mark tag to <mark>highlight</mark> text.
                        </p>
                        <p>
                            <del>This line of text is meant to be treated as deleted text.</del>
                        </p>
                        <p>
                            <s>This line of text is meant to be treated as no longer accurate.</s>
                        </p>
                        <p>
                            <ins>This line of text is meant to be treated as an addition to thedocument.</ins>
                        </p>
                        <p>
                            <u>This line of text will render as underlined</u>
                        </p>
                        <p>
                            <small>This line of text is meant to be treated as fine print.</small>
                        </p>
                        <p>
                            <strong>This line rendered as bold text.</strong>
                        </p>
                        <p>
                            <em>This line rendered as italicized text.</em>
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default InlineText;