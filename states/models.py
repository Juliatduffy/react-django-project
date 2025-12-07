from django.db import models

# probably shouldnt be using a string as a pk but I dont care
class State(models.Model):
    name = models.CharField(max_length=50)
    abbreviation = models.CharField(max_length=5)
    capital = models.CharField(max_length=50)
    flower = models.CharField(max_length=50)
    bird = models.CharField(max_length=100)
    description = models.TextField()
    population = models.IntegerField()
    nickname = models.CharField(max_length=100, null=True)
    img = models.ImageField(upload_to="states/", null=True, blank=True)  
    

