import React from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup, Col, Image, Row, Glyphicon } from "react-bootstrap";
import { Link } from "react-router";
import moment from "moment";

import { change } from "../../state/home-filters";
import HomeInfo from './home-info'

moment.locale('pl')

const HomeEvents = ({events, start, change}) => {
  const step = 3

  return (
    <Col xs={12}>
      {
        !events ?
          <div>
            <Row className="home-btn-wrapper">
              <ButtonGroup>
                <Button
                  disabled
                  bsSize="small"
                  className="movies-tag-button-reset">
                  &lt;
                </Button>
                <Button
                  disabled
                  bsSize="small"
                  className="movies-tag-button-reset">
                  &gt;
                </Button>
              </ButtonGroup>
            </Row>
            <Row className="home-event-panel-header">
              <Col xs={12}>
                <h5 className="home-event-description text-center">
                  NADCHODZĄCE PROJEKCJE
                </h5>
              </Col>
            </Row>
            <HomeInfo
              classRow="home-event-panel"
              classH3="home-event-title"
              classH4="home-event-description"
              title="Jeszcze chwila..."
              description="Nasza ekipa montuje filmy."
            />
          </div> :
          events.length === 0 ?
            <div>
              <Row className="home-btn-wrapper">
                <ButtonGroup>
                  <Button
                    disabled
                    bsSize="small"
                    className="movies-tag-button-reset">
                    &lt;
                  </Button>
                  <Button
                    disabled
                    bsSize="small"
                    className="movies-tag-button-reset">
                    &gt;
                  </Button>
                </ButtonGroup>
              </Row>
              <Row className="home-event-panel-header">
                <Col xs={12}>
                  <h5 className="home-event-description text-center">
                    NADCHODZĄCE PROJEKCJE
                  </h5>
                </Col>
              </Row>
              <HomeInfo
                classRow="home-event-panel"
                classH3="home-event-title"
                classH4="home-event-description"
                title="Hmmm... Spróbuj wyszukać jeszcze raz."
                description="Zmień Twoją lokalizację lub odległość."
              />
            </div> :
            <div>
              <Row className="home-btn-wrapper">
                <ButtonGroup>
                  <Button
                    id="home-btn-left"
                    bsSize="small"
                    bsStyle="info"
                    className="movies-tag-button-reset"
                    onClick={() => change(-step, events)}>
                    &lt;
                  </Button>
                  <Button
                    id="home-btn-right"
                    bsSize="small"
                    bsStyle="info"
                    className="movies-tag-button-reset"
                    onClick={() => change(step, events)}
                  >
                    &gt;
                  </Button>
                </ButtonGroup>
              </Row>
              <Row className="home-event-panel-header">
                <Col xs={12}>
                  <h5 className="home-event-description text-center">
                    NADCHODZĄCE PROJEKCJE
                  </h5>
                </Col>
              </Row>
              {events.slice(
                start, start + step
              ).map(
                event => (
                  <div>


                    <Link
                      key={event.id}
                      to={"/event/" + event.id}>
                      <Row className="home-event-panel">
                        <Col xs={12} key={event.id}>
                          <h3 className="home-event-title rbc-ellipsis">{event.movieTitle}</h3>
                          <Row className="home-centered-vert">
                            <Col xs={3}>
                              <Image
                                src={event.moviePicture}
                                alt={event.movieTitle}
                                responsive
                              />
                            </Col>
                            <Col
                              className="home-event-description"
                              xs={9}>
                              <h4>
                                <Glyphicon glyph="time"/> {' '}
                                {moment(event.start).format('dddd, D MMMM, H:mm')}
                              </h4>
                              <h4>
                                <Glyphicon glyph="map-marker"/>
                                {' '}
                                {event.distance} m
                              </h4>
                              <div>
                                <h4 >
                                  <Glyphicon glyph="bullhorn"/>
                                  &nbsp;
                                </h4>
                                <h6>{event.desc}</h6>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Link>
                  </div>
                )
              )}
            </div>
      }
    </Col>
  )
}

export default connect(
  state => ({
    start: state.eventsFilters.start
  }),
  dispatch => ({
    change: (value, eventsLength) => dispatch(change(value, eventsLength))
  })
)(HomeEvents)

HomeEvents.PropTypes = {
  events: React.PropTypes.array.isRequired,
  step: React.PropTypes.number.isRequired,
  start: React.PropTypes.number.isRequired,
  change: React.PropTypes.func.isRequired
}
