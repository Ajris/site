import React from 'react';
import {Container, Image, Row} from "react-bootstrap";
import '../../App.css';
import {getAllTechnologies} from "../../utils/APIUtils";

export default class Technologies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            technologies: [],
        };
    }

    componentDidMount() {
        getAllTechnologies()
            .then((result) => {
                let i = 0;
                let technologies = result.map((item) =>
                    <Image key={i++} src={require("../../assets/technologies/" + item.name)}
                           style={{margin: '30px', height: '130px'}}/>
                );

                this.setState({technologies: technologies});
            }).catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <div className={'mx-4 my-3'}>
                    <p className={'topic text-center'}>Technologies</p>
                </div>
                <Container>
                    <Row className="justify-content-md-center">
                        {this.state.technologies}
                    </Row>
                </Container>
            </div>
        )
    }
}
