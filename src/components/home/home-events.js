import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonToolbar, Panel, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import moment from 'moment'

import { change } from '../../state/home-filters'

moment.locale('pl')

const HomeEvents = ({events, start, change}) => {
  const step = 3

  return (
    <div className="home-table">

      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}
      >
        <ButtonToolbar style={{
          paddingBottom: 9
        }}>
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
            <Panel header='Brak wydarzeń w zasięgu wyszukiwania.'
                   bsStyle="danger">
              Wyszukaj wydarzenia w większej odległości od Twojej lokalizacji.
            </Panel> :
            events.slice(
              start, start + step
            ).map(
              event => (
                <Link key={event.id} to={"/event/" + event.movieId}>
                  <Row >
                    <Col className="movie-title" xs={12} md={12} key={event.id}>
                      <h3 className="title rbc-ellipsis">{event.movieTitle}</h3>
                    </Col>
                  </Row>
                    <Col className="movies-list-movie movie-description" xs={4}>
                      <img src={event.moviePicture} alt={event.movieTitle}/>
                    </Col>
                    <Col className="movie-description" xs={8}>
                      <p className="text-right">
                        {moment(event.start).format('dddd, D MMMM, H:mm')}
                      </p>
                      <p className="rbc-ellipsis">{event.desc}</p>
                      <p>Odległość: {event.distance} m</p>
                    </Col>

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
