import { types as twitter } from 'twitter-api-sdk'

export type Tweet = twitter.components['schemas']['Tweet']
export type User = twitter.components['schemas']['User']
export type Timeline =
  twitter.components['schemas']['GenericTweetsTimelineResponse']
