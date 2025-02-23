
# React Video Meeting App

This is a simple React-based video call application that allows users to join video calls using ZegoCloud's prebuilt UI kit.

## Features
- Users can join a video call by entering their name.
- Uses ZegoCloud UIKit for video conferencing.
- Generates a unique meeting link for easy sharing.
- Implements 1-on-1 video calling.
- Responsive and user-friendly UI.

## Tech Stack
- React.js
- React Router
- ZegoCloud UIKit
- CSS for styling

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-project-folder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Project Structure
```
├── src
│   ├── components
│   │   ├── HomePage.js
│   │   ├── VideoPage.js
│   ├── App.js
│   ├── constants.js
│   ├── App.css
│   ├── index.js
├── public
├── package.json
├── README.md
```

## Usage
1. Open the application in your browser.
2. Enter your name and click **Join** to start a meeting.
3. Share the generated meeting link to invite others.

## Environment Variables
Make sure to set your ZegoCloud credentials in `constants.js`:
```js
export const APP_ID = 447102154;
export const SERVER_SECRET = "085d297fec4707e478acbb7d68508fb8";
```

## Deployment
You can deploy this application using Vercel, Netlify, or any static hosting provider.

## License
This project is licensed under the MIT License.

