import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonToolbar, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router'
import moment from 'moment'

import { change } from '../../state/home-filters'

moment.locale('pl')

const HomeEvents = ({events, start, change}) => {
  const step = 3

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <ButtonToolbar className="home-btn-container">
          <Button
            bsSize="small"
            onClick={() => change(-step, events)}>Poprzednie Projekcje
          </Button>
          <Button
            bsSize="small"
            onClick={() => change(step, events)}>Następne Projekcje
          </Button>
        </ButtonToolbar>
      </div>
      {
        !events ?
          null :
          events.length === 0 ?
            <Row className="home-event-panel">
              <Row >
                <Col xs={12} md={12}>
                  <h3 className="home-event-title rbc-ellipsis">
                    Hmmm... Spróbuj wyszukać jeszcze raz.
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col className="home-event-description" xs={12}>
                  <h4 className="text-right">
                    Zmień Twoją lokalizację lub odległość.
                  </h4>


                </Col>
              </Row>
            </Row> :
            events.slice(
              start, start + step
            ).map(
              event => (
                <Link key={event.id} to={"/event/" + event.movieId}>
                  <Row className="home-event-panel">
                    <Row >
                      <Col xs={12} md={12} key={event.id}>
                        <h3 className="home-event-title rbc-ellipsis">
                          {event.movieTitle}
                        </h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3}>
                        <Image
                          src={event.moviePicture}
                          alt={event.movieTitle}
                          responsive
                        />
                      </Col>
                      <Col className="home-event-description" xs={9}>
                        <h4 className="text-right">
                          {moment(event.start).format('dddd, D MMMM, H:mm')}
                        </h4>
                        <p>Odległość: {event.distance} m</p>
                        <h6>{event.desc}</h6>
                      </Col>
                    </Row>
                  </Row>
                </Link>
              )
            )
      }
    </div>
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
