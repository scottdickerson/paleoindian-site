# Overview

This keeps track of the TODOs and plan design for our first content page

## TODO NEXT STEPS

-   Fix the bug where force reloading a page with a section title not visible doesn't select anything
-   Add the Tooltip component over the text in details (probably takes a component instead of a string)
-   Get the latest images of the slider, should they have text embedded in them?
-   Can I use the NextJS Image tag for the Slider image instead of the standard img tag?
-   Fonts take multiple reloads to be applied correctly to the widgets when I'm running on vercel. Is this some kind of race condition do I need to import them somewhere else.
-   TODO: Should probably split a responsive image component out that wraps a parent div around the NextJS Image with the correct width and the Image correctly.
-   Tooltips inside description
-   What's wrong with the font import? Why do I have to refresh once?

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
