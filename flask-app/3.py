from flask import Flask, request, jsonify, render_template
from shapely.geometry import Polygon
import numpy as np
import os
import matplotlib.pyplot as plt
from geopy.distance import geodesic
from flask_cors import CORS

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)  # Enable CORS for all routes

@app.route('/')
def index():
    return render_template('index.html')

def calculate_polygon_properties(polygon):
    side_dimensions = []
    for i in range(len(polygon) - 1):
        point1 = polygon[i]
        point2 = polygon[i + 1]
        distance = geodesic(point1, point2).meters
        distance_feet = distance * 3.28084
        side_dimensions.append(distance_feet)

    return side_dimensions

def plot_polygon_with_properties(polygon, side_dimensions):
    x_coordinates, y_coordinates = zip(*polygon)

    plt.figure()
    plt.plot(x_coordinates, y_coordinates, '-o', label='Polygon')

    for i, ((x1, y1), (x2, y2)) in enumerate(zip(polygon[:-1], polygon[1:])):
        midpoint_x = (x1 + x2) / 2
        midpoint_y = (y1 + y2) / 2
        plt.text(midpoint_x, midpoint_y, f'{side_dimensions[i]:.2f} ft', ha='center', va='bottom')

    plt.xlabel('Longitude')
    plt.ylabel('Latitude')
    plt.title('Polygon with Dimensions')
    plt.grid(True)
    plt.legend()
    
    image_path = 'static/polygon_plot.png'
    plt.savefig(image_path)
    plt.close()  # Close the plot to avoid displaying it in the terminal
    
    return image_path

@app.route('/generate_grid', methods=['POST'])
def generate_grid():
    data = request.json
    shapes = data.get('shapes', [])

    if not shapes:
        return jsonify({'error': 'No shapes provided'}), 400

    polygon_coordinates = shapes[0]['geometry']['coordinates'][0]
    side_dimensions = calculate_polygon_properties(polygon_coordinates)

    image_path = plot_polygon_with_properties(polygon_coordinates, side_dimensions)

    return jsonify({'success': True, 'image_path': image_path})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
