# Tapermonkeey Script

This is a collection of all the tapermonkey scripts I have created which may be hlepful for other people.

## 1. TakeUForward Code Execution Shortcuts

This Tampermonkey script adds custom keyboard shortcuts to the coding environment on [takeuforward.org](https://takeuforward.org/). It allows you to quickly run and submit your code using simple key combinations, improving your workflow and efficiency.

### Features

* **Ctrl + ' (Single Quote):** Triggers the "Run Code" button.
* **Ctrl + Enter:** Triggers the "Submit" button.

### Installation

To use this script, you need to have the Tampermonkey browser extension installed. Tampermonkey is a popular userscript manager available for various browsers:

* **Google Chrome:** Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
* **Mozilla Firefox:** Install from [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).
* **Safari (macOS):** Install from the [Mac App Store](https://apps.apple.com/us/app/tampermonkey/id1482490089).

Once you have Tampermonkey installed, you can install this script in one of two ways:

#### Method 1: Direct Installation from a Raw File (Recommended)

1.  Navigate to the raw version of the script file (e.g., if you upload the `.user.js` file to a GitHub repository, find the "Raw" button and click it). The URL will typically end with `.user.js`.
2.  Your browser should automatically prompt you to install the script via Tampermonkey.
3.  Click the "Install" button on the Tampermonkey installation page.

#### Method 2: Copy-Pasting into Tampermonkey

1.  Copy the entire content of the `your-script-filename.user.js` file (the code block provided).
2.  Click on the Tampermonkey extension icon in your browser toolbar.
3.  Select "Create a new script...".
4.  A new tab with a basic script template will open. Delete the existing template code.
5.  Paste the copied script content into the editor.
6.  Go to **File** > **Save** (or press `Ctrl + S` / `Cmd + S`).

#### Usage

Once the script is installed and enabled in Tampermonkey, it will automatically run on any page under the `takeuforward.org` domain.

1.  Navigate to a coding problem or any interactive coding environment on [takeuforward.org](https://takeuforward.org/) where you have "Run Code" and "Submit" buttons.
2.  When you want to **run your code**, press **`Ctrl + '`** (Ctrl key and the single quote key). This will simulate a click on the "Run Code" button.
3.  When you are ready to **submit your code**, press **`Ctrl + Enter`**. This will simulate a click on the "Submit" button.

## Contributing

If you have any suggestions, bug reports, or would like to contribute to this script, feel free to open an issue or submit a pull request to the repository.
