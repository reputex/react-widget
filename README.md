# ReputeX React Widget

**Features**:

- Simple plug-and-play use.
- Easiest way to Display ReputeX Scores to your users.
- Fully **Typescript** ready out-of-the box.

# 🚀 Quick start

If you're new to ReputeX, check the [quickstart guide in the official docs](https://docs.reputex.io/) on how to get started.

## 1. Install ReputeX React Widget

Install the package via `npm`:

```shell
npm install @reputex/react-widget
```

or `yarn`:

```shell
yarn add @reputex/react-widget
```

## 2. Import and Use the widget

After your dependency is added, you simply need to import and initialize ReputeXWidget.

Import ReputeXWidget:

```js
import { ReputeXWidget } from "@reputex/react-widget";
```

> **⚠️ Warning**: Make sure to store your api key and secret only in a `.env` file and reference it from there.

```javascript
<ReputeXWidget
    accessKey="31e4a631-be27-4d0a-86f0-f22abbc6f88e"
    apiSecret="65a31dba29639e719988c8d427357cf84b5215fb63a37fdbd74ca92cd0edf857"
    userAddress="0x5e873a671cc73ac1fd30e5fb66e646a34a175bab"
    mode
    visibility
/>
```

Please refer to our [extensive docs](https://docs.reputex.io/) for any additional info.