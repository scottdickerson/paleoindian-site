# Top-level organization

/home
/origin-stories
/ice-age-texas
/daily-life
/educator-guide
/txdot-and-tribes
/about

## TODO

-   BUG: Default video html element always shows loading spinner when returning to page
-   Figure out best way to load nitial video without pop of content. Small video

## Header component

BUG: Header Looks bad on small phone screen pops part off screen, make it look nice!
TODO: Need to add scrollable content to all the sample pages so we can test scrolling with the header
TODO: Make header smaller on phone screens make it scroll horizontally and keep the second level as we scrolldown
TODO: Should we have the selected Nav be wrapped in an H1 (or a hidden H1) to let screen readers know the context of their page?

### Questions:

Does it go away or minimize as I'm scrolled down? At least on a phone screen we'll probably need this

## Scrollable TOC

TODO: Add horizontal support with SCSS variable detecting whether it is horizontal, vertical or hidden. Horizontal support should be
backgrounded with the page itself having a gradient at bottom to indicate that it's at the bottom

BUG: Where if you refresh the page but the section isn't big enough for the header it doesn't select the TOC entry.

Component that renders a series of hrefs. It is absolutely positioned on the right side of the screen, but what if they're screen size is not tall enough?
Is the component centered if the screen size is really small or does it expand/collapse to fit the screen height? If the screen height is really short, it should hide probably.

Accessibility wise
Nav with Ordered list child. each is a href with a target

On click we override the default href and instead scroll to the selected section element

Intersection observer that changes the selected state of the toc based on when the matching href has scrolled into view

There's a currently selected href state that changes the look and feel that gets set as the user scrolls down in the left pane

## Story Page

Each should be it's own Section
Each section has an H2
Summary Description
Need to figure out how to add links within my json and convert them to HTML that is styled with the correct link styling
BUG: Why isn't my HTML Sanitizer working?

## Footer component
