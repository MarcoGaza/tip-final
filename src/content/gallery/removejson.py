import os
import glob

# Define the directory where the JSON files are located
directory = 'C:\\Users\\markg\\MyWorkspace\\tipiedev\\src\\content\\gallery'

# Pattern to match all JSON files
json_files = glob.glob(os.path.join(directory, '*.json'))

# Loop through the list of files and remove each one
for file_path in json_files:
    try:
        os.remove(file_path)
        print(f"Deleted: {file_path}")
    except Exception as e:
        print(f"Failed to delete {file_path}: {str(e)}")

print("All JSON files have been removed.")
