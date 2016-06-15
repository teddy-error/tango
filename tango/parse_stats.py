import csv
import django
django.setup()
from heroes.models import Hero

with open('../dotobuilder/stats_test.csv', newline='') as testfile:
    heroes = csv.reader(testfile, delimiter=',')
    for hero in heroes:
        new_hero = Hero()
        new_hero.name = hero[0]
        new_hero.primary_attr = hero[1]
        new_hero.str_base = hero[2]
        new_hero.str_gain = hero[3]
        new_hero.agi_base = hero[4]
        new_hero.agi_gain = hero[5]
        new_hero.int_base = hero[6]
        new_hero.int_gain = hero[7]
        new_hero.move_base = hero[11]
        new_hero.armor_base = hero[12]
        new_hero.dmg_min_base = hero[13]
        new_hero.dmg_max_base = hero[14]
        new_hero.atk_range = hero[15]
        new_hero.base_atk_time = hero[16]
        new_hero.vision_range_day = hero[19]
        new_hero.vision_range_night = hero[20]
        new_hero.turn_speed = hero[21]
        new_hero.model_size = hero[22]
        new_hero.regen_base = hero[23]

        print(new_hero)
