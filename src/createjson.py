import json

# Adjusting the function to avoid the syntax error and complete the faculty members list
def create_faculty_json(name, department, position, image, biography, classes, socials=[]):
    faculty_data = {
        "name": name,
        "department": department,
        "position": position,
        "image": image,
        "biography": biography,
        "socials": socials,
        "classes": classes
    }
   filename = f"{name.replace(' ', '_').lower()}.json"
    with open(filename, 'w') as f:
        json.dump(faculty_data, f, indent=2)
    return filename

faculty_members = [
    # Completing the faculty members list with corrected information
     {
        "name": "Dr. Maria Teresa Mendoza",
        "department": "Industrial Engineering",
        "position": "Chairperson",
        "image": "https://firebasestorage.googleapis.com/v0/b/tip-ie-dev.appspot.com/o/Faculty%26Admin%2FDr.%20Maria%20Teresa%20Mendoza%20(1)%20(1).png?alt=media&token=124923a9-c8d9-4b21-973c-c0ebd23830c2",
        "biography": "Sample Bio: Dr. Elena Rodriguez, PhD, is a distinguished industrial engineer whose passion for problem-solving and innovation has propelled her to the forefront of her field. Born and raised in Madrid, Spain, Dr. Rodriguez exhibited an early aptitude for mathematics and science, foreshadowing her future academic pursuits.",
        "classes": {"All IE Courses": ""},
        "socials": []
    },
    {
        "name": "Ms. Charlotte Kaye Bas",
        "department": "Industrial Engineering",
        "position": "Secretary",
        "image": "https://firebasestorage.googleapis.com/v0/b/tip-ie-dev.appspot.com/o/Faculty%26Admin%2FMs.%20Charlotte%20Kaye%20Bas%20(1).png?alt=media&token=23ed0fc6-62b4-4327-a825-e89bc01d1969",
        "biography": "Sample Bio: Ms. Charlotte Kaye Bas is a dedicated secretary in the Industrial Engineering department, known for her meticulous organization and supportive nature. She plays a critical role in the smooth operation of the department, ensuring that both faculty and students have the resources they need to succeed.",
        "classes": {"All IE Courses": ""},
        "socials": []
    },
    {
        "name": "Engr. Richard Abayhon",
        "department": "Industrial Engineering",
        "position": "Professor",
        "image": "https://firebasestorage.googleapis.com/v0/b/tip-ie-dev.appspot.com/o/Faculty%26Admin%2FEngr.%20Richard%20Abayhon%20(1).png?alt=media&token=96e5f5cc-48d9-44b8-a9cb-56074279b283",
        "biography": "Sample Bio: Engr. Richard Abayhon, with extensive experience in the field of industrial engineering, brings a wealth of knowledge and practical skills to his students. His teaching focuses on applying engineering principles to solve complex industrial problems.",
        "classes": {"All IE Courses": ""},
        "socials": []
    },
    {
        "name": "Engr. Ricardo Rabang",
        "department": "Industrial Engineering",
        "position": "Professor",
        "image": "https://firebasestorage.googleapis.com/v0/b/tip-ie-dev.appspot.com/o/Faculty%26Admin%2FEngr.%20Ricardo%20Rabang%20(1).PNG?alt=media&token=2e049a4c-2c62-42f8-ac09-b9d645ed2d78",
        "biography": "Sample Bio: Engr. Ricardo Rabang is renowned for his innovative teaching methods and his ability to inspire students. His research interests include sustainable engineering practices and the development of efficient industrial systems.",
        "classes": {"All IE Courses": ""},
        "socials": []
    }
]

created_files = []

for faculty_member in faculty_members:
    filename = create_faculty_json(**faculty_member)
    created_files.append(filename)

created_files_paths = [f"/mnt/data/{filename}" for filename in created_files]
created_files_paths
