# Neural Network Graph Visualization with React 📊🧠

Welcome to the Neural Network Graph Visualization project, an endeavor pioneered with zeal, utilizing the power of React. This platform is designed to provide a dynamic and interactive visualization of artificial neural networks (ANN), wherein each node represents a distinct neural network operator (such as Convolution, ReLU, Pooling, etc.), and the edges illustrate the data flow amongst them.

## Table of Contents

1. [Objective](#objective-🎯)
2. [Features](#features-🌟)
3. [Tech Stack](#tech-stack-🛠)
4. [Data Source](#data-source-📄)
5. [Getting Started](#getting-started-🚀)

## Objective 🎯

Embark on this exploration as we dive into developing a React application that meticulously visualizes an artificial neural network (ANN) as a graph. Delve into the intricate interaction among various neural network operators and the data flow connecting them.

## Features 🌟

Discover the interactive facets of the Neural Network Graph Visualization:

- **Graph Visualization**:
  - **Node Representation**: Nodes signify various types of neural network operators, delineated by distinct geometric shapes or colors.
  - **Edge Representation**: Directed lines interlinking the nodes, depicting the data flow and encapsulating additional information.

  - **Interactivity**:
  - **Node Details**: Click on a node to unveil detailed information in a sidebar, displaying the operator's type and parameters.
  - **Tooltip**: Hover over a node to exhibit a tooltip containing the operator's type.
  - **Navigation**: Employ zoom and pan functionalities for an extensive network overview.

- **UI Controls**:
  - **Node Filtering**: Employ a search input and dropdown menu to filter nodes based on operator types.
  - **Dynamic Updates**: Add or remove nodes dynamically, refreshing the network graph in real-time.
  - **Background Variants**: Select from an array of background options including dots, lines, or cross.

- **Animations**: Relish the fluid edge animations that vividly portray the data flow.

## Tech Stack 🛠

The core constituents of the project encompass:

- **React**: The cornerstone framework for crafting the UI components.
- **React Flow**: Employed for forging visually captivating graph visualizations.

## Data Source 📄
The data architecture embodies illustrious network frameworks like AlexNet, enabling a realistic representation of deep neural networks.

- **Node Structure**:
```js
{
  "id": "2",
  "type": "Convolution",
  "data": {
    "label": "Conv Layer 1",
    "parameters": { "kernel_size": 11, "stride": 4, "filters": 96 }
  },
  "position": { "x": 250, "y": 100 },
  "sourcePosition": "bottom",
  "targetPosition": "top"
}
```

- **Edge Structure**:
```js
{
  "id": "e1-2",
  "source": "1",
  "target": "2",
  "animated": true
}
```

## Getting Started 🚀

Initiate your engagement with the Neural Network Graph Visualization project:

1. **Clone the Repository**:
```bash
git clone https://github.com/AdrianGeorgeM/Neural-Network-Graph-React.git
cd Neural-Network-Graph-React
```

2. **Install Dependencies**:
```bash
npm install
```

3. **Run the Application**:
```bash
npm start
```

Access the application at [http://localhost:3000](http://localhost:3000).

...

## License 📝

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/AdrianGeorgeM/Neural-Network-Graph-React/blob/main/LICENSE.md) file for details.

...


## Submission ✉️

- **Repository**: Please create a private GitHub/GitLab repository to house the code and share the link with us upon completion.
- **Deadline**: We look forward to receiving your submission within 7 days of receipt of this brief, or as mutually agreed with our hiring representative.
- **Ownership**: The work generated remains your property. Post the recruitment process, you are at liberty to open-source or share it as a part of your portfolio.
