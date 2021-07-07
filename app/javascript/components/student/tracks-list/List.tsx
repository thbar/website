import React from 'react'
import { Track } from './Track'
import { StudentTrack } from '../../types'

export const List = ({ data }: { data: StudentTrack[] }): JSX.Element => {
  if (data.length === 0) {
    return <p>No results found</p>
  }

  const joinedTracks = data.filter((track) => track.isJoined)
  const unjoinedTracks = data.filter((track) => !track.isJoined)

  return (
    <div className="--tracks">
      {joinedTracks.length !== 0 ? (
        <div className="joined-tracks">
          {joinedTracks.map((track) => {
            return <Track key={track.slug} track={track} />
          })}
        </div>
      ) : null}
      {unjoinedTracks.length !== 0 ? (
        <div className="unjoined-tracks">
          {unjoinedTracks.map((track) => {
            return <Track key={track.slug} track={track} />
          })}
        </div>
      ) : null}
    </div>
  )
}
