# Introduction to Buzz My Day Application

This app allows users to find their favourite instant coffee, read and write reviews, view coffee prices, and rate coffee

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Why React?

source: GeeksforGeeks. (2022). React VS Angular VS Vue - Which Framework is the Best? [online] Available at: https://www.geeksforgeeks.org/react-vs-angular-vs-vue-which-framework-is-the-best/.

For this web application React will be used over its counterparts Vue.js and Angular. According to the source above React is a javascript library for user interfaces. Angular in comparison is a framework that uses a regular DOM, while Vue which is considered a progressive framework was created to be a better version of Angular with a custom tool. In terms of performance React is known for fast performance due to the virtual DOM implementation, React is also very flexible. In comparison Angular's performance can vary depending on how complex the app is and how its implemented. While Vue also as a high performance capacity it is not as well known as React. Therefore, as React is well known which will be useful for troubleshooting and learning purposes, is flexible and has a high performance capibility it will be used instead of Vue and Angular.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Product access:

The Buzz My Day Application will be a standalone application hosted on a remote server and accessible to users through a web browser.

## Project Dependencies

This project relies on the following which are explained in detail below:

-   axios
-   css
-   react
-   react-dom
-   data-fns
-   react-router
-   react-router

## App Functions:

• User registration and login
• Search function for coffees
• Write, read, update, and delete reviews
• Create, read, update, and delete posts
• Save coffees to a favourites list

## Style Guide

This application uses the Prettier formatter as its style guide.

## Operating design:

• Web Browser: The web app will be accessible through Chrome, Safari, and Internet Explorer browsers.
• Responsive Design: The application will be designed using a mobile-first approach so that the web app can be accessed on tablets, mobiles, and desktop screens
• Cloud-based-server: Render will be used to deploy the application.
• Frontend: To create the frontend React will be used through vite.
• Database Deployment: To deploy the database MongoDB Cloud Atlas will be used.

## Style Guide

This application uses the Prettier formatter as its style guide. Prettier is being used in this applicationto help maintain code consistency throughout the JavaScript project. Follow the instructions in step 6 for VS code to install prettier: https://www.geeksforgeeks.org/how-to-set-up-prettier-in-your-javascript-typescript-project/.

Licensing and Ethics:

Source: npm. (2024). prettier. [online] Available at: https://www.npmjs.com/package/prettier.

Prettier has 0 dependencies and is under the MIT license which is posted below in this

#### MIT LICENSE:

```
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### React and react-dom

source: npm. (n.d.). react. [online] Available at: https://www.npmjs.com/package/react.

source: npm. (n.d.). react. [online] Available at: https://www.npmjs.com/package/react-dom

React is a JavaScript library that will be used to create the user interface for this web application and it will be used along with react-dom to act as an entry to the DOM and for rendering.

React according to the first source above has 0 dependencies or dev dependencies. To install react follopw the instructions in the following link https://www.npmjs.com/package/react.

React-dom according to the second source has one dependency which is scheduler. To install follow the instructions in the following link:

Licensing and Ethics: React and react-dom are under the Mit license which can be found earlier in the Read Me. As this is an open license there is no ethical concerns about the use of React and react-dom in this application as I have acknowledged that React is under the MIT license, in accordance with the license requirements.

### React-icon

source: npm. (2023). react-router. [online] Available at: https://www.npmjs.com/package/react-router.

Has been used where appropriate to import coffee router throughout the project. According to the source above it has zero dependencies and dev dependencies. To install follow instructions in the following link:https://www.npmjs.com/package/react-router.

Licensing and Ethics: react-router is under the Mit license which can be found earlier in the Read Me. As this is an open license there is no ethical concerns about the use of react-router in this application as I have acknowledged that it is under the MIT license, in accordance with the license requirements.

### react-router

source:npm. (n.d.). react-router. [online] Available at: https://www.npmjs.com/package/react-router.

This app has been used to create routers throughout the application according to the source above it has the following depedencies:

-   @types/cookie
-   cookie
-   set-cookie-parser
-   turbo-stream

### Dev dependencies

-   @types/set-cookie-parser
-   react
-   react-dom
-   rimraf
-   tsup
-   typescript
-   wireit

To install react-router follow the instructions in the following link: https://www.npmjs.com/package/react-router

Licensing and Ethics: react-router is under the Mit license which can be found earlier in the Read Me. As this is an open license there is no ethical concerns about the use of react-router in this application as I have acknowledged that it is under the MIT license, in accordance with the license requirements.

### VS code built in css

Css will be used to add styling to the application and is already built into VS code source code is under the MIT licence which has already been posted while VS code is under the following license

```
MICROSOFT SOFTWARE LICENSE TERMS
MICROSOFT VISUAL STUDIO CODE
These license terms are an agreement between you and Microsoft Corporation (or based on where you live, one of its affiliates). They apply to the software named above. The terms also apply to any Microsoft services or updates for the software, except to the extent those have different terms.

IF YOU COMPLY WITH THESE LICENSE TERMS, YOU HAVE THE RIGHTS BELOW.

INSTALLATION AND USE RIGHTS.
General. You may use any number of copies of the software to develop and test your applications, including deployment within your internal corporate network.
Demo use. The uses permitted above include use of the software in demonstrating your applications.
Third Party Components. The software may include third party components with separate legal notices or governed by other agreements, as may be described in the ThirdPartyNotices file accompanying the software.
Extensions. The software gives you the option to download other Microsoft and third party software packages from our extension marketplace or package managers. Those packages are under their own licenses, and not this agreement. Microsoft does not distribute, license or provide any warranties for any of the third party packages. By accessing or using our extension marketplace, you agree to the extension marketplace terms located at https://aka.ms/vsmarketplace-ToU.
DATA.
Data Collection. The software may collect information about you and your use of the software, and send that to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may opt-out of many of these scenarios, but not all, as described in the product documentation located at https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting. There may also be some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with Microsoft’s privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.
Processing of Personal Data. To the extent Microsoft is a processor or subprocessor of personal data in connection with the software, Microsoft makes the commitments in the European Union General Data Protection Regulation Terms of the Online Services Terms to all customers effective May 25, 2018, at https://docs.microsoft.com/legal/gdpr.
UPDATES. The software may periodically check for updates and download and install them for you. You may obtain updates only from Microsoft or authorized sources. Microsoft may need to update your system to provide you with updates. You agree to receive these automatic updates without any additional notice. Updates may not include or support all existing software features, services, or peripheral devices. If you do not want automatic updates, you may turn them off by following the instructions in the documentation at https://go.microsoft.com/fwlink/?LinkID=616397.
FEEDBACK. If you give feedback about the software to Microsoft, you give to Microsoft, without charge, the right to use, share and commercialize your feedback in any way and for any purpose. You will not give feedback that is subject to a license that requires Microsoft to license its software or documentation to third parties because we include your feedback in them. These rights survive this agreement.
SCOPE OF LICENSE. This license applies to the Visual Studio Code product. Source code for Visual Studio Code is available at https://github.com/Microsoft/vscode under the MIT license agreement. The software is licensed, not sold. This agreement only gives you some rights to use the software. Microsoft reserves all other rights. Unless applicable law gives you more rights despite this limitation, you may use the software only as expressly permitted in this agreement. In doing so, you must comply with any technical limitations in the software that only allow you to use it in certain ways. You may not
reverse engineer, decompile or disassemble the software, or otherwise attempt to derive the source code for the software except and solely to the extent required by third party licensing terms governing use of certain open source components that may be included in the software;
remove, minimize, block or modify any notices of Microsoft or its suppliers in the software;
use the software in any way that is against the law;
share, publish, rent or lease the software, or provide the software as a stand-alone offering for others to use.
SUPPORT SERVICES. Because this software is “as is,” we may not provide support services for it.
ENTIRE AGREEMENT. This agreement, and the terms for supplements, updates, Internet-based services and support services that you use, are the entire agreement for the software and support services.
EXPORT RESTRICTIONS. You must comply with all domestic and international export laws and regulations that apply to the software, which include restrictions on destinations, end-users, and end use. For further information on export restrictions, see https://www.microsoft.com/exporting.
APPLICABLE LAW. If you acquired the software in the United States, Washington law applies to interpretation of and claims for breach of this agreement, and the laws of the state where you live apply to all other claims. If you acquired the software in any other country, its laws apply.
CONSUMER RIGHTS; REGIONAL VARIATIONS. This agreement describes certain legal rights. You may have other rights, including consumer rights, under the laws of your state or country. Separate and apart from your relationship with Microsoft, you may also have rights with respect to the party from which you acquired the software. This agreement does not change those other rights if the laws of your state or country do not permit it to do so. For example, if you acquired the software in one of the below regions, or mandatory country law applies, then the following provisions apply to you:
Australia. You have statutory guarantees under the Australian Consumer Law and nothing in this agreement is intended to affect those rights.
Canada. If you acquired this software in Canada, you may stop receiving updates by turning off the automatic update feature, disconnecting your device from the Internet (if and when you re-connect to the Internet, however, the software will resume checking for and installing updates), or uninstalling the software. The product documentation, if any, may also specify how to turn off updates for your specific device or software.
Germany and Austria.
Warranty. The properly licensed software will perform substantially as described in any Microsoft materials that accompany the software. However, Microsoft gives no contractual guarantee in relation to the licensed software.
Limitation of Liability. In case of intentional conduct, gross negligence, claims based on the Product Liability Act, as well as, in case of death or personal or physical injury, Microsoft is liable according to the statutory law.
Subject to the foregoing clause (ii), Microsoft will only be liable for slight negligence if Microsoft is in breach of such material contractual obligations, the fulfillment of which facilitate the due performance of this agreement, the breach of which would endanger the purpose of this agreement and the compliance with which a party may constantly trust in (so-called "cardinal obligations"). In other cases of slight negligence, Microsoft will not be liable for slight negligence.

DISCLAIMER OF WARRANTY. The software is licensed “as-is.” You bear the risk of using it. Microsoft gives no express warranties, guarantees or conditions. To the extent permitted under your local laws, Microsoft excludes the implied warranties of merchantability, fitness for a particular purpose and non-infringement.
LIMITATION ON AND EXCLUSION OF DAMAGES. You can recover from Microsoft and its suppliers only direct damages up to U.S. $5.00. You cannot recover any other damages, including consequential, lost profits, special, indirect or incidental damages.

This limitation applies to (a) anything related to the software, services, content (including code) on third party Internet sites, or third party applications; and (b) claims for breach of contract, breach of warranty, guarantee or condition, strict liability, negligence, or other tort to the extent permitted by applicable law.

It also applies even if Microsoft knew or should have known about the possibility of the damages. The above limitation or exclusion may not apply to you because your state or country may not allow the exclusion or limitation of incidental, consequential or other damages.
```

As the license allows the development of applications and for third party software there is no ethical concerns in regards to using VS code and other imported software providing the imported softwares licensing conditions are met.
