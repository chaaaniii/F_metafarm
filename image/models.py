from django.db import models

# Create your models here.
class ImageFile(models.Model):
    title = models.CharField(max_length=30)
    image = models.ImageField(upload_to='uploads')

    # class Meta:
    #     ordering = ['-title']