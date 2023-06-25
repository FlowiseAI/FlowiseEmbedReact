<!-- markdownlint-disable MD030 -->

# Flowise Embed React

React library to display flowise chatbot on your website

![Flowise](https://github.com/FlowiseAI/FlowiseChatEmbed/blob/main/images/ChatEmbed.gif?raw=true)

## How to Use

In your project, install:

```bash
npm install flowise-embed flowise-embed-react
```

or

```bash
yarn add flowise-embed flowise-embed-react
```

Then use it:

```tsx
import { FullPageChat } from "flowise-embed-react";

const App = () => {
  return (
    <FullPageChat
      chatflowid="your-chatflow-id"
      apiHost="http://localhost:3000"
      style={{ width: "100%", height: "600px" }}
    />
  );
};
```
