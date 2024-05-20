# Tour Map

This project is a simple interactive map that allows users to click on specific locations to open an image associated with each location. It is designed primarily for use with a web browser and was created to facilitate choosing a destination on a bicycle tour.

## Features

- Displays a map with marked locations (Halden and Fredrikstad).
- Click on a marked location to open an image associated with that location.
- Red dots indicate the clickable areas on the map.
- Console logs the click coordinates and distances to the marked locations.

## How to Use

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Maremoo2/Kart.git
    cd Kart
    ```

2. **Start a local server**: This step assumes you have Python installed. You can start a simple HTTP server using Python by running:
    ```sh
    python -m http.server 8080
    ```

3. **Open the application**: Navigate to `http://localhost:8080/index.html` in your web browser.

4. **Interact with the map**: Click on the red dots to open images of Halden and Fredrikstad.

## Improvements
**Add More Points**: Add more locations with images to make the map more comprehensive.
**Browser Compatibility**: This application works best in Google Chrome. Some features may not work correctly in other browsers like Edge.
**Mobile Responsiveness**: Adjust the canvas and image display for better viewing on mobile devices.
**Dynamic Data Loading**: Load location data dynamically from a server or a database to make the map scalable.
**Error Handling**: Improve error handling when fetching images or handling clicks outside defined areas.

##Contributions
Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or create a pull request.
