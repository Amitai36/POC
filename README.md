# firstApp

firstApp is an Electron-based project that creates an application window using customizable settings defined in an external configuration file.

## Table of Contents

-   [Key Features]()
    
-   [Configuration File]()
    
-   [Example Configuration]()
    
-   [Changing the Settings]()
    
-   [Running the App (Development Mode)]()
    
-   [Running the App After Build])
    
-   [Note]()
    
-   [Prerequisites]()
    
-   [Additional Info]()
    

## Key Features

-   Creates an Electron-based application window
    
-   Window properties like position, background color, and size are defined in an external JSON file
    
-   Easily update configurations without touching the source code
    

## Configuration File

This file is named `fisrtConfig.json` and contains the settings for the application window. You can define properties such as:

-   `x` – Horizontal position of the window
    
-   `y` – Vertical position of the window
    
-   `width` – Window width
    
-   `height` – Window height
    
-   `backgroundColor` – Background color of the window (e.g., `#ffffff`)
    

## Example Configuration

Example content for `fisrtConfig.json`:

```json
{
  "x": 100,
  "y": 100,
  "width": 800,
  "height": 600,
  "backgroundColor": "#f0f0f0"
}

```

## Changing the Settings

To change the window settings:

1.  Open the `fisrtConfig.json` file
    
2.  Edit the desired values (e.g., change `backgroundColor`)
    
3.  Save the file and restart the application
    

## Running the App (Development Mode)

1.  Install dependencies:
    

```bash
npm install

```

2.  Start the application:
    

```bash
npm start

```

## Running the App After Build

If you've built the project and have a binary file (e.g., `pos1`), you can run it like this:

```bash
cd ~/Desktop/POC/fisrtApp/out/pos1-linux-x64
./pos1

```

## Note

If you encounter a permission error (Permission denied), run the following commands:

```bash
chmod +x pos1
./pos1

```

## Prerequisites

-   Node.js installed on your machine
    
-   npm (comes with Node.js)
    

## Additional Info

This project is a basic template for learning how to work with Electron and create desktop apps using external configuration files for simplicity and flexibility.

Good luck!


# secApp

firstApp is an Electron-based project that creates an application window using customizable settings defined in an external configuration file.

## Table of Contents

-   [Key Features]()
    
-   [Configuration File]()
    
-   [Example Configuration]()
    
-   [Changing the Settings]()
    
-   [Running the App (Development Mode)]()
    
-   [Running the App After Build]()
    
-   [Note]()
    
-   [Prerequisites]()
    
-   [Additional Info]()
    

## Key Features

-   Creates an Electron-based application window
    
-   Window properties like position, background color, and size are defined in an external JSON file
    
-   Easily update configurations without touching the source code
    

## Configuration File

This file is named `secConfig.json` and contains the settings for the application window. You can define properties such as:

-   `x` – Horizontal position of the window
    
-   `y` – Vertical position of the window
    
-   `width` – Window width
    
-   `height` – Window height
    
-   `backgroundColor` – Background color of the window (e.g., `#ffffff`)
    

## Example Configuration

Example content for `secConfig.json`:

```json
{
  "x": 100,
  "y": 100,
  "width": 800,
  "height": 600,
  "backgroundColor": "#f0f0f0"
}

```

## Changing the Settings

To change the window settings:

1.  Open the `secConfig.json` file
    
2.  Edit the desired values (e.g., change `backgroundColor`)
    
3.  Save the file and restart the application
    

## Running the App (Development Mode)

1.  Install dependencies:
    

```bash
npm install

```

2.  Start the application:
    

```bash
npm start

```

## Running the App After Build

If you've built the project and have a binary file (e.g., `pos1`), you can run it like this:

```bash
cd ~/Desktop/POC/secConfig/out/pos1-linux-x64
./pos1

```

## Note

If you encounter a permission error (Permission denied), run the following commands:

```bash
chmod +x pos1
./pos1

```

## Prerequisites

-   Node.js installed on your machine
    
-   npm (comes with Node.js)
    

## Additional Info

This project is a basic template for learning how to work with Electron and create desktop apps using external configuration files for simplicity and flexibility.

Good luck!
