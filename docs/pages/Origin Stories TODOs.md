# Overview

This keeps track of the TODOs and plan design for our first content page

## TODO NEXT STEPS

-   Add new Tabbed interface to header
-   Fix Rubik Dirt Font
-   SVG files for slider are really huge causing slow loading of fonts and other things. Ping Katrina for help here
-   Export any large SVGs as PNGs at web format, hook up srcsets

## TODO Stretch Goals

-   Test Voiceover on Mac to see
-   Test landmark navigations
-   TOC isn't centered when we're scrolling down, fix to adjust as we scroll down, should this be a sticky that offsets at some percentage so it scrolls up then sticks?
-   Set max width on articles otherwise it looks real weird
-   Fix Clovis Point Tooltip PNG width to be narrower around arrows

## Components used

### Responsive image.

-   Has max width and is centered
-   If shrunk smaller than max width it should shrink but preserve aspect ratio
-   Preserve aspect ration is contain
-   Should each image height be manually set or is it the same across the board?

### Video componennt

-   Height of 830 x 464 in containing div
-   width == 100%, height= 100%

### Tooltips

-   Implement around words on first page

### TOC component

Needs custom image background with gradient behind it, background image with gradient cooked in?

### Slider component

### Video wall

Update all fonts in sections to match the Adobe XD
Move the story content to it's own data file for each page
Create custom video player component
Add videos and test player component
Create slider component
Figure out how to make the section svg images loaded by Next JS responsive width wise

Add testcases

### background

Background page color has a gradient to it
