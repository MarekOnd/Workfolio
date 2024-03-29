# Webpage with Tailwind and Typescript example
This project tries to setup a basic website with navigation bar system with the help of [Tailwindcss](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/).
It is also configured for [Flowbite](https://flowbite.com/) components and the navbar text is loaded from english.json file so that the project is ready for localization.

This project is currently in an unfinished stage, and there are no plans for further development. Currently trying [HUGO](https://gohugo.io/).

## Prerequisites
<ol>
    <li> npm
    <li> npx
    <li> Tailwind
    <li> Typescript
    <li> Flowbite
</ol>

## How to use
### Build Tailwind
```
npx tailwindcss -i ./src/input.css -o ./dist/output.css
```
For development use ```--watch```.

### Build Typescript
```
npx webpack
```
For development use ```--watch```.
