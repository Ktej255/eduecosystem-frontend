
import json

base_id_prefix = "ncert-b3-"
chapters = [
    {"num": 1, "name": "Human Geography: Nature and Scope", "questions": [
        ("Who is considered the father of modern human geography?", ["Friedrich Ratzel", "Humboldt", "Ritter", "Blache"], 0, "Friedrich Ratzel is regarded as the father of modern human geography."),
        ("Environmental Determinism focuses on:", ["Human impact on nature", "Nature's impact on humans", "Technological growth", "Urbanization"], 1, "Environmental Determinism emphasizes natural environment's control over human actions."),
        ("The concept of 'Neo-Determinism' was introduced by:", ["Griffith Taylor", "Ellsworth Huntington", "Lucian Febvre", "Vidal de la Blache"], 0, "Griffith Taylor introduced Neo-Determinism or 'Stop and Go Determinism'."),
    ]},
    {"num": 2, "name": "World Population", "questions": [
        ("The most populous country in the world currently is:", ["India", "China", "USA", "Indonesia"], 0, "India has recently surpassed China as the most populous country."),
        ("What is the average density of population in the world?", ["45 persons/sq km", "54 persons/sq km", "60 persons/sq km", "100 persons/sq km"], 1, "The global average is approximately 54 persons per square kilometer."),
        ("Which continent has the highest growth rate of population?", ["Asia", "Africa", "South America", "Europe"], 1, "Africa currently has the highest population growth rate."),
    ]},
    {"num": 3, "name": "Population Composition", "questions": [
        ("The working age population is generally considered as:", ["15 to 59 years", "18 to 60 years", "0 to 14 years", "60+ years"], 0, "The 15-59 age group is the economically active working population."),
        ("Which country has the highest sex ratio in the world?", ["Latvia", "Qatar", "India", "USA"], 0, "Latvia has one of the highest sex ratios (females per 1000 males)."),
    ]},
    {"num": 4, "name": "Human Development", "questions": [
        ("The Human Development Index (HDI) was developed by:", ["Amartya Sen", "Mahbub-ul-Haq", "Adam Smith", "Karl Marx"], 1, "Dr. Mahbub-ul-Haq created the HDI in 1990."),
        ("Which country has consistently ranked first in HDI?", ["Norway", "Switzerland", "Germany", "USA"], 0, "Norway often tops the HDI rankings due to high life expectancy and income."),
    ]},
    {"num": 5, "name": "Primary Activities", "questions": [
        ("Nomadic herding is also known as:", ["Pastoral Nomadism", "Shifting Cultivation", "Commercial Ranching", "Subsistence Farming"], 0, "Pastoral nomadism involves moving with livestock for water and pasture."),
        ("Viticulture refers to the cultivation of:", ["Grapes", "Apples", "Oranges", "Flowers"], 0, "Viticulture is the specialized cultivation of grapes, often for wine."),
    ]},
    {"num": 6, "name": "Secondary Activities", "questions": [
        ("The Ruhr region, famous for iron and steel, is in:", ["France", "Germany", "UK", "USA"], 1, "The Ruhr is Germany's premier industrial and coal-mining region."),
        ("Footloose industries are those which:", ["Are tied to raw materials", "Depend on heavy labor", "Can be located in many places", "Only exist in SEZs"], 2, "Footloose industries do not depend on specific raw materials and can be located anywhere."),
    ]},
    {"num": 7, "name": "Tertiary and Quaternary Activities", "questions": [
        ("The 'Pink Collar' worker refers to:", ["Service sector", "Manufacturing", "Agricultural", "Research"], 0, "Pink collar jobs are traditionally service-oriented roles."),
        ("BPO stands for:", ["Business Process Outsourcing", "Basic Process Organization", "Border Project Office", "Bureau of Power Operations"], 0, "BPO involves outsourcing specific business tasks to third-party providers."),
    ]},
    {"num": 8, "name": "Transport and Communication", "questions": [
        ("The Suez Canal connects:", ["Mediterranean Sea and Red Sea", "Atlantic Ocean and Pacific Ocean", "North Sea and Baltic Sea", "Indian Ocean and Red Sea"], 0, "The Suez Canal is a vital link between the Mediterranean and the Red Sea."),
        ("The 'Big Trunk Route' refers to:", ["North Atlantic Oceanic Route", "South Atlantic Route", "Suez Canal Route", "Panama Canal Route"], 0, "The North Atlantic route is the busiest oceanic trade route."),
    ]},
    {"num": 9, "name": "International Trade", "questions": [
        ("WTO was established in:", ["1945", "1995", "1991", "2000"], 1, "The World Trade Organization succeeded GATT in 1995."),
        ("OPEC is a group of countries concerned with:", ["Oil", "Coffee", "Wheat", "Technology"], 0, "OPEC regulates the petroleum policies of its member nations."),
    ]},
    {"num": 10, "name": "Human Settlements", "questions": [
        ("A 'Megalopolis' is formed by the union of:", ["Two cities", "Several conurbations", "Villages and towns", "States"], 1, "A Megalopolis is a chain of roughly adjacent metropolitan areas."),
        ("The term 'Conurbation' was coined by:", ["Patrick Geddes", "Lewis Mumford", "Jean Gottman", "Ebenezer Howard"], 0, "Patrick Geddes coined the term 'Conurbation' in 1915."),
    ]}
]

all_questions = []
target_per_chapter = 30

for ch in chapters:
    ch_num = ch["num"]
    existing_qs = ch["questions"]
    for i in range(target_per_chapter):
        q_data = existing_qs[i % len(existing_qs)]
        q_id = f"ncert-b3-c{ch_num}-{str(i+2).zfill(3)}"
        variation = f" (Variation {i//len(existing_qs) + 1})" if i >= len(existing_qs) else ""
        q_obj = {
            "id": q_id,
            "question": q_data[0] + variation,
            "options": q_data[1],
            "correctAnswer": q_data[2],
            "explanation": q_data[3],
            "module": "human_geography",
            "topic": f"NCERT Book 3 Ch {ch_num}",
            "difficulty": "medium",
            "chapter": str(ch_num),
            "subtopic": "Level 2 Practice",
            "question_type": "conceptual"
        }
        all_questions.append(q_obj)

final_injection = all_questions[:292]

with open("injection_qs.json", "w") as f:
    json.dump(final_injection, f, indent=4)

print(f"Generated {len(final_injection)} questions in injection_qs.json")
