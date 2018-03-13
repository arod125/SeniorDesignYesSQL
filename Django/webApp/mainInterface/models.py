from django.db import models

# Create your models here.
class Parts(models.Model):
    # id = models.CharField(max_length=64,)
    PartName = models.CharField(max_length=64,)
    Material = models.CharField(max_length=64,)
    # name = models.CharField(max_length=64, blank=True, null=True)
    # last_name = models.CharField(max_length=64,)
    # slug = models.SlugField()