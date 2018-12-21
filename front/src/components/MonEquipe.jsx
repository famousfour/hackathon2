import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScoreEquipe from './ScoreEquipe';
import BadgeEquipe from './BadgeEquipe';
import EquipeOB from './EquipeObjectif';
import "../styles/MonEquipe.css";



class MonEquipe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Container>
          <div className="Team">
            <Row>
              <Col className="ScoreEquipe" xs="12"> <ScoreEquipe /> </Col>
            </Row>
          </div>
          <Row>

          </Row>
          <Row>
            <Col className="BadgeEquipe" xs="12"> <BadgeEquipe /> </Col>
            <EquipeOB />
          </Row>
        </Container>
      </div>
    );
  }
}


export default MonEquipe;