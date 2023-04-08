<h1 align="center">react-share-on-social</h1>
<p align="center">:smiling_face_with_three_hearts::stuck_out_tongue_winking_eye::money_mouth_face::sunglasses::partying_face:</p>
<p align="center"><b>Native sharing if supported, beautiful fallback if not.</b></p>
<p align="center">A <code>~8kb</code> package for effortless social media sharing, originally forked from <a href="https://www.npmjs.com/package/react-web-share">react-web-share</a>.</p>
<div align="center">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/react-share-on-social">
  <img alt="Maintenance" src="https://img.shields.io/maintenance/yes/2023">
  <img alt="npm" src="https://img.shields.io/npm/v/react-share-on-social">
  <img alt="NPM" src="https://img.shields.io/npm/l/react-share-on-social">
</div>
<div align="center">
  <h3>
    <a href="https://yhn9h.csb.app/">
      Demo
    </a>
  </h3>
</div>
<div align="center">
  <sub>Enhanced with ❤︎ by 
  <a href="https://github.com/sakerhetspolisen">Karl Sellergren</a>, originally built by 
  <a href="https://github.com/harshzalavadiya">
     Harsh Zalavadiya</a>.
</div>
<p></p>
<p></p>
<div align="center">
  <img src="https://user-images.githubusercontent.com/68159964/153582195-e71d6a9a-6109-4d62-8f2f-4aafefe64675.png" alt="react-share-on-social fallback preview" />
</div>

## Features

- Uses the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) for [supported browsers](https://caniuse.com/web-share)
- Copy to clipboard functionality using [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)
- Uses [React Portal](https://reactjs.org/docs/portals.html) to render the component outside the parent DOM hierarchy

## Installation

```bash
npm install react-share-on-social
```

or, if you're using yarn:

```bash
yarn add react-share-on-social
```

## Usage

Passing the `linkFavicon` prop drastically improves UX for devices that use the fallback. Without `linkFavicon`, the fallback renders a grey box instead.

> Note: The Web Share API only works in secure contexts (HTTPS). Read more [here](https://www.w3.org/TR/web-share/#security-and-privacy-considerations).

```js
import React from "react";
import ShareOnSocial from "react-share-on-social";
import favicon from "../assets/favicon.png";

const Example = () => {
  return (
    <ShareOnSocial
      textToShare="Check out this new wardrobe I just found from IKEA!"
      link="https://ikea.com/wardrobes/kalle"
      linkTitle="KALLE Wardorbe which chooses your clothes for you using AI - IKEA"
      linkMetaDesc="Stop going through the agony of choosing clothes that fit the weather and your mood."
      linkFavicon={favicon}
      noReferer
    >
      <button>Share this product</button>
    </ShareOnSocial>
  );
};
```

## Required props

| Property       | Type               | Description                                                                             |
| -------------- | ------------------ | --------------------------------------------------------------------------------------- |
| `textToShare`  | `string`           | The text that appears in the post.                                                      |
| `link`         | `URL`              | The URL to share.                                                                       |
| `linkTitle`    | `string`           | The link title which should correspond to the `<title>` tag.                            |
| `linkMetaDesc` | `string`           | The meta description of the link, should correspond to the `<meta og:description>` tag. |
| `linkFavicon`  | `HTMLImageElement` | A small image which is shown in the header of th popup fallback.                        |

## Optional props

| Property              | Type            | Default                                  | Description                                                                             |
| --------------------- | --------------- | ---------------------------------------- | --------------------------------------------------------------------------------------- |
| `shareTo`             | `Array<string>` | `["facebook", "twitter", ... , "email"]` | A list of all social media channels that should appear in the fallback.                 |
| `noReferer`           | `boolean`       | `false`                                  | If the social media buttons should have a `noreferrer` tag or not.                      |
| `backdropColor`       | `string`        | `rgba(0,0,0,0.4)`                        | The background color of the backdrop.                                                   |
| `closeText`           | `string`        | `Close`                                  | The label of the close button.                                                          |
| `copyToClipboardText` | `string`        | `Copy to clipboard`                      | The label of the copy to clipboard button.                                              |
| `copySuccessText`     | `string`        | `Copied`                                 | The label of the copy to clipboard button after a successful copy.                      |
| `onSocialClick`       | `() => void`    | `() => null`                             | A callback invoked when user clicks on any of the social media buttons in the fallback. |

## Supported socials

The supported props are passed in the sharing URL to each service, and will appear in the post draft.
| Social media | Supported props |  
| ----------- | ----------- |
| Facebook | `link` |
| Twitter | `link`, `textToShare` |
| Whatsapp | `link` |
| Reddit | `link`, `textToShare` |
| LinkedIn | `link`, `linkTitle`, `textToShare` |
| Pinterest | `link` |
| Telegram | `link`, `textToShare` |
| Email | `link`, `textToShare` |

## What is the difference between `react-share-on-social` and `react-web-share`?

- The fallback is more rich with a header and an improved copy-to-clipboard functionality

- Props are restructured for better usability

- Pinterest is supported

- Social media services are opened in a minimal window instead of a new tab

## Contribute

So you want to contribute? Good, the world needs more brave troopers like you. Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated by us and the community.

- If you find a typo, bug or want to add a feature, create an issue or add a pull request with the code you want to add!

- Regarding bugs, please make sure that your issue is:

  - _Reproducible_. Include steps to reproduce the problem.

  - _Specific_. Include as much detail as possible: which device you use, how you have interacted with the website, etc.

  - _Scoped to a Single Bug_. One bug per issue.

## License

[MIT](https://tldrlegal.com/license/mit-license)
