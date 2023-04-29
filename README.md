# QuickSpeedTTV

A bookmarklet that adds one-keypress video playback speed settings for VODs on [Twitch.tv](https://twitch.tv/) using a keyboard's number pad.

| Numpad Key | Playback Speed |
| :--------- | -------------: |
| Numpad 0   |             1x |
| Numpad 1   |          1.25x |
| Numpad 2   |           1.5x |
| Numpad 3   |             2x |

## But Why?

I made this when I just had a newborn and it was hard for me to find any time to play video games, let alone do [my regular Twitch streams](https://twitch.tv/AlfaTrion) so I had to resort to watching VODs of my friends playing games. The only time I ended up getting to watch them was during late night feeds for the baby.

Sometimes if the game was grindy or the streamer wasn't speaking or no story elements were happening, I'd want to not waste precious VOD watching time so I would want to speed things up at those times. Using the mouse (or even tabbing around with the keyboard) was too cumbersome, especially while holding a starving newborn who would barely make it 1 second w/o crying if I took the bottle away, so I came up with this shortcut/hotkey idea.

## How to Use

1. Create a new bookmark in your web browser of choice which allows bookmarklets, such as Google Chrome.
1. Give the bookmark a name.
    - e.g. `script: QuickSpeedTTV`
1. For the URL, type `javascript:` as the prefix and paste the entire _minified_ script after that. Now it's a bookmarklet!
    - `quickSpeedTTV.min.js` contains the minified script
1. Navigate Twitch to a VOD (video on demand) page.
1. Activate your bookmarklet as you would normally use a bookmark.
1. Use the number pad keys as indicated in the table above.
1. Follow me on Twitch (https://twitch.tv/AlfaTrion) and let me know how you like it **OR**
1. Report any issues you find.
    - Please be detailed so I can try to recreate the same issue you are having!

## Future Updates

Originally my plan was to make this a browser extension but I barely have time to code so I quickly made this script and thought a bookmarklet is good _for now_.

### Current Roadmap Items (Unordered)

-   ~~Minified version~~ [v0.0.2](https://github.com/farhanjiwani/QuickSpeedTTV/releases/tag/v0.0.2)
-   Migrate to `terser` from `minify` to:
    -   remove in-code aids
    -   get better minification
    -   increase source readability
-   Fix jumpiness outside of full-screen view and theatre view
-   Error handling
-   Add icon to player controls to show script is running
-   A way to disable the script w/o refreshing the page

#### Chores

-   add ESLint
-   add Prettier
-   add tests (any suggestions? `mocha`, `jest`?)
-   pre-commit, pre-push hooks

### Ideal Features

-   YouTube version (although `Shift + >` already works well there)
-   Chrome and Firefox browser extension w/configurable settings
-   Less verbose in the console logs
-   Add slower speed settings

## Known Issues

-   When pressing keys outside of full screen or theatre view modes, the VOD page may jump or scroll down.
