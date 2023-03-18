# TODO

-   Once the play button is clicked, show controls!
-   Test clicking again pauses it
-   Controls allow you to download the video by default?

-   6 large videos on the site
-   8 smaller tiktok style videos on the site

## Compression

-   Compress MP4 as we get them. I'm using handbrake to compress these into smaller filesizes
-   I've used Email 25MB 3 Minutes 720p30 for now with web optimized and iPod5G support (turn that off?)

Test with disabled cache to see how fast the page loads...

# Is there a way to build a streaming video version of the Video widget?

https://medium.com/canal-tech/how-video-streaming-works-on-the-web-an-introduction-7919739f7e1

https://www.npmjs.com/package/react-player#multiple-sources-and-tracks if we post the video to youtube, this will allow us to configure segments..
Much cheaper than implementing our own streaming segment player

Might need to split the video into segments so we don't have to download the whole video
https://medium.com/canal-tech/how-video-streaming-works-on-the-web-an-introduction-7919739f7e1

Automatic captions

How will I manage the little TikTok videos, ideally we don't want these on youtube
