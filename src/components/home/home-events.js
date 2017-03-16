import React from 'react'
import {connect} from 'react-redux'
import { Button, ButtonToolbar, Panel, ListGroupItem } from 'react-bootstrap'
import moment from 'moment'

import { change } from '../../state/home-filters'

moment.locale('pl')

const HomeEvents = ({ events, start, change }) => {
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
                    <Panel
                      bsStyle="info"
                      defaultExpanded
                      key={event.id}
                      header={event.title}
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                      {moment(event.start).format('dddd, D MMMM, H:mm')}
                      <ListGroupItem
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                        {event.desc}
                      </ListGroupItem>
                      <ListGroupItem>
                        Lokalizacja: {event.dist}
                      </ListGroupItem>
                    </Panel>
                  )
                )
      }
    </div>
  )
}

export default connect(
  state => ({
    start: state.homeFilters.start
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
