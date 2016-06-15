from django.db import models


class Hero(models.Model):
    str = 'str'
    agi = 'agi'
    int = 'int'
    ATTRIBUTES = [
        (str,'Strength'),
        (agi,'Agility'),
        (int,'Intelligence')
    ]
    name = models.CharField(max_length=35, unique=True)
    primary_attr = models.CharField(max_length=3, choices=ATTRIBUTES)
    str_base = models.PositiveSmallIntegerField()
    str_gain = models.FloatField()
    agi_base = models.PositiveSmallIntegerField()
    agi_gain = models.FloatField()
    int_base = models.PositiveSmallIntegerField()
    int_gain = models.FloatField()
    regen_base = models.FloatField()
    armor_base = models.FloatField()
    move_base = models.PositiveSmallIntegerField()
    turn_speed = models.FloatField()

    dmg_min_base = models.PositiveSmallIntegerField()
    dmg_max_base = models.PositiveSmallIntegerField()

    atk_range = models.PositiveSmallIntegerField()
    base_atk_time = models.FloatField()

    vision_range_day = models.PositiveSmallIntegerField()
    vision_range_night = models.PositiveSmallIntegerField()

    model_size = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.name
