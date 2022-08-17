from django.contrib import admin
from image.models import ImageFile

class ImageFile_admin(admin.ModelAdmin):
    # fields = ['name', 'date']
    search_fields = ['ImageFile']

admin.site.register(ImageFile, ImageFile_admin)


