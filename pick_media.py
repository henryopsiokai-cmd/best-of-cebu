import json
import random

with open('media_index.json', 'r') as f:
    data = json.load(f)

# Combine all files from all weeks
all_files = []
for week in data:
    all_files.extend(data[week])

# Filter for images only
images = [f for f in all_files if f['mimeType'].startswith('image/')]

# Patterns based on filename ranges (observed from index)
sakura_images = [f for f in images if f['name'].startswith('IMG_86')]
gureum_images = [f for f in images if f['name'].startswith('IMG_79') or f['name'].startswith('IMG_80') or f['name'].startswith('IMG_81')]
tablea_images = [f for f in images if f['name'].startswith('IMG_83') or f['name'].startswith('IMG_82')]

def get_random_set(source, count):
    if len(source) < count:
        return [f['id'] for f in source]
    return [f['id'] for f in random.sample(source, count)]

# Selection
sets = {
    "sakura": get_random_set(sakura_images, 4),
    "gureum": get_random_set(gureum_images, 4),
    "tablea": get_random_set(tablea_images, 4)
}

print(json.dumps(sets, indent=2))
