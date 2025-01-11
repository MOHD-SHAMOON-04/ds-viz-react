# Data Structures Visualizer

A React-based interactive web application for visualizing fundamental data structures such as Binary Search Tree (BST) and Linked List. Designed to make learning and understanding data structures more engaging and intuitive through animations and a clean user interface.

---

## Features

### Current Functionality
- **Binary Search Tree Visualization:**
  - Visualize the structure of a Binary Search Tree as you add nodes.
  - Animations for node insertion and deletion.
  - Nodes are displayed as pure DOM elements without links between them (currently under development).
  - Supports operations: **Insert**, **Delete**, and **Search**.

- **Linked List Visualization:**
  - Add and remove nodes to see the dynamic structure of a linked list.
  - Animations for node insertion and deletion.
  - Supports operations: **Insert**, **Delete**, and **Search**.

- **Interactive Animations:**
  - Smooth animations implemented with Framer Motion for transitions and interactivity.

- **Responsive Design:**
  - Built using Tailwind CSS for a responsive and visually appealing interface.

- **Dark Mode:**
  - Dark theme for better accessibility.

---

## Future Scope
- **Additional Data Structures:**
  - Incorporate visualization for other data structures like:
    - Stacks
    - Queues
    - Heaps
    - Graphs
  
- **Binary Tree Links:**
  - Implement links between nodes in the Binary Search Tree using SVGs, Canvas, or other efficient rendering techniques.

- **Enhanced Interaction:**
  - Allow users to input custom values for nodes.
  - Add operations like search, delete, and traversal for each data structure.

- **Educational Content:**
  - Include a brief description and use-cases for each data structure to make the tool more educational.

- **Export Functionality:**
  - Provide options to export the visualized data structures as images or JSON.

---

## Limitations
- **Binary Tree Links:**
  - Currently, there are no links between nodes in the Binary Search Tree since the visualization is built using only DOM elements.

- **Limited Data Structures:**
  - Only Binary Search Tree and Linked List are implemented at this stage.

- **Scalability Issues:**
  - Large datasets may lead to performance issues due to the use of DOM elements for rendering.

---

## Tech Stack

### Frontend
- **React:** For building the user interface and managing state.
- **React Router:** For navigation between different data structure visualizations.
- **Framer Motion:** For animations and smooth transitions.
- **Tailwind CSS:** For responsive and modern styling.

### Other Tools
- **Git:** For version control.
- **Vite:** As the build tool for faster development.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/data-structures-visualizer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd data-structures-visualizer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:5173
   ```

---

## Usage
- Navigate through different data structure visualizations using the provided links.
- Interact with the data structures by adding or removing nodes.
- Observe the animations to understand how the data structures evolve.

[Try Now](https://your-deployment-link.com)

---

## Contributing
Contributions are welcome! If you have suggestions or feature requests, please open an issue or submit a pull request. For major changes, please open an issue to discuss your ideas first.

---

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

---

## Acknowledgments
- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
