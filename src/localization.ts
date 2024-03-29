// Define a Component interface to represent components with text and IDs
interface Component {
  id: string;
  text: string;
}

// Function to load components from a file
function loadComponentsFromFile(filePath: string): Promise<Component[]> {
  return new Promise((resolve, reject) => {
    // Assuming you're using fetch API for loading files
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load components file");
        }
        return response.text();
      })
      .then((data) => {
        // Parse the file content
        const components: Component[] = JSON.parse(data);
        resolve(components);
      })
      .catch((error) => reject(error));
  });
}

// Function to populate components on page load
function populateComponents(components: Component[]): void {
  components.forEach((component) => {
    const element = document.getElementById(component.id);
    if (element) {
      element.textContent = component.text;
    }
  });
}

// Function to execute on page load
export function onPageLoad(pathStart:string): void {
  const filePath = pathStart + "/languages/english.json"; // File containing component IDs and text
  loadComponentsFromFile(filePath)
    .then((components) => {
      populateComponents(components);
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
