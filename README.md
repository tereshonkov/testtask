This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the storybook:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
# or
bun storybook
```


## Components

Input, Sidebar, Toast

## Input

Component has few props:
variants: "password" | "text" | "email" | "number"
label: text label for input
clearable: this prop is render button "x" for reset input
error: this prop have any styles for UI
value: value for input
onChange: function for value
disbled: disble input

## variant "text" with prop clearable
![Input Name example](public/name-wth-btn.png)
## variant "text" without prop clearable
![Input Name example](public/name-empty-input.png)
## variant "number"
![Input Number example](public/input-number.png)
## variant "email"
![Input Email example](public/email.png)
## variant "password" is not visible value
![Input Password example](public/password-not-visible.png)
## variant "password" is visible value
![Input Password example](public/password-visible.png)
## variant "error"
![Input Error example](public/input-error.png)

## Toast
Toast have 4 variants: error, info, wraning, success. Component toast have props: type: "success" | "error" | "info" | "wraning", message: your message, duration: how many live render component, closable: render button close component, onClose function close

## toast "error"
![Input Error example](public/toast-error.png)
## toast "success"
![Input Success example](public/toast-success.png)
## toast "info"
![Input Info example](public/toast-info.png)
## toast "wraning"
![Input Wraning example](public/toast-wraning.png)
