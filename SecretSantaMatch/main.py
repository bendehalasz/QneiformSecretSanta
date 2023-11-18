import random


def read_txt_file(file_path):
    data_list = []
    password_set = set()
    try:

        with open(file_path, 'r') as file:
            for line in file:
                # Split each line into name and email using tab as the separator
                name, email = line.strip().split('\t')

                new_password = generate_random_password()
                while new_password in password_set:
                    new_password = generate_random_password()
                password_set.add(new_password)

                data_list.append({'Name': name, 'Email': email, 'Password': new_password})
    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except Exception as e:
        print(f"An error occurred: {e}")

    return data_list


def generate_random_password(num_words=1, separator=''):
    christmas_words = ['candle', 'wreath', 'gingerbread', 'nutcracker', 'star',
                       'bell', 'garland', 'ornament', 'snowflake', 'ribbon', 'snowman', 'present',
                       'fireplace'
                       ]
    # Select a random subset of words
    selected_words = random.sample(christmas_words, num_words)

    # Concatenate the selected words with a separator
    password = separator.join(selected_words)

    password += str(random.randint(10, 99))

    return password


def generate_drawing(data_list):
    original_names = []
    for person in data_list:
        original_names.append(person["Name"])

    shuffled_names = original_names.copy()

    # # Shuffle the list until no name is at the same index in the original and shuffled lists
    # while any(original_name == shuffled_name for original_name, shuffled_name in zip(original_names, shuffled_names)):
    own_draw = True
    while own_draw:
        own_draw = False
        random.shuffle(shuffled_names)
        for i in range(0, len(original_names)):
            own_draw = own_draw or (original_names[i] == shuffled_names[(i + 2) % len(original_names)])
        # print("suffle")
        # for j in range(0, len(original_names)):
        #     print(original_names[j], "-", shuffled_names[(j + 2) % len(original_names)])

    return shuffled_names


def dicontary_to_js_array(data_list):
    js_array = "[\n"
    for entry in data_list:
        js_array += f"  {str(entry)},\n"
    js_array += "]"
    return js_array


def list_to_js_array(data_list):
    js_array = "[\n"
    for entry in data_list:
        js_array += f"  {str(entry)},\n"
    js_array += "]"
    return js_array


# Replace 'your_file.txt' with the actual path to your text file
data_list = read_txt_file('input_data.txt')
print("var participants = ", dicontary_to_js_array(data_list))

shuffled_list = generate_drawing(data_list)
print("var shuffled_names = ", shuffled_list)

# for j in range(0, len(data_list)):
#     print(data_list[j]['Name'], "-", shuffled_list[(j + 2) % len(data_list)])
#
# print("")
# for j in range(0, len(data_list)):
#     print(data_list[j]['Name'], "-", shuffled_list[j])
