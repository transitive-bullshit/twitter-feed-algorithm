import { Timeline, User } from './types'

export abstract class TwitterAlgorithmicFeed {
  /**
   * Pseudo-code for understanding how Twitter's algorithmic feed works.
   */
  async getAlgorithmicTimelineForUser(user: User): Promise<Timeline> {
    const rawTimeline = await this.getRawTimelineForUser(user)
    const relevantTweets = await this.getPotentiallyRelevantTweetsForUser(user)

    const mergedTimeline = await this.mergeTimelinesForUserBasedOnRelevancy(
      user,
      rawTimeline,
      relevantTweets
    )

    return this.injectAdsForUserIntoTimeline(user, mergedTimeline)
  }

  /**
   * Returns a reverse-chronological stream of tweets from users directly
   * followed by a given user.
   */
  abstract getRawTimelineForUser(user: User): Promise<Timeline>

  /**
   * Returns a stream of tweets ordered by relevancy for a given user at a
   * given time.
   *
   * This will only consider tweets from users the given user is not already
   * following.
   */
  abstract getPotentiallyRelevantTweetsForUser(user: User): Promise<Timeline>

  /**
   * Returns a stream of tweets ordered by relevancy to a given user, taking
   * into account both their raw timeline of latest tweets and a subset of
   * the network graph timeline containing potentially relevant tweets.
   */
  abstract mergeTimelinesForUserBasedOnRelevancy(
    user: User,
    rawTimeline: Timeline,
    relevantTweets: Timeline
  ): Promise<Timeline>

  /**
   * Returns a stream of tweets which injects ads into a given timeline for a
   * given user.
   */
  abstract injectAdsForUserIntoTimeline(
    user: User,
    timeline: Timeline
  ): Promise<Timeline>
}
