# Twitter Feed Algorithm

> TypeScript code exploring what an open source version of Twitter's algorithmic feed might look like.

## Intro

This repo contains code samples for a series of articles I'm working on with the aim of exploring what “open sourcing Twitter's algorithm” might look like from a more practical perspective.

## Goals, Non-Goals, and Caveats

- We are only focused on Twitter.
  - We will not consider the more general space of algorithmic recommendation engines or other social networks.
- We are only focused on the Twitter's core algorithmic feed.
  - Other algorithmically-generated recommendations such as “Who to follow”, “Topics you may be interested in”, “Search”, “Trending”, etc are all out of scope for now.
  - Any work towards open sourcing aspects of the Twitter’s core feed algorithm are likely to naturally extend to open sourcing these other recommendation algorithms in the future.
- We are only focused on high-level business logic and pseudocode.
  - Our goal is to drive a more transparent discussion around the Twitter feed’s core business logic and data models without worrying too much about the underlying engineering complexity.
  - The engineering challenges inherent in running a global, low-latency, highly reliable production system like Twitter are immensely important in practice but will be considered mostly out of scope for the purposes of this discussion.
  - It’s important to keep in mind, however, that there is an incredible amount of engineering complexity hidden behind a platform like Twitter. We won’t be diving into databases, services, machine learning techniques, networking, infrastructure, devops, etc.
- We will defer to the core data models from [v2 of Twitter’s public API](https://developer.twitter.com/en/docs/twitter-api) wherever possible, including the [Tweet](https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet) and [User](https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user) objects.
  - Twitter likely uses many different abstractions for these resources under the hood, but for the purposes of an open source algorithm, we should remain consistent with the resource models published by the latest version of [their public API](https://developer.twitter.com/en/products/twitter-api).
- This project uses TypeScript because it's what I'm most comfortable with, but it could easily be ported to other languages.
- Any real open source solution would need to come from Twitter itself.
  - E.g., you can consider this project for education purposes only.

## License

MIT © [Travis Fischer](https://transitivebullsh.it)

Support my open source work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
