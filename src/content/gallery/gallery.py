import firebase_admin
from firebase_admin import credentials, storage
import json
import os
import datetime

# Initialize Firebase Admin
cred = credentials.Certificate(r'C:\Users\markg\Downloads\cj-001-firebase-adminsdk-ga4x3-3192de45ed.json')
firebase_admin.initialize_app(cred, {
    'storageBucket': 'cj-001.appspot.com'
})

# Reference to the Firebase storage bucket
bucket = storage.bucket()

# Directory to save JSON files
output_directory = './src/content/gallery'
os.makedirs(output_directory, exist_ok=True)

# Generate JSON files for each image
for i in range(1, 100):
    image_name = f'gallery-img-{i}.jpg'  # Ensure the extension matches your files
    file_path = f'gallery/{image_name}'
    blob = bucket.blob(file_path)
    print(f'Checking existence for: {file_path}')  # Debugging output
    if blob.exists():
        file_url = blob.generate_signed_url(version="v4", expiration=datetime.timedelta(minutes=15), method="GET")
        data = {
            'id': str(i),
            'title': f'Image {i}',
            'description': f'Description for Image {i}',
            'link': file_url
        }
        json_path = os.path.join(output_directory, f'{image_name}.json')
        with open(json_path, 'w') as f:
            json.dump(data, f, indent=4)
        print(f'Generated JSON for {image_name} at {json_path}')
    else:
        print(f'{image_name} does not exist in the bucket')

print('JSON files generation process completed.')
